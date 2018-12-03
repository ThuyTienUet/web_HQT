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
  		r.db('dbms').table('dangkymonhoc').filter({maMH:"1000"}).count().run(conn, function(err, res) {
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
  		r.db('dbms').table("sinhvien").innerJoin(r.table("dangkymonhoc"), function (sinhvien, dangkymonhoc) {return userdevice("deviceid").eq(deviceinfo("id"));}).zip().limit(10).count().run(conn, function(err, res) {
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
  		r.db('dbms').table('deviceinfo').insert({id:100000000,mash:100000,vendor:"asdad"}).run(conn, function(err, res) {
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
  		r.db('dbms').table('deviceinfo').filter({id:100000000}).run(conn, function(err, res) {
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
  		r.db('dbms').table('deviceinfo').filter({id:100000000}).update({mash:"asddsgfg"}).run(conn, function(err, res) {
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
