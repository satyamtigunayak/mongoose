import express from "express";
import mongoose from "mongoose";

// const dbconnection=async()=>{
//     try{
//         await mongoose.connect("mongodb://localhost:27017/studb")
//         console.log('connect successfully');  
//     }
//     catch(error){
//     console.error('database connection error',error);
//     }
// }

// define schema for students

// const studentschema= new mongoose.Schema({
//     name:String,
//     age:Number,
//     city:String
// })

// create a model from studb connection

// const studentmodel= new mongoose.model("students",studentschema)

// const getstudent= async ()=>{
//   try{
//    const students= await studentmodel.find({})
//    console.log(students);
   
//   } catch(error){
//     console.error('error fetching students',error);    
//   }
// }

// mvc in mogoose 😍

import dbconnection from "./config/db.js";
import router from "./routes/userroutes.js";

const app=express();

// connect to database

dbconnection();

//middleware

app.use(express.json());

// user routes

app.use('/api',router)

app.listen(3000,()=>{
  console.log('server running on port 3000');
  
})
