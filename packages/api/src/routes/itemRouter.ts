import express, { Router } from 'express';
import controller from '../controllers/itemController';

const router: Router = express.Router();

router.post('/create', controller.createItem);
router.get('/list', controller.getItemList);
router.get('/one/:id', controller.getItem);
router.put('/update/:id', controller.updateItem);
router.delete('/delete/:id', controller.deleteItem);

export default router;
