import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import jwt, {JwtPayload} from "jsonwebtoken";
import { resolve } from "path";

dotenv.config({
    path: resolve(__dirname, "../../../.env")
});

interface JwtPayloadWithToken extends JwtPayload {
    token: string,
}

export interface ProcessEnv {
    [JWT_SECRET: string]: string | undefined
}

// interface AuthenticatedRequest extends Request {
//
// }

// export const comparePassword = async (password, hashPassword): Promise<any> =>{
//     return await bcrypt.compare(password, hashPassword);
// }   
//
// export const signAccessToken = async (payload): Promise<any> =>{
//     return jwt.sign(payload,process.env.JWT_SECRET,{
//         expiresIn: '1m',
//     });
// }
//

const JWT_SECRET: string = process.env.JWT_SECRET;
const verifyAccessToken = async (token: string): Promise<any> => {
    return jwt.verify(token, JWT_SECRET);
}

module.exports = {
    verifyAccessToken
}

