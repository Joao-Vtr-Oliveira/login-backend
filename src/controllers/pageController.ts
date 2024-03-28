import { Request, Response } from 'express';
import User from '../models/User';

export const ping = (req: Request, res: Response) => {
	res.send({ pong: true });
};

export const users = async (req: Request, res: Response) => {
	let users = await User.find({});
	res.send({users});
};

export const findUser = async (req: Request, res: Response) => {
	try {
		let user = await User.findOne({
			email: req.body.email as string,
			password: req.body.password as string
		});
		if(user) return res.status(200).send({status: 'ok'});
		res.status(404).send({status: 'User not found.'});
	} catch (error) {
		res.status(400).send(error);
	}
};