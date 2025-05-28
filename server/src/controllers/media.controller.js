// media.controller.js
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// For __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env variables
dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// Upload media controller
export const uploadMedia = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "auto",
    });
    res.status(200).json({
      message: "Media uploaded successfully",
      url: result.secure_url,
      public_id: result.public_id,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Can't upload media" });
  }
};

// Delete media controller
export const deleteMedia = async (req, res) => {
  const { publicId } = req.params;
  try {
    const result = await cloudinary.uploader.destroy(publicId, {
      resource_type: "auto", // optional: make it dynamic if needed
    });
    res.status(200).json({
      message: "Media deleted successfully",
      result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete from Cloudinary" });
  }
};

// Get media (video) by publicId
// Get video URL by publicId
export const getMediaByPublicId = async (req, res) => {
  try {
    const { publicId } = req.params; // assuming publicId is sent as a URL param

    const result = await cloudinary.api.resource(publicId, {
      resource_type: "video", // specify video resource type
    });

    res.status(200).json({
      message: "Video details fetched successfully",
      videoDetails: result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Can't fetch video details" });
  }
};
export const getVideoUrlByPublicId = async (req, res) => {
  try {
    const { publicId } = req.params;

    const result = await cloudinary.api.resource(publicId, {
      resource_type: "video",
    });

    // Only pick url and secure_url from result
    const videoDetails = {
      url: result.url,
      secure_url: result.secure_url,
    };

    res.status(200).json({
      message: "Video details fetched successfully",
      videoDetails,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Can't fetch video URL" });
  }
};
