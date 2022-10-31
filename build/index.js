"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dataController = require('./controllers');
var app = (0, express_1.default)();
app.get('/', function (req, res) {
    dataController.getData(req, res);
});
app.put('/', function (req, res) {
    dataController.addData(req, res);
});
app.listen(8000, function () {
    return console.log("Example app listening on port 8000!");
});
