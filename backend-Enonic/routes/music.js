import express from 'express';

const router = express.Router();

let musicTracks = [
  {
    id: 1,
    title: "AI-Generated Symphony",
    artist: "Aryan Sharma",
    genre: "Electronic",
    duration: "3:45",
    audioUrl: "/music/track1.mp3",
    coverArt: "/music/cover1.jpg",
    description: "An experimental track blending AI and human creativity",
    createdAt: new Date().toISOString()
  }
];

// GET all music tracks
router.get('/', (req, res) => {
  res.json({
    success: true,
    count: musicTracks.length,
    data: musicTracks
  });
});

// GET single track
router.get('/:id', (req, res) => {
  const track = musicTracks.find(t => t.id === parseInt(req.params.id));
  
  if (!track) {
    return res.status(404).json({
      success: false,
      error: 'Track not found'
    });
  }
  
  res.json({ success: true, data: track });
});

export default router;
