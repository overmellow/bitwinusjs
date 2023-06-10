// import DB from './db';
import connectMongo from "@/configs/db";
import User from "@/pages/api/models/user";

export default async function handler(req: any, res: any) {
    console.log('hey23')
    // let db = DB.getInstance();
    await connectMongo();
    const users: any = await User.find();
    if (req.method === 'GET') {
        // Handle GET request
        // console.log(db.all())
        res.status(200).json({ users: users });
    } 
    else {
        // Handle other request types
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}  