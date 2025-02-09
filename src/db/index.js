import mongoose from "mongoose";

const connectDB=async()=>{
    try{
       const instance= await mongoose.connect(`${process.env.MONGODB_URL}/${process.env.MONGODB_DBNAME}`)
       console.log("\nMongoDb Connected ! DB Host: ",instance.connection.host)
    }catch(err){
        console.log("MONGODB connection Error ",err)
        process.exit(1)
    }
}

export default connectDB