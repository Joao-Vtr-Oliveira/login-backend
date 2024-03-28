import { Request, Response } from 'express';
import User from '../models/User';

export const ping = (req: Request, res: Response) => {
	res.send({ pong: true });
};

export const users = async (req: Request, res: Response) => {
	let users = await User.find({});
	res.send({ users });
};

export const login = async (req: Request, res: Response) => {
	try {
		let user = await User.findOne({
			email: req.body.email as string,
			password: req.body.password as string,
		});
		if (user) return res.status(200).send({ status: 'ok' });
		res.status(404).send({ status: 'User not found.' });
	} catch (error) {
		res.status(400).send(error);
	}
};

export const register = async (req: Request, res: Response) => {
	// Todo: Add a regEx to verify the data.
	try {
		if (!req.body.email && !req.body.password) return res.status(400).send({ status: 'Please, provide email and password.' });
		const existingUser = await User.findOne({ email: req.body.email });
		if (existingUser) return res.status(409).send({ status: 'error', information: 'User already exists.' });
		const newUser = new User({
			email: req.body.email,
			password: req.body.password,
		});
		await newUser.save();
		console.log('New user registered: ', newUser);
		res.status(201).send({ status: 'ok', newUser });
	} catch (error) {
		res.status(400).send(error);
	}
};
