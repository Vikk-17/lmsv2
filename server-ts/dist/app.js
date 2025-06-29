"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = require("path");
const db_config_1 = __importDefault(require("./config/db.config"));
const app = (0, express_1.default)();
dotenv_1.default.config({
    path: (0, path_1.resolve)(__dirname, "../.env")
});
const config = {
    PORT: process.env.PORT || 4000,
    MONGO_URI: process.env.MONGO_URI || "localhost:27017/lmsv2",
};
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
// conncet to the database
(0, db_config_1.default)(config.MONGO_URI);
app.get("/", (req, res) => {
    res.send("Empower Your Learning with Gir Technologies");
});
app.listen(config.PORT, () => {
    console.log(`\x1b[45m\x1b[37m%s\x1b[0m`, ` Server is started at: http://localhost:${config.PORT}/ `);
});
