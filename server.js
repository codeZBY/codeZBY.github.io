var http = require('http');
var Mock = require('mockjs');

var server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/json;charset=utf-8")
    var users = Mock.mock({
        "users|1-20": [{
            "name": "@cname"
        }]
    })
    res.end(JSON.stringify(users))
}).listen(8001)