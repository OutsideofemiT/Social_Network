import User from '../models/User.js';

export const getUsers = async (req, res) => {
	try {
	  const users = await User.find();
	  res.status(200).json(users);
	} catch (error) {
	  res.status(500).json({ error: error.message });
	}
  };

  export const getSingleUser = async (req, res) => {
	try {
		const user = await User.findById(req.params.userId);
		if (!user) {	
		return res.status(404).json({ message: 'User not found'});	
	 }
		res.status(200).json(user);
	}	catch (error) {
		res.status(500).json({error: error.message });
	 }
	};

	export const createUser = async (req, res) => {
		try {
			const newUser = await User.create(req.body);
			res.status(201).json(newUser);
		}   catch (error) {
			res.status(500).json({ error: error.message });
		}
		};
	
	export const updateUser = async (req, res) => {
		try {
			const updatedUser = await User.findByIdAndUpdate(
				req.params.userId,
				req.body,
				{ new: true } // This returns the updated document
			);
			if (!updatedUser) {
				return res.status(404).json({ message: 'User not found' });
			}
			res.status(200).json(updatedUser);
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	};
	
	export const deleteUser = async (req, res) => {
		try {
			const deletedUser = await User.findByIdAndDelete(req.params.userId);
			if (!deletedUser) {
				return res.status(404).json({ message: 'User not found' });
			}
			res.status(200).json({ message: 'User deleted successfully' });
		} catch (error) {
		  res.status(500).json({ error: error.message });
		}
	  };
	
	export const addFriend = async (req, res) => {
		try {
			const user = await User.findByIdAndUpdate(
				req.params.userId,
				{ $push: { friends: req.params.friendId }},
				{ new: true }
			);
			if (!user) {
				return res.status(404).json({ message: 'User not found'});
			}
			res.status(200).json(user);
		} catch (errror) {
			res.status(500).json({ error: error.message });
		}
	};
	


	//addFriend
	//removeFriend