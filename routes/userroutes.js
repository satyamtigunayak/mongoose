import express from  "express";
import { getuser } from "../controllers/usercontroller.js";

const router=express.Router();

router.get('/users',getuser)

export default router;