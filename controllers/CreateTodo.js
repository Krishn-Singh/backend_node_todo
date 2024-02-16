const Todo=require("../models/Todo");

const mongoose=require("mongoose");
const express=require("express");
exports.CreateTodo=async(req,res)=>{
    try{
        const{title,discription}=req.body;
    const response=await Todo.create({title,discription})
    res.status(200).json({
        success:true,
        data:response,
        message:"suceess create"
    })
}catch(err){
    res.status(500).json({
        success:false,
        data:"internal server error",
        message:err.message
    })
}
}