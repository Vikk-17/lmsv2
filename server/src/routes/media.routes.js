// media.routes.js
import express from "express";

import {
  uploadMedia,
  uploadImage,
  deleteMedia,
  getMediaByPublicId,
  getVideoUrlByPublicId,
} from "../controllers/media.controller.js";

const router = express.Router();

// Route to upload media
router.post("/upload", uploadMedia);
router.post("/upload/image", uploadImage);

// Route to delete media
router.delete("/delete/:publicId", deleteMedia);

//router get video details
router.get("/mediadetails/:publicId", getMediaByPublicId);
//router get particular details
router.get("/getvideolink/:publicId", getVideoUrlByPublicId);

export default router;
