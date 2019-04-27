"use strict";
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var e_1, _a;
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var mongoose_1 = __importDefault(require("mongoose"));
var routerDecorator_1 = require("./src/routes/routerDecorator");
var app = express_1.default();
var fs = require('fs');
var path = require('path');
var PORT = process.env.PORT || 3000;
app.set('port', PORT);
//DB connection
mongoose_1.default.connect('mongodb+srv://wo945555:123@cluster0-wkcho.mongodb.net/test?retryWrites=true');
//bodyParser setup
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
//controllers init
var CONTROLLERS_URL = path.join(__dirname + '/src/controllers/');
var CONTROLLERS_REGEXP = /Controller\.(ts|js)/;
/*const requireController = require.context(
  CONTROLLERS_URL,
  false,
  CONTROLLERS_REGEXP
)
const requireController.keys().forEach(fileName=>{
  console.log(fileName)
})*/
fs.readdirSync(CONTROLLERS_URL)
    .filter(function (file) { return file.search(CONTROLLERS_REGEXP) > 0; })
    .forEach(function (file) { return require(path.join(CONTROLLERS_URL + file)); });
//error handler
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
var _loop_1 = function (config, cb) {
    var cbs = Array.isArray(cb) ? cb : [cb];
    cbs.forEach(function (cb) {
        app[config.method](config.path, cb);
    });
};
try {
    //routers registration
    for (var _b = __values(routerDecorator_1.RouterMap.routers), _c = _b.next(); !_c.done; _c = _b.next()) {
        var _d = __read(_c.value, 2), config = _d[0], cb = _d[1];
        _loop_1(config, cb);
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    }
    finally { if (e_1) throw e_1.error; }
}
app.get('/', function (req, res) {
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
