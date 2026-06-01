import express from 'express';
import { body } from 'express-validator';
import { validate } from '../middleware/validation.js';

const router = express.Router();

// POST contact form
router.post('/',
  [
    body('name').notEmpty().trim(),
    body('email').isEmail().normalizeEmail(),
    body('message').notEmpty().trim().isLength({ min: 10 })
  ],
  validate,
  async (req, res) => {
    try {
      const { name, email, message } = req.body;
      
      // TODO: Send email notification
      // TODO: Store in database
      
      console.log('📧 New contact form submission:', { name, email });
      
      res.json({
        success: true,
        message: 'Thank you for reaching out! I\'ll get back to you soon.'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Failed to send message. Please try again.'
      });
    }
  }
);

export default router;
