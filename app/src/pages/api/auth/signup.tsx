// import { db } from "./db";
// import DB from '../db'
import connectMongo from "@/configs/db";
import User from "@/pages/api/models/user";

export default async function handler(req: any, res: any) {
    if (req.method === 'POST') {
        console.log(req.body)
        // let db = DB.getInstance();
        await connectMongo();
        const user: any = await User.create({email: req.body.email, password: req.body.password});
        // db.add(req.body.name, req.body.email, req.body.password)
        // db.push({id: db.length + 1, name: req.body.name, email: req.body.email, password: req.body.password})
        // console.log(db)

        // const u = db.find(u => u.email == req.body.email && u.password == req.body.password)        
        // if(u) {
            res.status(200).json({ message: 'POST request handled  and user added!'});
        // }
        // res.status(404).json({message: 'wrong email or password'});
        
    } else {
        // Handle other request types
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}  