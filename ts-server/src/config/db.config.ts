import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const DB_CONFIG = {
  url: process.env.MONGO_URI || "", // fallback to empty string to avoid undefined
};

const dbConnect = async (): Promise<void> => {
  try {
    await mongoose.connect(DB_CONFIG.url);
    console.log(
      `\x1b[45m\x1b[37m%s\x1b[0m`,
      ` 😄 ✅ Database Connected Successfully `
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(
        `\x1b[41m\x1b[37m%s\x1b[0m`,
        ` 😞 DB Connection Error: ${error.message} `
      );
    } else {
      console.error(
        `\x1b[41m\x1b[37m%s\x1b[0m`,
        ` 😞 DB Connection Error: Unknown error `
      );
    }
    process.exit(1); // Optional: exit app if DB connection fails
  }
};

export default dbConnect;
