import express from "express"
import { PORT } from "./config/env.js"

const app=express()

app.get("/",(req,res)=>{
    res.send("Welcome to my backend project") 
})

app.listen(PORT, () => {
    console.log(`Server is running on port 5500 http://localhost:${PORT}`);
})