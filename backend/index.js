import express from 'express';
import dotenv from 'dotenv';
import authRouter from './routes/auth.routes.js';
import cookiesParser from 'cookie-parser';
import connectDb from './config/db.js';
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cookiesParser());
app.use("/api/auth",authRouter);

app.listen(port, () => {
    connectDb();
    console.log(`Server is running on port ${port}`);
});