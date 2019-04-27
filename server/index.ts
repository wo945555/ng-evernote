import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { RouterMap } from './src/routes/routerDecorator';

import { INote, INoteBook } from './src/interface/noteInterface'
import { fileURLToPath } from 'url';

const app = express();
const fs = require('fs');
const path = require('path');
const PORT: string|number = process.env.PORT || 3000;

app.set('port', PORT);

//DB connection
mongoose.connect('mongodb+srv://wo945555:123@cluster0-wkcho.mongodb.net/test?retryWrites=true');
//bodyParser setup
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//controllers init
const CONTROLLERS_URL: string = path.join(__dirname + '/src/controllers/');
const CONTROLLERS_REGEXP: RegExp = /Controller\.(ts|js)/;
/*const requireController = require.context(
  CONTROLLERS_URL,
  false,
  CONTROLLERS_REGEXP
)
const requireController.keys().forEach(fileName=>{
  console.log(fileName)
})*/
fs.readdirSync(CONTROLLERS_URL)
  .filter((file: string) => file.search(CONTROLLERS_REGEXP) > 0)
  .forEach((file: string) => require(path.join(CONTROLLERS_URL + file)));
//error handler
app.use(function (err: Error, req: express.Request, res: express.Response, next: any) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
//routers registration
for(let [config, cb] of RouterMap.routers) {
  let cbs = Array.isArray(cb) ? cb : [cb];
  cbs.forEach(cb=> {
    app[config.method](config.path, cb);
  })
}
app.get('/', (req, res) => {
  res.send('hey!');
});
// //默认笔记
// const WELCOME: INote = {
//   notebook_id: 1,
//   title: 'Welcome',
//   tag: [],
//   content: '欢迎使用'
// };
// //笔记数据
// const notes_data: INoteBook[] = [
//   {
//     nbName: 'First Notebook',
//     articles: [WELCOME]
//   }
// ];
// //笔记本列表
// const note_books: string[] = notes_data.map(note => note.nbName);

// //定义平铺数组的方法
// const flatten = (arr: any[]):any[] => arr.reduce((item: any, next:any) => item.concat( Array.isArray(arr)? flatten(next): next, []));
// //所有笔记（不关联笔记本）
// const two_dimensional_array: any[] =  notes_data.map(note => note.articles);
// const all_notes: INote[] = flatten(two_dimensional_array);

// const genId = (noteArr: (INote | INoteBook)[]): number=>{
//   return noteArr.length>0? Math.max(...noteArr.map((v: INote | INoteBook)=>v.id))+1: 1;
// }

// app.get('/notes', (req, res) => {
//   res.json(notes_data);
// });
// app.get('/notes/list_notes', (req, res) => {
//   res.json(all_notes);
// });
// app.get('/Note/del_Note/:id',(req, res) => {
//   res.json({});
// });

// app.get('/notes/list_note_books', (req, res) => {
//   res.json(note_books);
// })

// app.get('/notes/search_notes', (req, res) => {
//   const sq = req.query.search;
  
// })
 app.listen(8000, "localhost");