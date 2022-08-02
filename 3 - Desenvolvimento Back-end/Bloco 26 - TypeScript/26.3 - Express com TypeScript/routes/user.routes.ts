import { Router } from "express";
import UserController from "../database/controllers/user.controller";

const router = Router();

const userController = new UserController();

router.get('/', userController.getAll);

export default router;