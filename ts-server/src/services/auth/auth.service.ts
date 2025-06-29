import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import jwt, { JwtPayload } from "jsonwebtoken";

dotenv.config({ path: "../.env" });

// Define the shape of payload you expect in JWT
export interface JwtPayloadCustom extends JwtPayload {
  userId: string;
  email: string;
  role: string;
  name?: string;
}

// Compare plain password with hashed password
export const comparePassword = async (
  password: string,
  hashPassword: string
): Promise<boolean> => {
  return bcrypt.compare(password, hashPassword);
};

// Sign JWT access token
export const signAccessToken = async (
  payload: JwtPayloadCustom
): Promise<string> => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1m", // adjust expiry as needed
  });
};

// Verify JWT access token
export const verifyAccessToken = async (
  token: string
): Promise<JwtPayloadCustom> => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
      if (err) return reject(err);
      resolve(decoded as JwtPayloadCustom);
    });
  });
};
