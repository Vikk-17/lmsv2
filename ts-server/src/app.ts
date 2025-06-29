import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import expressFileUpload from "express-fileupload";

// Local imports
import dbConnect from "./config/db.config";
import fileUpload from "express-fileupload";
import authRouter from "./routes/auth.routes";
import instructorRouter from "./routes/instructor.routes";
import courseRouter from "./routes/course.routes";
import adminRouter from "./routes/admin.routes";
import whishlistRoutes from "./routes/whishlist.routes";
import assigment from "./routes/assignment.routes";
import videoRoutes from "./routes/media.routes";
import progress from "./routes/progress.routes";
import { authenticate } from "./middlewares/auth.middleware";

// Load environment variables
dotenv.config({ path: "../.env" });

const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(expressFileUpload());
app.use(fileUpload());

// Connect to database
dbConnect();

// Routes
app.get("/", (_req: Request, res: Response) => {
  res.send("Empower Your Learning with Gir Technologies");
});

app.get("/courses", authenticate, (req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome to courses section",
    // @ts-ignore: assuming `req.user` is added by middleware
    user: req.user,
  });
});

// API Routes
app.use("/api", authRouter);
app.use("/api/instructor", instructorRouter);
app.use("/api/admin", adminRouter);
app.use("/api/courses", courseRouter);
app.use("/api/whishlist", whishlistRoutes);
app.use("/api/assignment", assigment);
app.use("/api/video", videoRoutes);
app.use("/api/progress", progress);

// Start server
app.listen(PORT, () => {
  console.log(
    `\x1b[45m\x1b[37m%s\x1b[0m`,
    ` 🥳 Yuhu! Server is started at: http://localhost:${PORT}/ `
  );
});
