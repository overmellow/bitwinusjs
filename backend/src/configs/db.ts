import { ConnectOptions } from 'mongodb';
import mongoose from 'mongoose';

const connectDB = async ()=> {
    console.log(process.env.MONGO_URI)
    await mongoose.connect(process.env.MONGO_URI!);
    console.log('MongoDb Connected');   
}


module.exports = connectDB;