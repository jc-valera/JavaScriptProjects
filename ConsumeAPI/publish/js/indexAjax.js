// $.ajax({
//     type: 'GET',
//     dataType:"jsonp",
//     url: 'http://localhost/TestSolApi/api/employee/getAllEmployees',
//     success: function (data, status, xhr) {
//       console.log('data: ', data);
//     }
//   });

$(document).ready(function() {
    $('#myButton').click(function() {
        
        // var apiUrl = 'https://jsonplaceholder.typicode.com/posts'; 
        var apiUrl = 'https://localhost:44347/api/Employee/getAllEmployees';

        $.ajax({
            url: apiUrl,
            type: 'GET',
            success: function(data) {
                // console.log('Successfully loaded image');
                console.log('success',data);                    
            },
            error: function(xhr,textStatus,errorThrown){
                console.log('Error Something');
            },
        });
    });
});