$(document).ready(function() {
    function getStudents(e) {
        $.ajax({
            method: 'GET',
            url: '/'
        })
    }
})