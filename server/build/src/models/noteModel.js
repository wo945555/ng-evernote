"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
//为Model定义INoteModel接口以获得ts带来的类型检测与更方便的IDE提示
//但不可避免的在Schema重复定义一遍类型
//目前不借助第三方库的情况下未找到更优雅的方法:）
var noteSchema = new mongoose_1.default.Schema({
    notebook_id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    tag: [String],
    content: {
        type: String,
        required: true
    }
});
//使用ts的泛型定义Model
exports.Note = mongoose_1.default.model('Notes', noteSchema);
