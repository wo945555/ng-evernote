import * as http from 'http';

const server = http.createServer((req,resp) => {
    resp.end("Hello Node!");
});

server.listen(8000);