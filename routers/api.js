const apiRouter = require('express').Router()

const url = 'mongodb://localhost:27017';
const dbName = 'bookmyshow';

apiRouter.post("/auth",async (req,res)=>{

    //login end point
    client = new MongoClient(url);
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('user');

    const user = await collection.findOne({ email:req.body.email, password:req.body.password });
    if (user) {
        res.status(200).send('Login successful');
    } else {
        res.status(401).send('Invalid email or password');
    }


})

module.exports = apiRouter