import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const connectToMongo = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            dbName: 'SentinalAI'
        });
        console.log('Connected to MongoDB successfully!');
    } catch (error) {
        console.error(error);
    }
};

export default connectToMongo;