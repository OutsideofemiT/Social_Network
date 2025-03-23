import Thought from '../models/Thought.js';

	export const getThoughts = async (req, res) => {
		try {
		  const thoughts = await Thought.find();
		  res.status(200).json(thoughts);
		} catch (error) {
		  res.status(500).json({ error: error.message });
		}
	  };

	export const getSingleThought = async (req, res) => {
		try {
			const thought  = await Thought.findById(req.params.thoughtId);
			if (!thought) {	
			return res.status(404).json({ message: 'Thought not found'});	
		 }
			res.status(200).json(thought);
		}	catch (error) {
			res.status(500).json({error: error.message });
		 }
		};

    export const createThought = async (req, res) => {
		try {
			const newThought = await Thought.create(req.body);
			res.status(201).json(newThought);
		}   catch (error) {
			res.status(500).json({ error: error.message });
		 }
		};
	
	export const updateThought = async (req, res) => {
		try {
			const updatedThought = await Thought.findByIdAndUpdate(
				req.params.thoughtId,
				req.body,
				{ new: true } 
			);
			if (!updatedThought) {
				return res.status(404).json({ message: 'Thought not found' });
				}
				res.status(200).json(updatedThought);
			} catch (error) {
				res.status(500).json({ error: error.message });
				}
			};
		
	export const deleteThought = async (req, res) => {
		try {
			const deletedThought = await Thought.findByIdAndDelete(req.params.thoughtId);

			if (!deletedThought) {
				return res.status(404).json({ message: 'Thought not found' });
			}
			res.status(200).json({ message: 'Thought deleted successfully' });
			} catch (error) {
			res.status(500).json({ error: error.message });
			}
		  };









