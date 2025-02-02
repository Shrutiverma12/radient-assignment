import express from 'express';
import { signUp, singin } from '../controller/userController.js';

const router = express.Router();

router.post('/signup', signUp);

router.post('/signin', singin);

export default router;
