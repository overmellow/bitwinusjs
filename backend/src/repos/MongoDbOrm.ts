import { ConnectOptions } from 'mongodb';
import mongoose from 'mongoose';

const connectDB = async ()=> {
    let db = await mongoose.connect(process.env.MONGO_URI!);
    console.log('MongoDb Connected');   
    return db;
}

const connect = () => {
    return connectDB();
}

export default connect;