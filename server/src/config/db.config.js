import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

const DB_CONFIG = {
  url: process.env.MONGO_URI,
};

const dbConnect = async () => {
  try {
    await mongoose.connect(DB_CONFIG.url);
    console.log(
      `\x1b[45m\x1b[37m%s\x1b[0m`,
      ` 😄 ✅ Database Connected Successfully `
    );
    // await Course.syncIndexes();
  } catch (error) {
    console.log(
      `\x1b[41m\x1b[37m%s\x1b[0m`,
      ` 😞 DB Connection Error: ${error} `
    );
  }
};

export default dbConnect;
