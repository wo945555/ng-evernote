import express from 'express';

const app = express();

interface Notes {
  id: number,
  title: string,
  tag: string,
  content: string, //标签以及富文本json
}
interface NoteBook {
  id: number,
  nbName: string;
  notes: Notes[];
}

const welcome: Notes = {
  id: 1,
  title: 'Welcome',
  tag: '',
  content: '欢迎使用'
};
const notes: NoteBook[] = [
  {
    id: 1,
    nbName: 'First Notebook',
    notes: [welcome]
  }
];
const noteBooks: string[] = notes.map(note=>note.nbName);

const genId = (noteArr: (Notes|NoteBook)[]): number=>{
  return noteArr.length>0? Math.max(...noteArr.map((v: Notes|NoteBook)=>v.id))+1: 1;
}

app.get('/notes/list_notes', (req, res) => {
  res.json(notes);
});
// app.get('/notes/del_notes/:id',(req, res) => {
//   res.json({});
// });

app.get('/note_books/list_note_books', (req, res) => {
  res.json(noteBooks);
})


app.listen(8000, "localhost");