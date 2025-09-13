import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import { authRouter } from "./routes/authRoutes.js";

const app = express();
connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true }));
app.use(express.urlencoded({ extended: true }));

const port = 3000;

app.use('/api/v1/auth', authRouter)

app.get("/", (request, response) => {
  response.send({ message: "Hello from an Express API!" });
});

app.listen(port, () => console.log("server is running"));
