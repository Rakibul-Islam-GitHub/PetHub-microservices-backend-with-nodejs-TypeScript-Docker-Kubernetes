import express, { json } from "express";
import mongoose from "mongoose";

import { NotFoundError } from "./errors/notFoundError";
import { errorHandler } from "./middleware/errorHandlingMiddleware";
import {currentUserRouter} from "./routes/current-user";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signupRouter } from "./routes/signup";
const app = express()
app.use(json())

app.use(currentUserRouter);
app.use(signupRouter);
app.use(signinRouter);
app.use(signoutRouter);

app.get('*', (req, res)=>{
    throw new NotFoundError()
})
app.use(errorHandler)

app.get('/', (req, res) => {
    res.send('Hello world')
})

const startApp= async ()=>{
    
    try{
        await mongoose.connect('mongodb://auth-mongo-srv:27017/auth');
        console.log("MongoDB is ready!")
    }

    catch(err){
        console.error(err);

    }

    app.listen(3000, ()=>{
        console.log("App is Running on port- 3000!")
    })

}

startApp();


