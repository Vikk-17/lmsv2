import express from "express";
import {
  uploadLectureMedia ,
  deleteLectureMedia,
 getLectureByPublicId,
   getLectureVideoUrl,
} from "../controllers/media.controller";
const router=express.Router()

// Route to upload media
router.post("/upload", uploadLectureMedia);

// Route to delete media
router.delete("/delete/:publicId", deleteLectureMedia);

//router get video details
router.get("/mediadetails/:publicId", getLectureByPublicId);

//router get particular details
router.get("/getvideolink/:publicId",  getLectureVideoUrl);
export default router