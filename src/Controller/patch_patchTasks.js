import { asyncHandler } from "../Utils/asyncHandler.js";
import { ApiResponse } from "../Utils/apiRespone.js";
import { ApiError } from "../Utils/apiError.js";
import { TasksModel } from "../Models/Tasks.model.js";

const UpdateCompletion = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    res.json(new ApiError(400, { msg: "Invalid Data" }));
    return;
  }

  const task = await TasksModel.findById(req.params.id);

  task.completed = !task.completed;

  await task.save();
  res.json(new ApiResponse(200, { data: "Success" }));
});

export { UpdateCompletion };
