let db = [
    {id: 1, name: 'jack'},
    {id: 2, name: 'joe'},
    {id: 3, name: 'jackson'},
]

export default function handler(req: any, res: any) {
    if (req.method === 'GET') {
        // Handle GET request
        res.status(200).json({ users: db });
    } else if (req.method === 'POST') {
        // Handle POST request
        res.status(200).json({ message: 'POST request handled', user: {id: 101, email: 'mori@mail.com'} });
    } else if (req.method === 'PUT') {
        // Handle PUT request
        res.status(200).json({ message: 'PUT request handled' });
    } else if (req.method === 'DELETE') {
        // Handle DELETE request
        res.status(200).json({ message: 'DELETE request handled' });
    } else {
        // Handle other request types
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}  