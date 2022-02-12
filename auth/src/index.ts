import express, { json } from "express";
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


app.get('/', (req, res) => {
    res.send('Hello world')
})


app.listen(3000, ()=>{
    console.log("App is Running on port- 3000!")
})
