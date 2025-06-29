import mongoose from "mongoose";
import dotenv from "dotenv";
import { resolve } from "path";


// load the environment file
dotenv.config({ 
    path: resolve(__dirname, "../../.env") 
});


// const DB_CONFIG = {
//   url: process.env.MONGO_URI,
// };


const dbConnect = async (conn_string: string): Promise<any> => {
  try {
    await mongoose.connect(conn_string);
    console.log(
      `\x1b[45m\x1b[37m%s\x1b[0m`,
      ` Database Connected Successfully `
    );
  } catch (error) {
    console.log(
      `\x1b[41m\x1b[37m%s\x1b[0m`,
      ` DB Connection Error: ${error} `
    );
  }
};

export default dbConnect;
