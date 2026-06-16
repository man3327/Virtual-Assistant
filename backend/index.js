import express from 'express';
import dotenv from 'dotenv';
import userRouter from './routes/user.routes.js';
dotenv.config();
import authRouter from './routes/auth.routes.js';
import cookiesParser from 'cookie-parser';
import connectDb from './config/db.js';
dotenv.config();
import cors from 'cors';
const app = express();
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}));
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cookiesParser());

app.use("/api/auth",authRouter);
app.use("/api/user",userRouter);
app.listen(port, () => {
    connectDb();
    console.log(`Server is running on port ${port}`);
});