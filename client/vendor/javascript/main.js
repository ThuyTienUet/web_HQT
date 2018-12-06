    function getStudents(e) {
        let id = e.id;
        let td = $('#'+id).closest('td');
        $.ajax({
            method: 'GET',
            url: '/mysql/getStudents',
            success: function(data) {
                // console.log(typeof data);
                // console.log(data);
                // console.log(td);
                // console.log(td.prev());
                console.log(data);
                
                alert('Duration: ' + data + ' ms');
                // $('#'+id).remove();
                td.textContent = data;
            }
        })
    }

    function rgetStudents(e) {
        let id = e.id;
        let td = $('#'+id).closest('td');
        $.ajax({
            method: 'GET',
            url: '/rt/getStudents',
            success: function(data) {
                console.log(data);
                td.textContent = data;
                alert('Duration: ' + data + ' ms');
            }
        })
    }

    function getCourseRegistration(e) {
        let id = e.id;
        let td = $('#'+id).closest('td');
        $.ajax({
            method: 'GET',
            url: '/mysql/getCourseRegistration',
            success: function(data) {
                console.log(data);
                td.textContent = data;
                alert('Duration: ' + data + ' ms');
            }
        })
    }

    function rgetCourseRegistration(e) {
        let id = e.id;
        let td = $('#'+id).closest('td');
        $.ajax({
            method: 'GET',
            url: '/rt/getCourseRegistration',
            success: function(data) {
                console.log(data);
                td.textContent = data;
                alert('Duration: ' + data + ' ms');
            }
        })
    }

    function getStudentsCourseRegistration(e) {
        let id = e.id;
        let td = $('#'+id).closest('td');
        $.ajax({
            method: 'GET',
            url: '/mysql/getStudentsCourseRegistration',
            success: function(data) {
                console.log(data);
                td.textContent = data;
                alert('Duration: ' + data + ' ms');
            }
        })
    }

    function rgetStudentsCourseRegistration(e) {
        let id = e.id;
        let td = $('#'+id).closest('td');
        $.ajax({
            method: 'GET',
            url: '/rt/getStudentsCourseRegistration',
            success: function(data) {
                console.log(data);
                td.textContent = data;
                alert('Duration: ' + data + ' ms');
            }
        })
    }

    function getStudentsCourseRegistrationCourse(e) {
        let id = e.id;
        let td = $('#'+id).closest('td');
        $.ajax({
            method: 'GET',
            url: '/mysql/getStudentsCourseRegistrationCourse',
            success: function(data) {
                console.log(data);
                td.textContent = data;
                alert('Duration: ' + data + ' ms');
            }
        })
    }

    function insertStudent(e) {
        let id = e.id;
        let td = $('#'+id).closest('td');
        $.ajax({
            method: 'GET',
            url: '/mysql/insertStudent',
            success: function(data) {
                // let tmp = JSON.parse(data);
                console.log(data.duration);
                td.textContent = data;
                alert('Duration: ' + data.duration + ' ms');
            }
        })
    }

    function rinsertStudent(e) {
        let id = e.id;
        let td = $('#'+id).closest('td');
        $.ajax({
            method: 'GET',
            url: '/rt/insertStudent',
            success: function(data) {
                console.log(data);
                td.textContent = data;
                alert('Duration: ' + data + ' ms');
            }
        })
    }

    function deleteStudent(e) {
        let id = e.id;
        let td = $('#'+id).closest('td');
        $.ajax({
            method: 'GET',
            url: '/mysql/deleteStudent',
            success: function(data) {
                console.log(data);
                td.textContent = data;
                alert('Duration: ' + data.duration + ' ms');
            }
        })
    }

    function rdeleteStudent(e) {
        let id = e.id;
        let td = $('#'+id).closest('td');
        $.ajax({
            method: 'GET',
            url: '/rt/deleteStudent',
            success: function(data) {
                console.log(data);
                td.textContent = data;
                alert('Duration: ' + data + ' ms');
            }
        })
    }

    function updateStudent(e) {
        let id = e.id;
        let td = $('#'+id).closest('td');
        $.ajax({
            method: 'GET',
            url: '/mysql/updateStudent',
            success: function(data) {
                console.log(data);
                td.textContent = data;
                alert('Duration: ' + data.duration + ' ms');
            }
        })  
    }

    function rupdateStudent(e) {
        let id = e.id;
        let td = $('#'+id).closest('td');
        $.ajax({
            method: 'GET',
            url: '/rt/updateStudent',
            success: function(data) {
                console.log(data);
                td.textContent = data;
                alert('Duration: ' + data + ' ms');
            }
        })
    }