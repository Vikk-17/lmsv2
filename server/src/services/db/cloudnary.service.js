import cloudinary from "cloudinary";
import dotenv from "dotenv"

dotenv.config({
  path: ("../../../../.env"),
});


cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const uploadMedia = async (filePath) => {
  try {
    const result = await cloudinary.v2.uploader.upload(filePath, {
      resource_type: "auto",
      eager: [{
          // 1080p transformation
          transformation: [
              {width: 1920, height: 1080, crop: "limit"},
              {quality: "auto", fetch_format: "auto"}
          ]
      }, {
          // 720p transformation
          transformation: [
              {width: 1280, height: 720, crop: "limit"},
              {quality: "auto", fetch_format: "auto"}
          ]
      }, {
          // 480p transformation
          transformation: [
              {width: 854, height: 480, crop: "limit"},
              {quality: "auto", fetch_format: "auto"}
          ]
      }],
      eager_async: true,
      overwrite: false, // default for video
    });
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
    throw new Error("Can't upload Media");
  }
};

const deleteMedia = async (publicId) => {
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

// testing
// uploadMedia("trial.mp4");
// deleteMedia("ym4tab358kqvx0dislla");

module.exports = { uploadMedia, deleteMedia };
