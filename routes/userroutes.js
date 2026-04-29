import express from  "express";
import { getuser,craeteuser,edituser,deleteuserdata } from "../controllers/usercontroller.js";

const router=express.Router();

router.get('/users',getuser)
router.post('/users',craeteuser)
router.patch('/users/:id',edituser)
router.delete('/users/:id',deleteuserdata)

export default router;