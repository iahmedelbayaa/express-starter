"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const dbConfig_1 = require("./db/dbConfig");
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
dbConfig_1.AppDataSource.initialize()
    .then(() => {
    app.listen(PORT, () => {
        console.log("Server running on port 3000");
    });
})
    .catch((error) => console.log(error));
