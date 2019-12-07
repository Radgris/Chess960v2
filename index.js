const express = require('express');
const app = express();
const port = 8080;
const http = require('http');

app.set('port', port);

const server = http.createServer(app);

app.get('/', (req, res) => res.send('Hello World!'));

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

const onError = (error) => {
    if(error.syscall!== 'listen'){
        throw error;
    }
};

const onListening = () => {
    console.log('listening on port 8080');
};