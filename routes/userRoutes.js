import express from 'express';
import axios from 'axios';
const URL = 'http://jsonplaceholder.typicode.com/users';
const router = express.Router();

router.get('/', async (req, res, next) => {
	try {
		const user = await axios.get(URL);
		// console.log('USER', user.data);
		res.status(200).send(user.data);
	} catch (error) {
		console.log(error);
		res.status(404).send(error);
	}
});

export default router;
