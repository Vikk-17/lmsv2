// media.routes.js
import express from "express";
import multer from "multer";
import {
  uploadMedia,
  deleteMedia,
  getMediaByPublicId,
  getVideoUrlByPublicId,
} from "../controllers/media.controller.js";

const router = express.Router();

// Route to upload media
router.post("/upload", uploadMedia);

// Route to delete media
router.delete("/delete/:publicId", deleteMedia);

//router get video details
router.get("/mediadetails/:publicId", getMediaByPublicId);
//router get particular details
router.get("/getvideolink/:publicId", getVideoUrlByPublicId);

export default router;
