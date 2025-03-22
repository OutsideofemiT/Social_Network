const express = require('express');
const router = express.Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
} = require('../../controllers/thoughtController');

// Route to get all thoughts and create a new thought
router.route('/')
  .get(getThoughts)
  .post(createThought);

// Route to get, update, or delete a single thought by ID
router.route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;
