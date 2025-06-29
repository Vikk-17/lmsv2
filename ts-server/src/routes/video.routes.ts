import express from "express";
import {
  getVideosByModule,
  createVideoToModule,
  getVideo,
  updateVideo,
  deleteVideo,
} from "../controllers/video.controller";

const router = express.Router({ mergeParams: true });

// Routes for /videos
router.get("/", getVideosByModule);
router.post("/", createVideoToModule);

// Routes for /videos/:videoid
router.route("/:videoid").get(getVideo).put(updateVideo).delete(deleteVideo);

export default router;
