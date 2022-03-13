import express from "express";
import bodyParser from "body-parser";
import tasks from "./routes/tasks.js";
import mongoose from "mongoose";
import cors from 'cors';

const port = 3000;
const databaseUrl = 'mongodb://mongodb:27017/tasks';


const server = express();

server.use(bodyParser.json());
server.use(cors());

server.use('/tasks', tasks);


mongoose.connect(
    databaseUrl,
    {useNewUrlParser: true, useUnifiedTopology: true},
    (err) => {
        if (err) {
            console.log(`Fail to connect to the database, error is ${err}`);
            return;
        }
        console.log(`Database is up and running on ${databaseUrl}`)
    } 
)

server.listen(port, () => {
    console.log(`server is up and running on port ${port}`);
})