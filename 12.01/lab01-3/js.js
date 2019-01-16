let http = require('http');
let fs = require('fs');

http.createServer(response).listen(8080);

function response(req, res) {
    fs.readFile('header.html', 'utf8', (err, data1) => {
                if (err) {
                    console.log('File error');
                    res.statusCode = 404;
                    res.end();
                } else {
                    fs.readFile('body.html', 'utf8', (err, data2) => {
                        if (err) {
                            console.log('File error');
                            res.statusCode = 404;
                            res.end();
                        } else {
                            fs.readFile('footer.html', 'utf8', (err, data3) => {
                                if (err) {
                                    console.log('File error');
                                    res.statusCode = 404;
                                    res.end();
                                } else {
                                    res.writeHead(200, {
                                        'Content-Type': 'text/html'
                                    });
                                    res.write(data1 + data2 + data3);
                                    res.end();
                                }
                            });
                        }
                    });
                }
    });
}