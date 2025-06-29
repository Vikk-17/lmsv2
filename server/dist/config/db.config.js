"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = require("path");
// load the environment file
dotenv_1.default.config({
    path: (0, path_1.resolve)(__dirname, "../../.env")
});
// const DB_CONFIG = {
//   url: process.env.MONGO_URI,
// };
const dbConnect = (conn_string) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(conn_string);
        console.log(`\x1b[45m\x1b[37m%s\x1b[0m`, ` Database Connected Successfully `);
    }
    catch (error) {
        console.log(`\x1b[41m\x1b[37m%s\x1b[0m`, ` DB Connection Error: ${error} `);
    }
});
exports.default = dbConnect;
