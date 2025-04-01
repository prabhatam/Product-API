import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

export const connectDatabase = async ()=>{
    try {
        const mongodbConnection  = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`Mongodb connected at : ${mongodbConnection.connection.host}`)
    } catch (error) {
        console.log(`Error connecting MongoDB : ${error}`)
        process.exit(1)
    }
}
