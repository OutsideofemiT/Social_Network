import { Router } from 'express';
const router = Router();

import { getUser, getSingleUser, createUser, updateUser, deleteUser, addFriend, removeFriend } from '../../controllers/userController';

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

	
export default router;
