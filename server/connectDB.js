import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const uri = process.env.URI;

if (!uri) {
    throw new Error('The URI environment variable is not defined.');
}

// Function to connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log('DB Connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
};

export default connectDB;