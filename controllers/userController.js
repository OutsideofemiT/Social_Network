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
		const user = await User.findbyId(req.params.userId);
		if (!user) {	
		return res.status(404).json({ message: 'User not found'});	
	 }
		res.status(200).json(users);
	}	catch (error) {
		res.status(500).jsob({error: error.message });
	 }
	};

	export const createUser = async (req, res) => {
		try {
			const newUser = await User.create(req.body);
			res.status(201).json(newUser);
		}   catch (error) {
			res.status(500).json({error.})
		}
		}
	}
  
	//updateUser
	//deleteUser
	//addFriend
	//removeFriend