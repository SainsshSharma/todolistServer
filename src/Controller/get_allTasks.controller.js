import { asyncHandler } from "../Utils/asyncHandler.js";
import { ApiResponse } from "../Utils/apiRespone.js";
import {TasksModel} from "../Models/Tasks.model.js";

const GetTasks = asyncHandler(async (req, res) => {

    const tasks = await TasksModel.find();
    res.json(new ApiResponse(200,{data:tasks}));
});

export { GetTasks };
