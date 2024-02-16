const Todo=require("../models/Todo");

exports.UpdateTodo=async(req,res)=>{

    try{
        const {id}=req.params;
        const{title,discription}=req.body;
        console.log(title,discription,id)
        const updateTodo=await Todo.findByIdAndUpdate({_id:id},{title,discription,updateAt:Date.now()})
        if(updateTodo){
            res.status(200).json({
                success:true,
                title,discription,
                message:"update successfully"

            })
            
        }
        else{
            res.status(404).json({
                success:false,
                message:"data no found"
            });
        }
    }
    catch(err){
        res.status(500).json({
            success:false,
            err:err.message,
            message:"server error"
        })
    }
}