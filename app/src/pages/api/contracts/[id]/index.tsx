import connectMongo from "@/configs/db";
import Contract from "@/pages/api/models/contract";
import User from "@/pages/api/models/user";

export default async function handler(req: any, res: any) {
    if (req.method === 'GET') {
        try {
            await connectMongo();
          
            const contract = await Contract.findById(req.query.id).populate('parties');
            res.json({ contract });
          } catch (error) {
            res.json({ error });
          }
    }
    else if (req.method === 'PUT') {
        console.log(req.body)
        try {
            await connectMongo();
            // console.log(req.query.id)            
            // const contract = await Contract.findByIdAndUpdate(req.query.id, req.body.contract);
            // const contract = await Contract.findByIdAndUpdate(req.query.id, {clauses: ['you should sign!']});

            console.log('we')

            // console.log(contract)
            res.json({ message: `contract with id  update!` });
            // res.json({ message: `contract with id ${contract._id} update!` });
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