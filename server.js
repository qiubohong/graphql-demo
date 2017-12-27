var express = require('express');
var app = express();
var serverPort = 8080;

var g = require('graphql')
let {graphql} = g;
var bodyParser = require('body-parser')

var schema = require('./schema')

//添加返回头部类型
app.use(bodyParser.text({ type: 'application/graphql' }));

app.use(express.static('www'));

app.post('/graphql', (req, res) => {
	console.log(req.body)
  graphql(schema, req.body)
  .then((result) => {
    res.send(JSON.stringify(result, null, 2));
  })
});

var server = app.listen(serverPort, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});


/*var opn = require('opn');
var os = require('os');

var lacalhost = ''
try {
    var network = os.networkInterfaces()
    localhost = network[Object.keys(network)[0]][1].address
} catch (e) {
    localhost = 'localhost';
}
var uri = 'http://' + localhost + ':' + serverPort;
opn(uri);*/