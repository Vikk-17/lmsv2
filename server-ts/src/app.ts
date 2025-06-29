import express, { Request, Response } from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { resolve } from "path";
import dbConnect from "./config/db.config";


const app = express();
dotenv.config({ 
    path: resolve(__dirname, "../.env") 
});

const config = {
    PORT: process.env.PORT || 4000,
    MONGO_URI: process.env.MONGO_URI || "localhost:27017/lmsv2" ,
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// conncet to the database
dbConnect(config.MONGO_URI);


app.get("/", (req: Request, res: Response) => {
    res.send("Empower Your Learning with Gir Technologies");
});


app.listen(config.PORT, () => {
    console.log(
        `\x1b[45m\x1b[37m%s\x1b[0m`,
            ` Server is started at: http://localhost:${config.PORT}/ `
    );
});

