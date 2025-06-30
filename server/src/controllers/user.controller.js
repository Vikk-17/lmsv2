import { verifyAccessToken } from "../services/auth/auth.service.js";

export const getUser = async (req,res)=>{
    try{
        const token = req.cookies.token;
        if(!token) throw new Error('token not found!!');
        const user = await verifyAccessToken(token);
        res.status(200).json(user);
    } catch(error){ 
        res.status(500).json({error:error.message});
    }
    
}