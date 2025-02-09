import {Router} from 'express'
import { AddTasks } from '../Controller/post_addTasks.controller.js';
import { GetTasks } from '../Controller/get_allTasks.controller.js';
import { UpdateTasks } from '../Controller/put_updateTasks.js';
import { DeleteTask } from '../Controller/delete_deleteTask.js';
import {UpdateCompletion} from '../Controller/patch_patchTasks.js'
const router=Router()


router.post("/", AddTasks);

router.get("/", GetTasks);

router.put("/:id", UpdateTasks);

router.delete("/:id", DeleteTask);

router.patch("/:id/complete", UpdateCompletion);

export default router