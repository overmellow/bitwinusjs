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
        try {
            await connectMongo();        
            const contract = await Contract.create(req.body);        
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