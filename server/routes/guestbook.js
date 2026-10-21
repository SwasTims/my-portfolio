const express = require('express');
const router = express.Router();
const Guestbook = require('../models/Guestbook');

// GET all guestbook entries
router.get('/', async (req, res) => {
  try {
    const entries = await Guestbook.find().sort({ timestamp: -1 }).limit(20);
    res.json(entries);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch logs' });
  }
});

// POST a new guestbook entry
router.post('/', async (req, res) => {
  try {
    const { name, message } = req.body;
    if (!name || !message) {
      return res.status(400).json({ error: 'Name and message are required' });
    }

    const newEntry = new Guestbook({ name, message });
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (err) {
    res.status(500).json({ error: 'Failed to record entry' });
  }
});

module.exports = router;