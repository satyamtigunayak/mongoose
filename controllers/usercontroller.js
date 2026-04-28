import user from "../model/usermodel.js";

export const getuser= async(req,res)=>{
    try{
      const users= await user.find()
      res.json(users)
    } catch(error){
      res.status(500).json({Message:'error fetching user',error})
    }
}