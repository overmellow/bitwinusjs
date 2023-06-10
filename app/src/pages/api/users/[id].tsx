// import DB from './db';
import connectMongo from "@/configs/db";
import User from "@/pages/api/models/user";

export default async function handler(req: any, res: any) {
    // let db = DB.getInstance();
    await connectMongo();
    const users: any = await User.find();
    if (req.method === 'GET') {
        // Handle GET request
        // console.log(db.all())
        res.status(200).json({ users: users });
    } else if (req.method === 'POST') {
        // Handle POST request
        res.status(200).json({ message: 'POST request handled', user: {id: 101, email: 'mori@mail.com'} });
    } else if (req.method === 'PUT') {
        // Handle PUT request
        res.status(200).json({ message: 'PUT request handled' });
    } else if (req.method === 'DELETE') {
        // Handle DELETE request
        const user = await User.findByIdAndDelete(req.query.id);
        res.status(200).json({ message: `user with id ${user._id} deleted!` });
    } else {
        // Handle other request types
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}  