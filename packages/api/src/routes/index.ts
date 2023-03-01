import express, { Router } from 'express';
import itemRouter from './itemRouter';

const router: Router = express.Router();

router.use('/item', itemRouter);

export default router;
