import connectMongo from "@/configs/db";
import Contract from "@/pages/api/models/contract";
import { useRouter } from 'next/router';


export default async function handler(req: any, res: any) {
    if (req.method === 'GET') {
        try {
            await connectMongo();
          
            const contract = await Contract.findById(req.query.id);
            res.json({ contract });
          } catch (error) {
            res.json({ error });
          }
    }
    else if (req.method === 'DELETE') {
        try {
            await connectMongo();
            const contract = await Contract.findByIdAndDelete(req.query.id);
            res.json({ message: `contract with id ${contract._id} deleted!` });
        } catch (error) {
            res.json({ error });
        }
    }
}  