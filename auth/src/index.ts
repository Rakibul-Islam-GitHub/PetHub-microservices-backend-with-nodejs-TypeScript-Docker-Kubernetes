import express, { json } from "express";
import {currentUserRouter} from "./routes/current-user";
const app = express()
app.use(json())

app.use(currentUserRouter);


app.get('/', (req, res) => {
    res.send('Hello world')
})


app.listen(3000, ()=>{
    console.log("App is Running on port- 3000!")
})
