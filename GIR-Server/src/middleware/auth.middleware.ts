import { Request, Response, NextFunction } from "express";
import { verifyAccessToken, JwtPayloadCustom } from "../services/auth/auth.service";

export interface AuthenticatedRequest extends Request {
  user?: JwtPayloadCustom;
}

export const authenticate = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const token = req.cookies?.token;
    if (!token) {
      res.status(401).json({ message: "Unauthorized: no token found" });
      return;
    }
    const user = await verifyAccessToken(token);
    req.user = user;
    next();
  } catch (error: any) {
    res.status(401).json({ message: "Unauthorized", error: error.message });
  }
};
