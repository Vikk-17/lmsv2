import { findAllCategory } from "../services/db/category.db.js";

export const getAllCategory = async (req,res) =>{
    try{
        const category = await findAllCategory();
        res.status(200).json(category);
    } catch (error){
        res.status(500).json({message:"internal error",error});
    }
}