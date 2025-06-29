import { Request, Response } from "express";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import fileUpload, { UploadedFile } from "express-fileupload";

// For __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env file
dotenv.config({ path: path.resolve(__dirname, "../.env") });

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME!,
  api_key: process.env.API_KEY!,
  api_secret: process.env.API_SECRET!,
});

// -------------------- Upload Media --------------------
export const uploadMedia = async (
  req: Request & { files?: fileUpload.FileArray },
  res: Response
): Promise<void> => {
  try {
    const file = req.files?.file as UploadedFile;

    if (!file) {
      res.status(400).json({ error: "No file uploaded" });
      return;
    }

    const base64 = `data:${file.mimetype};base64,${file.data.toString("base64")}`;

    const result = await cloudinary.uploader.upload(base64, {
      resource_type: "auto",
    });

    res.status(200).json({
      message: "Media uploaded successfully",
      url: result.secure_url,
      public_id: result.public_id,
    });
  } catch (error: any) {
    console.error("Upload Error:", error);
    res.status(500).json({ error: "Failed to upload media" });
  }
};

// -------------------- Delete Media --------------------
export const deleteMedia = async (req: Request, res: Response): Promise<void> => {
  try {
    const { publicId } = req.params;

    if (!publicId) {
      res.status(400).json({ error: "publicId is required" });
      return;
    }

    const result = await cloudinary.uploader.destroy(publicId, {
      resource_type: "auto",
    });

    res.status(200).json({
      message: "Media deleted successfully",
      result,
    });
  } catch (error: any) {
    console.error("Delete Error:", error);
    res.status(500).json({ error: "Failed to delete media" });
  }
};

// -------------------- Get Media by publicId --------------------
export const getMediaByPublicId = async (req: Request, res: Response): Promise<void> => {
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
    console.error("Fetch Video Error:", error);
    res.status(500).json({ error: "Can't fetch video details" });
  }
};

// -------------------- Get Only Video URL --------------------
export const getVideoUrlByPublicId = async (req: Request, res: Response): Promise<void> => {
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
      videoDetails: {
        url: result.url,
        secure_url: result.secure_url,
      },
    });
  } catch (error: any) {
    console.error("Fetch URL Error:", error);
    res.status(500).json({ error: "Can't fetch video URL" });
  }
};
