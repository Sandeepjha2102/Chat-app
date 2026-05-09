import mongoose from "mongoose";

// Function to connect to the mongodb database
export const connectDB = async () =>{
    try {
        mongoose.connection.on('connected', ()=> console.log('Database Connected'));
        const mongoUri = process.env.MONGODB_URI?.replace(/\/+$/, "");
        await mongoose.connect(`${mongoUri}/chat-app`);
    } catch (error) {
        console.log(error);
    }
}
