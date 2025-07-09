import Category from "../../models/category.model.js";

export const insertIntoCategory = async (category) =>{
  return await Category.create(category);
};

export const findAllCategory = async () =>{
    return await Category.find();
};