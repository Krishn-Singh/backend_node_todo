const Todo=require("../models/Todo");
exports.deleteTodo=async(req,res)=>{
try{
    const {id}=req.params;;
    const deleteTodo=await Todo.findByIdAndDelete({_id:id});
    if(deleteTodo){
        res.status(200).json({
            success:true,
            data:deleteTodo,
            message:"data delete"
        })
    }
    
}
catch(err){
    res.status(500).json({
        success:false,
        data:err.message,
        message:"interval server error"
    })
        
}
}