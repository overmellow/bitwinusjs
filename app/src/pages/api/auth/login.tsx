// import DB from "../db";

import connectMongo from "@/configs/db";
import User from "@/pages/api/models/user";

export default async function handler(req: any, res: any) {
    // let db = DB.getInstance();
    if (req.method === 'POST') {
        console.log(req.body)
        await connectMongo();
        const user: any = await User.findOne({email: req.body.email, password: req.body.password});
        console.log(user)
        // const u = db.all().find(u => u.email == req.body.email && u.password == req.body.password)        
        if(user) {
            res.status(200).json({ message: 'POST request handled', user: {id: user._id, email: user.email} });
        }
        res.status(404).json({message: 'wrong email or password'});
        
    } else {
        // Handle other request types
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}  