import { Router } from 'express';
import * as PageController from '../controllers/pageController';

const router = Router();

router.get('/ping', PageController.ping);


// TODO: Login
// TODO: Sign Up -> Register

router.get('/users', PageController.users);

router.get('/user/login', PageController.login);
router.post('/user/register', PageController.register);

export default router;
