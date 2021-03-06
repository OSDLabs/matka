var express = require('express');
var app = express();
var api = require('./controllers/api.js');

app.disable('x-powered-by');

var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(require('body-parser').urlencoded({extended: true}));

// var credentials = require('./credentials.js');

var port = process.env.PORT || 17970

app.set('port', port);
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.render('home');
});

// app.get('/register', function(req, res){
// 	res.render('register', { csrf: 'CSRF token here'})
// });

app.get('/thankyou', function(req, res){
	res.render('thankyou');
});

app.post('/process', api.post);

app.get('/about', function(req, res) {
	res.render('about');
});

app.get('/contact', function(req, res) {
	res.render('contact');
});


app.use(function(req, res){
	res.type('text/html');
	res.status(404);
	res.render('404');
});


app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function() {
	console.log('Running');
});
