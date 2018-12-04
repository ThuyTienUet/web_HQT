$(document).ready(function() {
    function getStudents(e) {
        let id = e.id;
        let td = $('#'+id).closest('td');
        $.ajax({
            method: 'GET',
            url: '/mysql/getStudents',
            success: function(data) {
                console.log(data);
                $('#'+id).remove();
                td.innerText = JSON.parse(JSON.stringify(data));
            }
        })
    }

    function rgetStudents(e) {
        $.ajax({
            method: 'GET',
            url: '/rt/getStudents',
            success: function(data) {
                console.log(data);
            }
        })
    }

    function getCourseRegistration(e) {
        $.ajax({
            method: 'GET',
            url: '/mysql/getCourseRegistration',
            success: function(data) {
                console.log(data);
            }
        })
    }

    function rgetCourseRegistration(e) {
        $.ajax({
            method: 'GET',
            url: '/rt/getCourseRegistration',
            success: function(data) {
                console.log(data);
            }
        })
    }

    function getStudentsCourseRegistration(e) {
        $.ajax({
            method: 'GET',
            url: '/mysql/getStudentsCourseRegistration',
            success: function(data) {
                console.log(data);
            }
        })
    }

    function rgetStudentsCourseRegistration(e) {
        $.ajax({
            method: 'GET',
            url: '/rt/getStudentsCourseRegistration',
            success: function(data) {
                console.log(data);
            }
        })
    }

    function getStudentsCourseRegistrationCourse(e) {
        $.ajax({
            method: 'GET',
            url: '/mysql/getStudentsCourseRegistrationCourse',
            success: function(data) {
                console.log(data);
            }
        })
    }

    function insertStudent(e) {
        $.ajax({
            method: 'GET',
            url: '/mysql/insertStudent',
            success: function(data) {
                console.log(data);
            }
        })
    }

    function rinsertStudent(e) {
        $.ajax({
            method: 'GET',
            url: '/rt/insertStudent',
            success: function(data) {
                console.log(data);
            }
        })
    }

    function deleteStudent(e) {
        $.ajax({
            method: 'GET',
            url: '/mysql/deleteStudent',
            success: function(data) {
                console.log(data);
            }
        })
    }

    function rdeleteStudent(e) {
        $.ajax({
            method: 'GET',
            url: '/rt/deleteStudent',
            success: function(data) {
                console.log(data);
            }
        })
    }

    function updateStudent(e) {
        $.ajax({
            method: 'GET',
            url: '/mysql/updateStudent',
            success: function(data) {
                console.log(data);
            }
        })  
    }

    function rupdateStudent(e) {
        $.ajax({
            method: 'GET',
            url: '/rt/updateStudent',
            success: function(data) {
                console.log(data);
            }
        })
    }
})