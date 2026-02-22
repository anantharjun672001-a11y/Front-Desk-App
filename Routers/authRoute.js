import express from "express";
import { getUser, loginUser, registerUser } from "../Controllers/authController.js";
import { adminMiddleware, authMiddleware } from "../Middleware/Middleware.js";


const router = express.Router();

router.post('/register',registerUser)
router.post('/login',loginUser)
router.get('/getdata',authMiddleware,adminMiddleware,getUser)

export default router;