import { Router } from 'express';
const router = Router();
import { getThoughts, getSingleThought, createThought, updateThought, deleteThought } from '../thoughtController';

// Route to get all thoughts and create a new thought
router.route('/')
  .get(getThoughts)
  .post(createThought);

// Route to get, update, or delete a single thought by ID
router.route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

export default router;
