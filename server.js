const dotenv = require("dotenv").config();
const express =require("express");
const morgan = require("morgan");
const cors = require("cors");
// const colors = require("colors");
const bodyParse = require("body-parser");
const connectDb = require("./config/db");
const errorHandler = require("./middlewares/errorMiddleware");


// routes path 
const authRoutes = require("./routes/authRoutes");



// dotenv
// dotenv.config();

// mongoose coonection
connectDb()
// rest object it used server listen
const app =express();


// middle wears
app.use(cors());
app.use(express.json())
app.use(bodyParse.urlencoded({extended: false}))
app.use(morgan('dev'))
app.use(errorHandler)

const PORT = process.env.PORT || 8000

// api routes 
app.use("/api/v1/auth",authRoutes)
app.use("/api/v1/openai",require("./routes/openaiRoutes"))
// listen the port 
app.listen(8000,()=>{
    console.log(`Server Running is ${process.env.DEV_MODE} dev mode on ${PORT}`);
})
