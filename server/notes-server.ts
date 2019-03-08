import express from 'express';
import bodyParser from 'body-parser';

import { Note, NoteBook } from './interface/notesInterface'

const app = express();


//默认笔记
const WELCOME: Note = {
  id: 1,
  title: 'Welcome',
  tag: '',
  content: '欢迎使用'
};
//笔记数据
const notes_data: NoteBook[] = [
  {
    id: 1,
    nbName: 'First Notebook',
    articles: [WELCOME]
  }
];
//笔记本列表
const note_books: string[] = notes_data.map(note => note.nbName);

//定义平铺数组的方法
const flatten = (arr: any[]):any[] => arr.reduce((item: any, next:any) => item.concat( Array.isArray(arr)? flatten(next): next, []));
//脱离笔记本的笔记数据
const two_dimensional_array: any[] =  notes_data.map(note => note.articles);
const all_notes: Note[] = flatten(two_dimensional_array);

const genId = (noteArr: (Note|NoteBook)[]): number=>{
  return noteArr.length>0? Math.max(...noteArr.map((v: Note|NoteBook)=>v.id))+1: 1;
}

app.get('/notes', (req, res) => {
  res.json(notes_data);
});
app.get('/notes/list_notes', (req, res) => {
  res.json(all_notes);
});
// app.get('/Note/del_Note/:id',(req, res) => {
//   res.json({});
// });

app.get('/notes/list_note_books', (req, res) => {
  res.json(note_books);
})

app.get('/notes/search_notes', (req, res) => {
  const sq = req.query.search;
  
})
app.listen(8000, "localhost");