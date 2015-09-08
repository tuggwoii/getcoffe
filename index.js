var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname, 'css'));
app.use(express.static(__dirname, 'media'));

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function(request, response) {
  response.render('pages/index');
});
app.get('/v', function(request, response) {
  response.render('pages/v');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


