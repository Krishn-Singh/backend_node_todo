const mongoose=require("mongoose");
require("dotenv").config();
const  dbconnect=()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>console.log("success db"))
    .catch((e)=>{
console.log("error in the database");
console.log(e.message);
process.exit(1);
    })
}
module.exports=dbconnect;