"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./config");
const app = (0, express_1.default)();
app.use("/", (req, res, next) => {
    res.status(200).send({ data: "Response from server" });
});
app.listen(config_1.config.PORT, () => {
    console.log(`Server is listening on port ${config_1.config.PORT}!`);
});
