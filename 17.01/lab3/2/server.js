const http = require('http');
const cp = require('child_process');
const child = cp.fork('./child.js');

http.createServer((request, response) => {
    response.statusCode = 200;
    response.end();
    child.send({ //методу send передается объект, который будет передан дочернему процессу
method: request.method, //свойство хранит http метод присланного запроса
params: request.url //свойство хранит url присланного запроса
});
}).listen(8080, () => {
    console.log('Server run in 8080 port!');
});


