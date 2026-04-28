import mongoose from "mongoose";

const userschema=new mongoose.Schema({
    name:String,
    age:Number,
    city:String
})

const user= new mongoose.model("students",userschema)

export default user;