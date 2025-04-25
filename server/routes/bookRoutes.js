const express = require('express');
const router = express.Router();
const Book = require('../models/Book');
const { v4: uuidv4 } = require('uuid');

// CREATE
router.post('/', async (req, res) => {
  try {
    const book = new Book({ ...req.body, id: uuidv4() });
    await book.save();
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// READ ALL
router.get('/', async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// READ ONE
router.get('/:id', async (req, res) => {
  const book = await Book.findOne({ id: req.params.id });
  res.json(book);
});

// UPDATE
router.put('/:id', async (req, res) => {
  const book = await Book.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
  res.json(book);
});

// DELETE
router.delete('/:id', async (req, res) => {
  await Book.findOneAndDelete({ id: req.params.id });
  res.json({ message: 'Book deleted' });
});

module.exports = router;
