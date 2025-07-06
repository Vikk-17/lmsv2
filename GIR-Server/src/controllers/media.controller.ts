import { Request, Response } from "express";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import path from "path";
import fileUpload, { UploadedFile } from "express-fileupload";
import prisma from "../config/prisma";

// ✅ Use __dirname directly (no import.meta.url)
dotenv.config({ path: path.resolve(__dirname, "../.env") });

// Type definition for file-upload requests
type FileRequest = Request & {
  files?: fileUpload.FileArray | null;
};

// -------------------- Upload & Save to Prisma --------------------
export const uploadLectureMedia = async (req: FileRequest, res: Response): Promise<void> => {
  try {
    if (!req.files || !req.files.file) {
      res.status(400).json({ error: "No file uploaded" });
      return;
    }

    if (!req.body) {
      res.status(400).json({ error: "No body data sent" });
      return;
    }

    const { title, courseId, freePreview = false } = req.body;

  

    if (!title || !courseId) {
      res.status(400).json({ error: "Title and courseId are required" });
      return;
    }

    const file = req.files.file as UploadedFile;

    const base64Data = file.data.toString("base64");
    const dataURI = `data:${file.mimetype};base64,${base64Data}`;

    const result = await cloudinary.uploader.upload(dataURI, {
      resource_type: "video",
    });

    const newLecture = await prisma.lecture.create({
      data: {
        title,
        videoUrl: result.secure_url,
        public_id: result.public_id,
        courseId: parseInt(courseId),
        freePreview: freePreview === "true",
      },
    });

    res.status(201).json({
      message: "Lecture uploaded and saved successfully",
      lecture: newLecture,
    });
  } catch (error: any) {
    console.error("Upload Error:", error);
    res.status(500).json({ error: "Failed to upload and save media" });
  }
};

// -------------------- Delete Media --------------------
export const deleteLectureMedia = async (req: Request, res: Response): Promise<void> => {
  try {
    const { publicId } = req.params;

    if (!publicId) {
      res.status(400).json({ error: "publicId is required" });
      return;
    }

    const cloudResult = await cloudinary.uploader.destroy(publicId, {
      resource_type: "video",
    });

    await prisma.lecture.deleteMany({
      where: { public_id: publicId },
    });

    res.status(200).json({
      message: "Lecture media deleted successfully",
      result: cloudResult,
    });
  } catch (error: any) {
    console.error("Delete Error:", error);
    res.status(500).json({ error: "Failed to delete media" });
  }
};

// -------------------- Get Media by publicId --------------------
export const getLectureByPublicId = async (req: Request, res: Response): Promise<void> => {
  try {
    const { publicId } = req.params;

    if (!publicId) {
      res.status(400).json({ error: "publicId is required" });
      return;
    }

    const result = await cloudinary.api.resource(publicId, {
      resource_type: "video",
    });

    res.status(200).json({
      message: "Video details fetched successfully",
      videoDetails: result,
    });
  } catch (error: any) {
    console.error("Fetch Error:", error);
    res.status(500).json({ error: "Can't fetch video details" });
  }
};

// -------------------- Get Only Video URL --------------------
export const getLectureVideoUrl = async (req: Request, res: Response): Promise<void> => {
  try {
    const { publicId } = req.params;

    if (!publicId) {
      res.status(400).json({ error: "publicId is required" });
      return;
    }

    const result = await cloudinary.api.resource(publicId, {
      resource_type: "video",
    });

    res.status(200).json({
      message: "Video URL fetched successfully",
      videoUrl: {
        url: result.url,
        secure_url: result.secure_url,
      },
    });
  } catch (error: any) {
    console.error("Fetch URL Error:", error);
    res.status(500).json({ error: "Can't fetch video URL" });
  }
};
