import express from 'express';
import userRouter from './routes/router.user';

const rootRouter = express.Router();

rootRouter.use('/users', userRouter);

export default rootRouter;
