import dotenv from "dotenv";
import { app } from "./src/app.js";
import connectDB from "./src/db/index.js";

dotenv.config()

const PORT=process.env.PORT || 7001;

connectDB()
.then(()=>{
    app.listen(PORT,()=>{
        console.log("Server is Running on PORT : ",PORT)
    })
})
.catch(err=>console.log("MongoDB Connection Error ",err))

