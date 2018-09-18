var answer1;

$(document).ready(function () {

    $('#question1Form input').on('change', function () {
        answer1 = ($('input[name=question1]:checked', '#question1Form').val());
        console.log(answer1);
      });
  


});
