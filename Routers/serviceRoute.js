import express  from "express";
import { createService, deleteService, getService, updateService } from "../Controllers/serviceController.js";
import { adminMiddleware, authMiddleware } from "../Middleware/Middleware.js";

const router = express.Router();

router.post('/create',authMiddleware,adminMiddleware,createService);
router.get('/getService',getService);
router.put('/update/:id',authMiddleware,adminMiddleware,updateService);
router.delete('/delete/:id',authMiddleware,adminMiddleware,deleteService);




export default router;