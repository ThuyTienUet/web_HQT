let path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var SQL = require('./mysql');
var RT = require('./rethinkdb');
var app = express();
var port = 5555;



app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({	extended: true })); 
app.use(express.static(path.join(__dirname, '../client')));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname,'../client/index.html'))
})

app.listen(port);
console.log('\n============================ LISTENING ON PORT 5555================================\n');

app.get('/mysql/getStudents', function (req, res) {
   var start = Date.now();
   SQL.getStudents(start, function (err, result) {
        res.send(result);
        // console.log(result);
   })
});

app.get('/rt/getStudents', function (req, res) {
   var start = Date.now();
   RT.rgetStudents(start, function (err, result) {
        res.send(result);
        console.log(result);
   })
});

app.get('/mysql/getCourseRegistration', function (req, res) {
   var start = Date.now();
   SQL.getCourseRegistration(start, function (err, result) {
        res.send(result);
        console.log(result);
   })
});

app.get('/rt/getCourseRegistration', function (req, res) {
   var start = Date.now();
   RT.rgetCourseRegistration(start, function (err, result) {
        res.send(result);
        console.log(result);
   })
});

app.get('/mysql/getStudentsCourseRegistration', function (req, res) {
   var start = Date.now();
   SQL.getStudentsCourseRegistration(start, function (err, result) {
        res.send(result);
        console.log(result);
   })
});

app.get('/rt/getStudentsCourseRegistration', function (req, res) {
   var start = Date.now();
   RT.rgetStudentsCourseRegistration(start, function (err, result) {
        res.send(result);
        console.log(result);
   })
});

app.get('/mysql/getStudentsCourseRegistrationCourse', function (req, res) {
   var start = Date.now();
   SQL.getStudentsCourseRegistrationCourse(start, function (err, result) {
        res.send(result);
        console.log(result);
   })
});

app.get('/mysql/insertStudent', function (req, res) {
   var start = Date.now();
   SQL.insertStudent(start, function (err, result) {
        res.send(result);
        console.log(result);
   })
});

app.get('/rt/insertStudent', function (req, res) {
   var start = Date.now();
   RT.rinsertStudent(start, function (err, result) {
        res.send(result);
        console.log(result);
   })
});

app.get('/mysql/deleteStudent', function (req, res) {
   var start = Date.now();
   SQL.deleteStudent(start, function (err, result) {
        res.send(result);
        console.log(result);
   })
});

app.get('/rt/deleteStudent', function (req, res) {
   var start = Date.now();
   RT.rdeleteStudent(start, function (err, result) {
        res.send(result);
        console.log(result);
   })
});

app.get('/mysql/updateStudent', function (req, res) {
   var start = Date.now();
   SQL.updateStudent(start, function (err, result) {
        res.send(result);
        console.log(result);
   })
});

app.get('/rt/updateStudent', function (req, res) {
   var start = Date.now();
   RT.rupdateStudent(start, function (err, result) {
        res.send(result);
        console.log(result);
   })
});
