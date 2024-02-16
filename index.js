const express=require("express");
const app=express();
require("dotenv").config();
const cors = require("cors");
const PORT=process.env.PORT ||8000;
app.use(cors());
app.use(express.json());
const todoroutes=require("./routes/todos");





app.listen(PORT,()=>{
    console.log("server start");
})
const dbConnect=require("./config/database");
dbConnect();
app.get("/",(req,res)=>{
    res.send("this is home page")

})

app.use("/api",todoroutes)
