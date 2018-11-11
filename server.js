var express = require('express')
var $path = require('path')
var app = express()

app.use("/assets", express.static(__dirname + "/assets"))
app.use("/public", express.static(__dirname + "/public"))

app.get("/", function(req, res) {
	res.sendFile($path.join(__dirname+'/public/index.html'))
})

var port = 8000
app.listen(port, function() {
	console.log('listening to http://localhost:'+port)
})