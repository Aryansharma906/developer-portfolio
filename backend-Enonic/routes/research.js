import express from 'express';

const router = express.Router();

let researchPapers = [
  {
    id: 1,
    title: "Psychometric Analysis Using Neural Networks",
    abstract: "Exploring the application of deep learning in personality assessment",
    authors: ["Aryan Sharma"],
    keywords: ["AI", "Machine Learning", "Psychometrics"],
    pdfUrl: "/research/paper1.pdf",
    publishedDate: new Date().toISOString(),
    citations: 0
  }
];

// GET all research papers
router.get('/', (req, res) => {
  res.json({
    success: true,
    count: researchPapers.length,
    data: researchPapers
  });
});

// GET single research paper
router.get('/:id', (req, res) => {
  const paper = researchPapers.find(p => p.id === parseInt(req.params.id));
  
  if (!paper) {
    return res.status(404).json({
      success: false,
      error: 'Research paper not found'
    });
  }
  
  res.json({ success: true, data: paper });
});

export default router;
