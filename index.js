const express = require('express');
const app = express();
require('dotenv').config();


// Models Location
const { dbConnection } = require('./configs/db');


// Routes Location
const { urlRouter } = require('./routes/urlShortenerRoute');



// Middlewares
app.use(express.json());


// Default Routes
app.get('/', (req,res)=> res.status(200).send(`<h1 style="text-align:center;color:blue;">Welcome to URL Shortener Backend</h1>`))


// Calling Routes
app.use("/",urlRouter)


// Server Listening Here
app.listen(process.env.PORT || 5000, async ()=>{
    try {
        console.log(`Server is listening on Port at ${process.env.PORT || 5000}`);  
        await dbConnection;
        console.log(`Connected to URL Shortener Database`)
    } catch (error) {
        console.log(error.message)
    }
})
