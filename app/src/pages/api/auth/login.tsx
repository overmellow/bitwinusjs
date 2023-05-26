let db = [
    {id: 1, name: 'jack', email: 'jack@mail.com', password: '1000'},
    {id: 2, name: 'joe', email: 'joe@mail.com', password: '1000'},
    {id: 3, name: 'jackson', email: 'jackson@mail.com', password: '1000'},
]

export default function handler(req: any, res: any) {
    if (req.method === 'POST') {
        console.log(req.body)
        const u = db.find(u => u.email == req.body.email && u.password == req.body.password)        
        if(u) {
            res.status(200).json({ message: 'POST request handled', user: {id: u.id, email: u.email} });
        }
        res.status(404).json({message: 'wrong email or password'});
        
    } else {
        // Handle other request types
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}  