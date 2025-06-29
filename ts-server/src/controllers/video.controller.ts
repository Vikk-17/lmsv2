import { Request, Response } from "express";
import {
  findVideoByModule,
  insertVideoIntoModule,
  findVideoById,
  updateVideoById,
  deleteVideoById,
} from "../services/db/video.service";

export const getVideosByModule = async (req: Request, res: Response): Promise<void> => {
  try {
    const moduleId = req.params.moduleid;
    const videos = await findVideoByModule(moduleId);
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ message: "internal error", error });
  }
};

export const createVideoToModule = async (req: Request, res: Response): Promise<void> => {
  try {
    const videoData = req.body;
    const moduleId = req.params.moduleid;
    const newVideo = await insertVideoIntoModule({ ...videoData, module: moduleId });
    res.status(201).json(newVideo);
  } catch (error) {
    res.status(500).json({ message: "internal error", error });
  }
};

export const getVideo = async (req: Request, res: Response): Promise<void> => {
  try {
    const videoId = req.params.videoid;
    const video = await findVideoById(videoId);
    res.status(200).json(video);
  } catch (error) {
    res.status(500).json({ message: "internal error", error });
  }
};

export const updateVideo = async (req: Request, res: Response): Promise<void> => {
  try {
    const videoId = req.params.videoid;
    const videoData = req.body;
    const updatedVideo = await updateVideoById(videoId, videoData);
    res.status(200).json(updatedVideo);
  } catch (error) {
    res.status(500).json({ message: "internal error", error });
  }
};

export const deleteVideo = async (req: Request, res: Response): Promise<void> => {
  try {
    const videoId = req.params.videoid;
    const deletedVideo = await deleteVideoById(videoId);
    res.status(200).json(deletedVideo);
  } catch (error) {
    res.status(500).json({ message: "internal error", error });
  }
};
