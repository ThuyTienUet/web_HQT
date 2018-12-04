var mysql = require("mysql");

var con = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "",
   database: "dangkymonhoc" 
});

con.connect(function (err) {
    if (err) {
        console.log(err);
        console.log("Failed to connect to database!");
        return;
    }
    console.log("Successfully connected to database!");
});

exports.getStudents = function getSTudents(start, callback) {
	con.query("select * from sinhvien", function (err, rows) {
		callback(null, JSON.stringify(serverAnswerGetStudents(rows, start)));
	})
};

function serverAnswerGetStudents(Rows, Start) {
	var result = [];
	var duration = Date.now() - Start;
    result.push({
    	duration: duration
    })
    return result;
}

exports.getCourseRegistration = function getCourseRegistration(start, callback) {
	con.query("select * from dangkyMH where maMH = '1000'", function (err, rows) {
		callback(null, JSON.stringify(serverAnswerGetCourseRegistration(rows, start)));
	})
};

function serverAnswerGetCourseRegistration(Rows, Start) {
	var result = [];
	var duration = Date.now() - Start;
    result.push({
    	duration: duration
    })
    return result;
}

exports.getStudentsCourseRegistration = function getStudentsCourseRegistration(start, callback) {
	con.query("select * from sinhvien join dangkyMH limit 1000", function (err, rows) {
		callback(null, JSON.stringify(serverAnswerGetStudentsCourseRegistration(rows, start)));
	})
};

function serverAnswerGetStudentsCourseRegistration(Rows, Start) {
	var result = [];
	var duration = Date.now() - Start;
    result.push({
    	duration: duration
    })
    return result;
}

exports.getStudentsCourseRegistrationCourse = function getStudentsCourseRegistrationCourse(start, callback) {
	con.query("select * from sinhvien join dangkyMH join monhoc limit 5000", function (err, rows) {
		callback(null, JSON.stringify(serverAnswerGetStudentsCourseRegistrationCourse(rows, start)));
	})
};

function serverAnswerGetStudentsCourseRegistrationCourse(Rows, Start) {
	var result = [];
	var duration = Date.now() - Start;
    result.push({
    	duration: duration
    })
    return result;
}

exports.insertStudent = function insertStudent(start, callback) {
	con.query("INSERT INTO sinhvien(hoten, email) VALUES ('Nguyen Van B', 'nvb@gmail.com')", function (err, rows) {
		var result = [];
        var duration = Date.now() - start;
        result = {'duration' : duration};
        callback(null, result);
	})
}

exports.deleteStudent = function deleteStudent(start, callback) {
	con.query("DELETE FROM sinhvien WHERE maSV = '12345'", function (err, rows) {
		var result = [];
        var duration = Date.now() - start;
        result = {'duration' : duration};
        callback(null, result);
	})
}

exports.updateStudent = function updateStudent(start, callback) {
	con.query("update sinhvien set hoten = 'Nguyen Van A' where maSV = '1000'", function (err, rows) {
		var result = [];
        var duration = Date.now() - start;
        result = {'duration' : duration};
        callback(null, result);
	})
}