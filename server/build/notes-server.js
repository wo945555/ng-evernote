"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var welcome = {
    id: 1,
    title: 'Welcome',
    tag: '',
    content: '欢迎使用'
};
var notes = [
    {
        id: 1,
        nbName: 'First Notebook',
        notes: [welcome]
    }
];
var noteBooks = notes.map(function (note) { return note.nbName; });
var genId = function (noteArr) {
    return noteArr.length > 0 ? Math.max.apply(Math, noteArr.map(function (v) { return v.id; })) + 1 : 1;
};
app.get('/notes/list_notes', function (req, res) {
    res.json(notes);
});
// app.get('/notes/del_notes/:id',(req, res) => {
//   res.json({});
// });
app.get('/note_books/list_note_books', function (req, res) {
    res.json(noteBooks);
});
app.listen(8000, "localhost");
