import { Schema, model } from "mongoose";

const categorySchema = new Schema({
    name:{
        type:String,
        required:true,
        lowercase:true,
    },
    slug:{
        type:String,
        required:true,
        lowercase:true,
    }
});

const Category = model("Category", categorySchema);
export default Category;