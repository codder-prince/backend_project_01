// require('dotenv').config({path: './env'})
//            or
import dotenv from "dotenv";
import connectDB from "./db/index.js";

// import mongoose from "mongoose";
// import {DB_NAME} from "./constants"

dotenv.config({
    path : './env'
})


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`);
        
    })
})
.catch((err) => {
    console.log("MONGO DB connection failed", err);
    
})




















// 1st Approach to connect DB :

// Using => IIFE = Immediately Invoked Function Expression in JS
//Matlab function jo define hote 
// hi turant execute ho jata hai.


/*
import express from "express";
const app = express()
;( async () =>{
    try {
        await mongoose.connect(`${process.env.
        MONGODB_URI}/${DB_NAME}`)
        app.on("errror", (error) => {
            console.log("ERRROR", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port $
                {process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR", error)
        throw err
    }
})()

*/