import connectMongo from "@/configs/db";
import Contract from "@/pages/api/models/contract";

export default async function handler(req: any, res: any) {
    if (req.method === 'GET') {
      try {
          await connectMongo();
        
          const contracts = await Contract.find();
          res.json({ contracts });
        } catch (error) {
          res.json({ error });
        }
    }
    else if (req.method === 'POST') {
        console.log(req.body)
        try {
            await connectMongo();        
            const contract = await Contract.create({status: req.body.status});
            console.log(contract)        
            res.json({ contract });
        } catch (error) {
            res.json({ error });
        }
    }
    else {
        // Handle other request types
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}