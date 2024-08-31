const Todo = require('../models/Todo');

exports.deleteTodo = async (req,res)=>{
    try{
         const id  = req.params.id;
         await Todo.findByIdAndDelete(id);
         res.status(400).json({
            success:true,
            message:"SuccessFully Given Id is deleted"
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