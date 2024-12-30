import express from "express";
import {port, mongo_url} from "./config.js";
import mongoose from "mongoose";
import router from "./routes/bookroutes.js";
import cors from "cors";

const app = express();

mongoose.connect(mongo_url).then(()=> {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log(err.message);
});

// To parse the data from a request
app.use(express.json());

/**
 * 
 * Don't go with router code I have added the get request at the end of this file for debug
 */

// To use middle ware for routing in this way we can define multiple routes


// Middleware to allow which websites and what requests, default is cors(*)
app.use(cors({
    origin: '*', // Allow requests from all origins
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allow all HTTP methods
    allowedHeaders: '*', // Allow all headers
}));

/**
 * 
 * Don't go with router code I have added the get request at the end of this file for debug
 */

app.listen(port, () => {
    console.log(`server is running at port: ${port}`);
});
// app.use(cors());
app.use("/books", router);



