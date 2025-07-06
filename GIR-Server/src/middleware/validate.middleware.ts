import { Request, Response, NextFunction } from "express";
import { ZodSchema, ZodError } from "zod";

export const validateUser = (schema: ZodSchema<any>) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({
          message: "Validation error",
          errors: error.errors.map((e) => e.message),
        });
        return;
      }
      res.status(500).json({ message: "Internal server error" });
    }
  };
};
