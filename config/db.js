import mongoose from "mongoose";


const dbconnection=async()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/studb")
        console.log('connect successfully');
    }
    catch(error){
    console.error('database connection error',error);
    }
}

export default dbconnection