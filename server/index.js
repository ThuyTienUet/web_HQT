var express = require('express');
var bodyParser = require('body-parser');
var SQL = require('./mysql');
var RT = require('./rethinkdb');
var app = express();
var port = 5555;

app.listen(port);

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({	extended: true })); 

console.log('\n============================ LISTENING ON PORT 6001================================\n');

app.get('/mysql/getUserInfo', function (req, res) {
   var start = Date.now();
   SQL.getUserInfo(start, function (err, result) {
        res.send(result);
        console.log(result);
   })
});

app.get('/rt/getUserInfo', function (req, res) {
   var start = Date.now();
   RT.rgetUserInfo(start, function (err, result) {
        res.send(result);
        console.log(result);
   })
});

app.get('/mysql/getAppleDeviceInfo', function (req, res) {
   var start = Date.now();
   SQL.getAppleDeviceInfo(start, function (err, result) {
        res.send(result);
        console.log(result);
   })
});

app.get('/rt/getAppleDeviceInfo', function (req, res) {
   var start = Date.now();
   RT.rgetAppleDeviceInfo(start, function (err, result) {
        res.send(result);
        console.log(result);
   })
});

app.get('/mysql/getUserInfoJoinUserDevice', function (req, res) {
   var start = Date.now();
   SQL.getUserInfoJoinUserDevice(start, function (err, result) {
        res.send(result);
        console.log(result);
   })
});

app.get('/rt/getUserInfoJoinUserDevice', function (req, res) {
   var start = Date.now();
   RT.rgetUserInfoJoinUserDevice(start, function (err, result) {
        res.send(result);
        console.log(result);
   })
});

app.get('/mysql/getUserInfoJoinUserDeviceJoinDeviceInfo', function (req, res) {
   var start = Date.now();
   SQL.getUserInfoJoinUserDeviceJoinDeviceInfo(start, function (err, result) {
        res.send(result);
        console.log(result);
   })
});

app.get('/mysql/insertUser', function (req, res) {
   var start = Date.now();
   SQL.insertUser(start, function (err, result) {
        res.send(result);
        console.log(result);
   })
});

app.get('/rt/insertUser', function (req, res) {
   var start = Date.now();
   RT.rinsertUser(start, function (err, result) {
        res.send(result);
        console.log(result);
   })
});

app.get('/mysql/deleteUser', function (req, res) {
   var start = Date.now();
   SQL.deleteUser(start, function (err, result) {
        res.send(result);
        console.log(result);
   })
});

app.get('/rt/deleteUser', function (req, res) {
   var start = Date.now();
   RT.rdeleteUser(start, function (err, result) {
        res.send(result);
        console.log(result);
   })
});

app.get('/mysql/updateUser', function (req, res) {
   var start = Date.now();
   SQL.updateUser(start, function (err, result) {
        res.send(result);
        console.log(result);
   })
});

app.get('/rt/updateUser', function (req, res) {
   var start = Date.now();
   RT.rupdateUser(start, function (err, result) {
        res.send(result);
        console.log(result);
   })
});
