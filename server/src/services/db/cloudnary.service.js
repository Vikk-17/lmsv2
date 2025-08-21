import cloudinary from "cloudinary";
import dotenv from "dotenv"


export const uploadMediaFiles = async (req)=>{
    const files = req.files.videos;
    console.log(files);
    if (!files || files.lenght === 0) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const filesArray = Array.isArray(files) ? files : [files];

    const uploadPromises = filesArray.map((file)=>{
      const base64String = `data:${file.mimetype};base64,${file.data.toString(
      "base64"
      )}`;

      return cloudinary.uploader.upload(base64String, {
        resource_type: "auto",
        folder: "uploads", 
      });
    });
    const results = await Promise.all(uploadPromises);
    return results;
}



export const deleteMedia = async (publicId) => {
  try {
    const result = await cloudinary.v2.uploader.destroy(publicId, {
      resource_type: "video",
    });
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete from cloudinary");
  }
};




