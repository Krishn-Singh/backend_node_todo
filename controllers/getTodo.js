 
const Todo=require("../models/Todo");

exports.getTodo=async(req,res)=>{
try
{
    const response=await Todo.find({})
    res.status(200).json({
        success:true,
        data:response,
        message:"Data fetch success"
    })

}
catch(err) {
    res.status(500).json({
        success:false,
        error:err.message,
        message:"server error"

    })
    
}
}
exports.gettodobyid=async(req,res)=>{

    try{
        const id=req.params.id;
        const todo=await Todo.findById({_id:id})
        if(!todo){
            res.status(404).json({
                success:false,
                message:"data not found"
            })
        }
        else{
            res.status(200).json({
                success:true,
                data:todo,
                message:"Data fetch success"
            })
        }
    }
    catch(err){
        res.status(500).json({
            success:false,
            error:err.message,
            message:"server err"
        })
    }
}