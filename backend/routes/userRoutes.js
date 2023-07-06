import { Router } from "express";
import { registerUser } from "../controllers/userController.js";

const router = Router();
router.post("/", registerUser);
export default router;
