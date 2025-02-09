import express from "express"
import cors from "cors"


const app=express()

app.use(cors({ methods: "GET,HEAD,PUT,PATCH,POST,DELETE", credentials: true,/*origin:process.env.CORS_ORIGIN*/ }));
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))

import TaskRouter from "./Routes/crudTasks.router.js"
app.use("/tasks",TaskRouter)
app.get("/",(req,res)=>{
    res.status(200).json({msg:"asdfajsdkflasd"})
})
export {app}