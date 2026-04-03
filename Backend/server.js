import dotenv from "dotenv";
import app from "./src/app.js";
import ConnectDB from "./src/config/Database.js";

dotenv.config();

ConnectDB();


app.listen(3000,()=>{
    console.log("server running on port 3000")
})