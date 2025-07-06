import { Request, Response } from "express";
import {
  insertIntoModule,
  findAllModules,
  findModuleById,
  updateModuleById,
  deleteModuleById,
} from "../services/db/module.service";

// 1. Get all modules
export const getAllModules = async (req: Request, res: Response): Promise<void> => {
  try {
    const modules = await findAllModules();
    res.status(200).json(modules);
  } catch (error: any) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

// 2. Get modules by courseId (if needed separately)
export const getModulesByCourse = async (req: Request, res: Response): Promise<void> => {
  try {
    const courseId = parseInt(req.params.courseid);
    if (isNaN(courseId)) {
      res.status(400).json({ message: "Invalid course ID" });
      return;
    }

    const modules = await findAllModules(); // optional: filter in service
    const filtered = modules.filter((mod) => mod.courseId === courseId);
    res.status(200).json(filtered);
  } catch (error: any) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

// 3. Create module for a specific course
export const createModule = async (req: Request, res: Response): Promise<void> => {
  try {
    const courseId = Number(req.params.courseid);

    if (isNaN(courseId)) {
      res.status(400).json({ message: "Invalid course ID" });
      return;
    }

    const { title, order } = req.body;

    if (!title || typeof order !== "number") {
      res.status(400).json({ message: "Title and numeric order are required" });
      return;
    }

    const newModule = await insertIntoModule({
      title,
      order,
      course: {
        connect: { id: courseId },
      },
    });

    res.status(201).json(newModule);
  } catch (error: any) {
    console.error("Error creating module:", error);
    res.status(500).json({
      message: "Internal server error",
      error: error.message || "Unknown error",
    });
  }
};

// 4. Get a single module by ID
export const getModule = async (req: Request, res: Response): Promise<void> => {
  try {
    const moduleId = req.params.moduleid;
    const module = await findModuleById(moduleId);

    if (!module) {
      res.status(404).json({ message: "Module not found" });
      return;
    }

    res.status(200).json(module);
  } catch (error: any) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

// 5. Update module by ID
export const updateModule = async (req: Request, res: Response): Promise<void> => {
  try {
    const moduleId = req.params.moduleid;
    const moduleData = req.body;

    const updatedModule = await updateModuleById(moduleId, moduleData);
    res.status(200).json(updatedModule);
  } catch (error: any) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

// 6. Delete module by ID
export const deleteModule = async (req: Request, res: Response): Promise<void> => {
  try {
    const moduleId = req.params.moduleid;

    const deletedModule = await deleteModuleById(moduleId);
    res.status(200).json(deletedModule);
  } catch (error: any) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};
