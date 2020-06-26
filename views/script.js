$(document).ready(function () {
 $('#sidebar').toggleClass('active');

 
    $('#sidebar').hover( function () {
        $('#sidebar').toggleClass('active');
    }, function(){
        $('#sidebar').toggleClass('active');
    });

});