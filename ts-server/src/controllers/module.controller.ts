import { Request, Response } from "express";
import {
  insertIntoModule,
  findAllModule,
  findModuleById,
  updateModuleById,
  deleteModuleById,
} from "../services/db/module.service";

export const getModulesByCourse = async (req: Request, res: Response): Promise<void> => {
  try {
    const modules = await findAllModule();
    res.status(200).json(modules);
  } catch (error) {
    res.status(500).json({ message: "internal error", error });
  }
};

export const createModule = async (req: Request, res: Response): Promise<void> => {
  try {
    const dataModule = req.body;
    const courseId = req.params.courseid;  
    const newModule = await insertIntoModule({ ...dataModule, course: courseId });
    res.status(201).json(newModule);
  } catch (error) {
    res.status(500).json({ message: "internal error", error });
  }
};

export const getModule = async (req: Request, res: Response): Promise<void> => {
  try {
    const moduleId = req.params.moduleid;
    const module = await findModuleById(moduleId);
    if (!module) {
      res.status(404).json({ message: "Module not found" });
      return;
    }
    res.status(200).json(module);
  } catch (error) {
    res.status(500).json({ message: "internal error", error });
  }
};

export const updateModule = async (req: Request, res: Response): Promise<void> => {
  try {
    const moduleId = req.params.moduleid;
    const moduleData = req.body;
    const updatedModule = await updateModuleById(moduleId, moduleData);
    res.status(200).json(updatedModule);
  } catch (error) {
    res.status(500).json({ message: "internal error", error });
  }
};

export const deleteModule = async (req: Request, res: Response): Promise<void> => {
  try {
    const moduleId = req.params.moduleid;
    const deletedModule = await deleteModuleById(moduleId);
    res.status(200).json(deletedModule);
  } catch (error) {
    res.status(500).json({ message: "internal error", error });
  }
};
