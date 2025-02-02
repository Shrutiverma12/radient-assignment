import express from 'express';
import userRouter from './authRouter.js';
import jobRouter from './jobRouter.js';

const router = express.Router();

router.use('/users', userRouter);
router.use('/job-listing', jobRouter);

export default router;
