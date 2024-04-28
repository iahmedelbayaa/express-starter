import express from "express";
import { UserController } from "../controllers/user.controller";

const router = express.Router();

const userController = new UserController();

router.get('/', userController.getUsers);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

export default router;