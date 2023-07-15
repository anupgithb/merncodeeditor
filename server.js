import express, { Router } from'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

const app=express();
dotenv.config();

import router from './routes/route.js';
import Connection from './database/db.js';

app.use(cors({
  origin:['http://localhost:3000',`${process.env.CLIENT_URL}`], 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
  }));

app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended : true}))
app.use('/',router);

const PORT = process.env.PORT || 8000;

const URL=process.env.MONGODB_URI;

Connection(URL);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});

