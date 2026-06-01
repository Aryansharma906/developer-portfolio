import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(compression());
app.use(cors({
  origin: ['http://localhost:5173', 'https://aryansharma906.github.io'],
  credentials: true
}));
app.use(express.json());

// Sample data
let projects = [
  {
    id: 1,
    title: "AI-Powered Portfolio",
    description: "Modern portfolio with AI chat",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Aryansharma906/developer-portfolio",
    live: "https://aryansharma906.github.io/developer-portfolio/",
    featured: true
  }
];

let posts = [
  {
    id: 1,
    title: "Building with React & TypeScript",
    slug: "react-typescript",
    excerpt: "My portfolio journey",
    tags: ["React", "TypeScript"],
    published: true
  }
];

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.get('/api/projects', (req, res) => {
  res.json({ success: true, data: projects });
});

app.get('/api/projects/:id', (req, res) => {
  const project = projects.find(p => p.id === parseInt(req.params.id));
  res.json({ success: true, data: project });
});

app.get('/api/blog', (req, res) => {
  res.json({ success: true, data: posts });
});

app.get('/api/blog/:slug', (req, res) => {
  const post = posts.find(p => p.slug === req.params.slug);
  res.json({ success: true, data: post });
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('📧 Contact:', { name, email });
  res.json({ success: true, message: 'Thanks! I\'ll get back to you soon.' });
});

app.get('/api/music', (req, res) => {
  res.json({
    success: true,
    data: [
      { id: 1, title: "AI Symphony", artist: "Aryan Sharma", genre: "Electronic", duration: "3:45" }
    ]
  });
});

app.get('/api/research', (req, res) => {
  res.json({
    success: true,
    data: [
      { id: 1, title: "Psychometric Analysis with Neural Networks", authors: ["Aryan Sharma"] }
    ]
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📡 Test at http://localhost:${PORT}/api/health`);
});
