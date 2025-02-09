import { asyncHandler } from "../Utils/asyncHandler.js";
import { ApiResponse } from "../Utils/apiRespone.js";
import { ApiError } from "../Utils/apiError.js";
import {TasksModel} from "../Models/Tasks.model.js";


const UpdateTasks=asyncHandler(async(req,res)=>{

    if(!req.params.id || req.body.data){
        res.json(new ApiError(400,{msg:"Invalid Data"}))
        return
    }
    console.log("working")
    const task = await TasksModel.findByIdAndUpdate(req.params.id, {title:req.body.title,completed:req.body.completed || false}, { new: true });
    console.log("Proccessing")

    res.json(new ApiResponse(200,{data:task}));
})

export {UpdateTasks}