
const Todo = require("../models/Todo");

exports.updateTodo= async (req,res)=>{
    try{
         const id  = req.params.id;
         const{title,description} = req.body;
         const todo = await Todo.findByIdAndUpdate(
            {_id:id},
            {title,description,updatedAt:Date.now()}
        )
         res.status(400).json({
            success:true,
            data:todo,
            message:"SuccessFully Given Id is Updated"
        });

    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"Server Error"
        });
    }
}