require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const { z } = require('zod');

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

const DATA_DIR = path.join(__dirname, 'data');

function loadJson(filename) {
    try {
        const p = path.join(DATA_DIR, filename);
        if (fs.existsSync(p)) return JSON.parse(fs.readFileSync(p, 'utf8'));
        return [];
    } catch (err) {
        console.error('Failed to load', filename, err);
        return [];
    }
}

app.get('/api/projects', (req, res) => {
    const projects = loadJson('projects.json');
    res.json(projects);
});

app.get('/api/testimonials', (req, res) => {
    const testimonials = loadJson('testimonials.json');
    res.json(testimonials);
});

app.get('/api/blog', (req, res) => {
    const posts = loadJson('blog.json');
    // simple pagination support via query
    const page = Math.max(1, parseInt(req.query.page || '1', 10));
    const per = Math.max(1, parseInt(req.query.per || '10', 10));
    const start = (page - 1) * per;
    const paged = posts.slice(start, start + per);
    res.json({ page, per, total: posts.length, posts: paged });
});

const ContactSchema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    message: z.string().min(1)
});

app.post('/api/contact', (req, res) => {
    const result = ContactSchema.safeParse(req.body);
    if (!result.success) return res.status(400).json({ error: result.error.issues });
    // For now just echo back and pretend to enqueue/send the message
    const payload = { receivedAt: new Date().toISOString(), ...result.data };
    res.json({ status: 'ok', payload });
});

// Serve certificate files and other static public folder if exists
const PUBLIC_DIR = path.join(__dirname, '..', 'public');
if (fs.existsSync(PUBLIC_DIR)) {
    app.use('/certificates', express.static(path.join(PUBLIC_DIR, 'certificates')));
    app.use(express.static(path.join(PUBLIC_DIR)));
}

// Serve frontend build if available
const DIST_DIR = path.join(__dirname, '..', 'dist');
if (fs.existsSync(DIST_DIR)) {
    app.use(express.static(DIST_DIR));
    app.get('*', (req, res) => {
        res.sendFile(path.join(DIST_DIR, 'index.html'));
    });
}

// global error handler
app.use((err, req, res, next) => {
    console.error('Unhandled error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
