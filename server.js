var express = require('express');
var path = require('path');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.set('json spaces', 2);

app.use('/dist', express.static(path.resolve("./dist")));
app.use('/public', express.static(path.resolve("./public")));

app.get('*', function(req, res){
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(3000);
exports = module.exports = app;
