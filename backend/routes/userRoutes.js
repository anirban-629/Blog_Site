import { Router } from "express";
import { loginUser, registerUser } from "../controllers/userController.js";

const router = Router();

router.post("/", registerUser);
router.post("/login", loginUser);

export default router;

/*
home-page
sign up/login
add blog
after signup----
profile page
user-blog section

*/
