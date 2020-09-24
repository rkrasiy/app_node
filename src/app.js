var express = require('express');
var app = express();

app.use(express.static('public'));

//Routes
app.use(require('./routes/routes'));  //http://127.0.0.1:8000/    http://127.0.0.1:8000/about

//app.use("/user",require('./routes'));  //http://127.0.0.1:8000/user  http://127.0.0.1:8000/user/about

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){
  res.status(404).send('what???');
});


var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})