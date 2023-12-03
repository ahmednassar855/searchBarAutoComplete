import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';

import Car from './database/carModel.js';


const app = express();

const port = process.env.PORT || 3000

app.use(express.json());


//  GET ALL CARS
app.get('/api/v1/cars', async (req, res) => {
    const cars =  await Car.find({});
    res.status(200).json({ cars })
})

app.post('/api/v1/cars/search', async (req, res) => {
    const {searchCar} = req.body;
    if ( searchCar !== null  ){
        const regexPattern = new RegExp(`^${searchCar}`, "i");
        const cars =  await Car.find({ name: regexPattern })
        res.status(200).json({cars})
    }else{
        res.status(200).json({cars : []})
    }
    
})

app.get('/', (req, res) => res.send('Hello World!'));


try {
    await mongoose.connect(process.env.MONGO_URL)
} catch (error) {
    
}


app.listen(port, () => console.log(`Example app listening on port ${port}!`));