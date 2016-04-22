/**
 * @description [入口文件]
 * @author [fang.yang@shuyun.com]
 * @date  2016-04-21
 */
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('hello world!');
});

var server = app.listen(3000, '127.0.0.1', function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('God bless me no bug! listening at http://%s:%s', host, port);
});