const express=require("express");
const router=express.Router();
const  {CreateTodo}=require("../controllers/CreateTodo")
const {getTodo,gettodobyid}=require("../controllers/getTodo");
const {deleteTodo}=require("../controllers/DeleteTodo");
const {UpdateTodo}=require("../controllers/UpdateTodo");
router.post("/createTodo",CreateTodo);
router.get("/gettodo",getTodo);
router.get("/gettodo/:id",gettodobyid)
router.delete("/deletetodo/:id",deleteTodo)
router.put("/updatetodo/:id",UpdateTodo)

module.exports=router;