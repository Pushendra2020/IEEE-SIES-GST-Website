import mongoose from "mongoose";
import { DB_Name } from "../const.js";

const connectDB = async() =>{
    try {
        const databaseConnect=await mongoose.connect(
            `${process.env.MONGODB_URL}/${DB_Name}`
        )
        console.log(`The DataBase Host Name : ${databaseConnect.connection.host}`)
    } catch (error) {
         console.log("Failed to connect to Data Base")
         process.exit(1);
    }
}

export default connectDB