import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import dbConnect from "./src/config/db.config.js";
import authRouter from "./src/routes/auth.routes.js";
import userRouter from "./src/routes/user.routes.js"
import instructorRouter from "./src/routes/instructor.routes.js";
import courseRouter from "./src/routes/course.routes.js";
import adminRouter from "./src/routes/admin.routes.js";
import cookieParser from "cookie-parser";
import { authenticate } from "./src/middlewares/auth.middleware.js";
import whishlistRoutes from "./src/routes/whishlist.routes.js";
import assigment from "./src/routes/assignment.routes.js";
import videoRoutes from "./src/routes/media.routes.js";
import progress from "./src/routes/progress.routes.js";
import { corsOptions } from "./src/config/cors.config.js";
const app = express();
dotenv.config({ path: "../.env" });
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors(corsOptions));

dbConnect();

app.get("/", (req, res) => {
  res.send("Empower Your Learning with Gir Technologies");
});

app.get("/courses", authenticate, (req, res) => {
  res
    .status(200)
    .json({ message: "welcome to coures section", user: req.user });
});

app.use("/api", authRouter);
app.use("/api/user", userRouter);
app.use("/api/instructor", instructorRouter);
app.use("/api/admin", adminRouter);
app.use("/api/courses", courseRouter);
//Cart/whishlist
app.use("/api/whishlist", whishlistRoutes);
//Assignment
app.use("/api/assignment", assigment);
//video Router
app.use("/api/video", videoRoutes);
//Progress Routes
app.use("/api/progress", progress);

app.listen(PORT, () => {
  console.log(
    `\x1b[45m\x1b[37m%s\x1b[0m`,
    ` 🥳 Yuhu! Server is started at: http://localhost:${PORT}/ `
  );
});
