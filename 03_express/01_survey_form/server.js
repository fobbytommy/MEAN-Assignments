var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var port = 8000;


app.use(bodyParser.urlencoded( {extended: true} ));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, "./views"));
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
	res.render('index');
});
var info;
app.post('/check', function(req, res) {
	info = req.body;
	console.log(info);
	res.redirect('/result')
})
app.get('/result', function(req, res) {
	res.render('result', { info: info } );
})


app.listen(port, function() {
	console.log("listening to port: ", port);
});
