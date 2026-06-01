import express from 'express';
import { body } from 'express-validator';
import { validate } from '../middleware/validation.js';

const router = express.Router();

// Temporary in-memory storage (replace with database)
let projects = [
  {
    id: 1,
    title: "AI-Powered Portfolio",
    description: "A modern portfolio with AI chat integration",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
    github: "https://github.com/Aryansharma906/developer-portfolio",
    live: "https://aryansharma906.github.io/developer-portfolio/",
    image: "/projects/portfolio.png",
    featured: true,
    createdAt: new Date().toISOString()
  }
];

// GET all projects
router.get('/', (req, res) => {
  const { featured } = req.query;
  
  let filteredProjects = projects;
  if (featured === 'true') {
    filteredProjects = projects.filter(p => p.featured);
  }
  
  res.json({
    success: true,
    count: filteredProjects.length,
    data: filteredProjects
  });
});

// GET single project
router.get('/:id', (req, res) => {
  const project = projects.find(p => p.id === parseInt(req.params.id));
  
  if (!project) {
    return res.status(404).json({
      success: false,
      error: 'Project not found'
    });
  }
  
  res.json({ success: true, data: project });
});

// POST new project (protected - add auth later)
router.post('/',
  [
    body('title').notEmpty().trim(),
    body('description').notEmpty().trim(),
    body('technologies').isArray(),
  ],
  validate,
  (req, res) => {
    const newProject = {
      id: projects.length + 1,
      ...req.body,
      createdAt: new Date().toISOString()
    };
    
    projects.push(newProject);
    
    res.status(201).json({
      success: true,
      data: newProject
    });
  }
);

export default router;
