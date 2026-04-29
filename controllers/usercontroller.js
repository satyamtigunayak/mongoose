import user from "../model/usermodel.js";

// get api

export const getuser= async(req,res)=>{
    try{
      const users= await user.find()
      res.json(users)
    } catch(error){
      res.status(500).json({Message:'error fetching user',error})
    }
}

// post api

export const craeteuser=async(req,res)=>{
  try{
   const newuser= new user(req.body)
   const result= await newuser.save()
   res.status(201).json({
    message:'user created successfully',
    data:result
   })
  }catch(error){
   res.status(404).json('user not created',error)
  }
}

// patch api  edit all user

export const edituser= async(req,res)=>{
    try{
       const{id}=req.params
       const updateuser= await user.findByIdAndUpdate(id,req.body,{
        returnDocument: 'after',
        overwrite:true
       })
       res.status(200).json({
        message:'update successfully',
        data:updateuser
       })

    } catch(error){
         res.status(500).json({message:"Error updating user",error})
    }
}

// Delete api 


export const deleteuserdata= async(req,res)=>{
  try{
      const{id}=req.params;
      const deleteuser= await user.findByIdAndDelete(id)
      if(!deleteuser){
        res.status(404).json({message:"user not deleted"})
      }
      res.status(200).json({
        message:' deleted successfully'
      })
  } catch(error){
    res.status(500).json({message:"user not deleted",error})
  }
}