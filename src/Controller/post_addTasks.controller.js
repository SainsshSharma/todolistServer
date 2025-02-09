import { asyncHandler } from "../Utils/asyncHandler.js";
import { ApiResponse } from "../Utils/apiRespone.js";
import { ApiError } from "../Utils/apiError.js";
import {TasksModel} from "../Models/Tasks.model.js";

const AddTasks = asyncHandler(async (req, res) => {

    if(!req.body.title){
        res.json(new ApiError(400,{msg:"Invalid Data"}))
        return
    }
    console.log(req.body.data)

    const task = await TasksModel.create({title:req.body.title});
    
    res.json(new ApiResponse(200,{data:"Successfully added"}));
});

export { AddTasks };
