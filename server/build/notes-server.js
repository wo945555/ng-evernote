"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
//默认笔记
var WELCOME = {
    id: 1,
    title: 'Welcome',
    tag: '',
    content: '欢迎使用'
};
//笔记数据
var notes_data = [
    {
        id: 1,
        nbName: 'First Notebook',
        articles: [WELCOME]
    }
];
//笔记本列表
var note_books = notes_data.map(function (note) { return note.nbName; });
//定义平铺数组的方法
var flatten = function (arr) { return arr.reduce(function (item, next) { return item.concat(Array.isArray(arr) ? flatten(next) : next, []); }); };
//脱离笔记本的笔记数据
var two_dimensional_array = notes_data.map(function (note) { return note.articles; });
var all_notes = flatten(two_dimensional_array);
var genId = function (noteArr) {
    return noteArr.length > 0 ? Math.max.apply(Math, noteArr.map(function (v) { return v.id; })) + 1 : 1;
};
app.get('/notes', function (req, res) {
    res.json(notes_data);
});
app.get('/notes/list_notes', function (req, res) {
    res.json(all_notes);
});
// app.get('/Note/del_Note/:id',(req, res) => {
//   res.json({});
// });
app.get('/notes/list_note_books', function (req, res) {
    res.json(note_books);
});
app.listen(8000, "localhost");
