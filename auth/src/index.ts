import express, { json } from "express";

const app = express()
app.use(json())

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(3000, ()=>{
    console.log("App is Running on port 3000")
})
