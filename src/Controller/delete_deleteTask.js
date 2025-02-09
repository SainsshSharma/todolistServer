import { asyncHandler } from "../Utils/asyncHandler.js";
import { ApiResponse } from "../Utils/apiRespone.js";
import { ApiError } from "../Utils/apiError.js";
import {TasksModel} from "../Models/Tasks.model.js";


const DeleteTask=asyncHandler(async (req,res)=>{
    
    if(!req.params.id){
        res.json(new ApiError(400,{msg:"Invalid Data"}))
        return
    }

    await TasksModel.findByIdAndDelete(req.params.id);
    res.json(new ApiResponse(204,{data:"Deleted Succesfully"}));
})  

export {DeleteTask}