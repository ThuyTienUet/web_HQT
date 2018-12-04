r = require('rethinkdb');

exports.rgetStudents = function rgetStudents(start, callback) {
	r.connect({ host: 'localhost', port: 28015 }, function(err, conn) {
  		if(err) throw err;
  		r.db('dbms').table('sinhvien').count().run(conn, function(err, res) {
    		if(err) throw err;
    		console.log(res);
    		callback(null, JSON.stringify(serverAnswerRGetStudents(start)));
  		});
	});
};

function serverAnswerRGetStudents(Start) {
	var result = [];
	var duration = Date.now() - Start;
    result.push({
    	duration: duration
    })
    return result;
}

exports.rgetCourseRegistration = function rgetCourseRegistration(start, callback) {
	r.connect({ host: 'localhost', port: 28015 }, function(err, conn) {
  		if(err) throw err;
  		r.db('dbms').table('dangkyMH').filter({maMH:"1000"}).count().run(conn, function(err, res) {
    		if(err) throw err;
    		console.log(res);
    		callback(null, JSON.stringify(serverAnswerRGetCourseRegistration(start)));
  		});
	});
};

function serverAnswerRGetCourseRegistration(Start) {
	var result = [];
	var duration = Date.now() - Start;
    result.push({
    	duration: duration
    })
    return result;
}

/* ke tu ham nay chua sua ==> */

exports.rgetStudentsCourseRegistration = function rgetStudentsCourseRegistration(start, callback) {
	r.connect({ host: 'localhost', port: 28015 }, function(err, conn) {
  		if(err) throw err;
  		r.db('dbms').table("sinhvien").innerJoin(r.table("dangkyMH"), function (sinhvien, dangkyMH) {return dangkyMH("maSV").eq(sinhvien("maSV"));}).zip().limit(1000).count().run(conn, function(err, res) {
    		if(err) throw err;
    		console.log(res);
    		callback(null, JSON.stringify(serverAnswerRGetStudentsCourseRegistration(start)));
  		});
	});
};

function serverAnswerRGetStudentsCourseRegistration(Start) {
	var result = [];
	var duration = Date.now() - Start;
    result.push({
    	duration: duration
    })
    return result;
}

exports.rinsertStudent = function rinsertStudent(start, callback) {
	r.connect({ host: 'localhost', port: 28015 }, function(err, conn) {
  		if(err) throw err;
  		r.db('dbms').table('sinhvien').insert({maSV:100000000, hoten:'Nguyen Van B', email: 'nvb@gmail.com'}).run(conn, function(err, res) {
    		if(err) throw err;
    		console.log(res);
    		callback(null, JSON.stringify(serverAnswerRInsertStudent(start)));
  		});
	});
};

function serverAnswerRInsertStudent(Start) {
	var result = [];
	var duration = Date.now() - Start;
    result.push({
    	duration: duration
    })
    return result;
}

exports.rdeleteStudent = function rdeleteStudent(start, callback) {
	r.connect({ host: 'localhost', port: 28015 }, function(err, conn) {
  		if(err) throw err;
  		r.db('dbms').table('sinhvien').filter({maSV:12345}).run(conn, function(err, res) {
    		if(err) throw err;
    		console.log(res);
    		callback(null, JSON.stringify(serverAnswerRDeleteStudent(start)));
  		});
	});
};

function serverAnswerRDeleteStudent(Start) {
	var result = [];
	var duration = Date.now() - Start;
    result.push({
    	duration: duration
    })
    return result;
}

exports.rupdateStudent = function rupdateStudent(start, callback) {
	r.connect({ host: 'localhost', port: 28015 }, function(err, conn) {
  		if(err) throw err;
  		r.db('dbms').table('sinhvien').filter({maSV:100000000}).update({hoten: 'Nguyen Van A'}).run(conn, function(err, res) {
    		if(err) throw err;
    		console.log(res);
    		callback(null, JSON.stringify(serverAnswerRUpdateStudent(start)));
  		});
	});
};

function serverAnswerRUpdateStudent(Start) {
	var result = [];
	var duration = Date.now() - Start;
    result.push({
    	duration: duration
    })
    return result;
}
