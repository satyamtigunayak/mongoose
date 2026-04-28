import express from  "express";
import { getuser,craeteuser } from "../controllers/usercontroller.js";

const router=express.Router();

router.get('/users',getuser)
router.post('/users',craeteuser)

export default router;