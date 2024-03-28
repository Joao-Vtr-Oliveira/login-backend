import { Request, Response } from 'express';
import User from '../models/User';

export const ping = (req: Request, res: Response) => {
	res.send({ pong: true });
};

export const users = async (req: Request, res: Response) => {
	let users = await User.find({});
	res.send({users});
};