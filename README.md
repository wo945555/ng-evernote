# AngularEvernote

基于Angular7+ts开发的evernote，服务端使用express框架。

## 运行客户端
```
cd client
npm install

//开发环境
ng server --open     //http://localhost:4200
//构建
ng build   //打包在dist目录
```

## 运行服务端
```
cd server
npm install

npm run tsc
node build/notes-server.js
```