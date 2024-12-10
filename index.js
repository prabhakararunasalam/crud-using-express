import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRoute from './Routers/productRouter.js'


//dotenv config
dotenv.config();

//initialize

const app = express();

//cors middleware
app.use(cors({
    origin: "*",//allows all origins
    credentials:true,//allows cookies to be sent
    methods : ["GET","POST","PUT","DELETE"],//allowed Http methods
}));

//default middleware for req.body
app.use(express.json())


//default route for can not get

app.get("/",(req,res)=>{
    res.status(200).send("welcome to api")
});

//custom port

app.use("/api/product",productRoute)

//port declere
const Port = process.env.Port || 5000;

//start the server

app.listen(Port, ()=>{
console.log(`server is started and running in the port:${Port}`);

})