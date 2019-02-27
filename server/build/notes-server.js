"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var welcome = {
    title: 'Welcome',
    tag: '',
    content: '欢迎使用'
};
var notes = [
    {
        nbName: 'First Notebook',
        notes: [welcome]
    }
];
var noteBooks = notes.map(function (note) { return note.nbName; });
app.get('/notes', function (req, res) {
    res.json(notes);
});
app.get('/note_books', function (req, res) {
    res.json(noteBooks);
});
app.listen(8000, "localhost");
