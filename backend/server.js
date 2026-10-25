import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json()); //Allows users to parse incoming requests: req.body
app.use(cookieParser()); //Allows us to parse incoming cookies

app.use("/api/auth", authRoutes);
if (process.env.NODE_ENV === "production") {
    const frontendDistPath = path.resolve(__dirname, "../frontend/dist");
    app.use(express.static(frontendDistPath));
    app.get("/{*splat}", (req, res) => {
        res.sendFile(path.join(frontendDistPath, "index.html"));
    });
}

app.listen(PORT, () => {
  connectDB();
  console.log("Server started on port:", PORT);
});
