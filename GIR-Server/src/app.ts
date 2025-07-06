import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { PrismaClient } from "@prisma/client";
import fileUpload from "express-fileupload";

//Routes
import authRoutes from "./routes/auth.routes"
import instructorRoute from "./routes/instructor.routes"
import adminRoute from "./routes/admin.routes"
import userRoute from "./routes/user.route"
import courseRoutes from "./routes/course.routes"
import lectureRoutes from "./routes/lecture.routes"
import moduleRoutes from "./routes/modules.routes"
import assignmentRoutes from "./routes/assignment.route"
import wishlistRoutes from "./routes/wishlist.routes"
import progressRoutes from "./routes/progress.route"
import mediaRoutes from "./routes/media.routes"

// Load environment variables
dotenv.config({ path: "../.env" });
const app = express();
const prisma=new PrismaClient();
const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Test route
app.get("/", (_req: Request, res: Response) => {
  res.send("Empower Your Learning with Gir Technologies");
});

//Routes
app.use("/api",authRoutes)
app.use("/api/user", userRoute);
app.use("/api/instructor",instructorRoute)
app.use("/api/admin",adminRoute)
app.use("/api/course",courseRoutes)
app.use("/api/lecture",lectureRoutes)
app.use("/api/module",moduleRoutes)
app.use("/api/assignment",assignmentRoutes)
app.use("/api/wishlist",wishlistRoutes)
app.use("/api/progress",progressRoutes)
app.use("/api/media",mediaRoutes)



// Start server
app.listen(PORT, async () => {
  try {
    await prisma.$connect();
    console.log("✅ Connected to PostgreSQL via Prisma");
    console.log(`🚀 Server is running at http://localhost:${PORT}`);
  } catch (error) {
    console.error("❌ Failed to connect to the database", error);
    process.exit(1);
  }
}); 