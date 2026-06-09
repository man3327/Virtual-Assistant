import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import authRouter from './routes/auth.routes.js';
import cookiesParser from 'cookie-parser';
import connectDb from './config/db.js';
dotenv.config();
import cors from 'cors';
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cookiesParser());
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}));
app.use("/api/auth",authRouter);

app.listen(port, () => {
    connectDb();
    console.log(`Server is running on port ${port}`);
});