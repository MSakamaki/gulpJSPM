'use strict';

var express = require('express');
var app = express();
var server = require('http').createServer(app);

// Start server
server.listen(3000,process.env.OPENSHIFT_NODEJS_IP || process.env.IP || undefined
  , function () {
  console.log('Express server listening on %d, in %s mode', 3000, app.get('env'));
});

// api 
app.get('/api/test', function (req, res) {
  res.send({id:0, message: 'hello'});
});

exports = module.exports = app;