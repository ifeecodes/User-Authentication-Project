import express from 'express';
import dotenv from "dotenv";
import {connectDB} from "./db/connectDB.js";
import authRoutes from "./routes/auth.route.js"
import cookieParser from 'cookie-parser';

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;
app.use(express.json()); //Allows users to parse incoming requests: req.body
app.use(cookieParser());//Allows us to parse incoming cookies

app.use("/api/auth", authRoutes);


app.listen(PORT, () => {
    connectDB();
    console.log("Server started on port:", PORT);
})