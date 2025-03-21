const express = require('express');
const router = express.Router();

const {
	getUser,
	getSingleUser,
	createUser,
	updateUser,
	deleteUser,
	addFriend,
	removeFriend,
} = require('../../controllers/userController')

router.route('/')
	get(getUser)
	post(createUser);

router.route('/:userId')
	get(getSingleUser)
	put(updateUser)
	delete(deleteUser);

	router.route('userId/friends/:friendId')
	post(addFriend)
	delete(removeFriend);

	
module.exports = router;
