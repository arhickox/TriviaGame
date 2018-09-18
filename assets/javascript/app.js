$(document).ready(function () {

    //scorekeeping variables
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

    //answer variables
    var answer1 = 0;
    var answer2 = 0;
    var answer3 = 0;
    var answer4 = 0;
    var answer5 = 0;
    var answer6 = 0;
    var answer7 = 0;
    var answer8 = 0;
    var answer9 = 0;
    var answer10 = 0;

    //timer variables
    var number = 60;
    var intervalId;


    $('#startButton').on('click', function () {
        var x = document.getElementById("main_box");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }

        runTimer();
    });


    $('#question1Form input').on('change', function () {
        answer1 = ($('input[name=question1]:checked', '#question1Form').val());
    });

    $('#question2Form input').on('change', function () {
        answer2 = ($('input[name=question2]:checked', '#question2Form').val());
    });

    $('#question3Form input').on('change', function () {
        answer3 = ($('input[name=question3]:checked', '#question3Form').val());
    });

    $('#question4Form input').on('change', function () {
        answer4 = ($('input[name=question4]:checked', '#question4Form').val());
    });

    $('#question5Form input').on('change', function () {
        answer5 = ($('input[name=question5]:checked', '#question5Form').val());
    });

    $('#question6Form input').on('change', function () {
        answer6 = ($('input[name=question6]:checked', '#question6Form').val());
    });

    $('#question7Form input').on('change', function () {
        answer7 = ($('input[name=question7]:checked', '#question7Form').val());
    });

    $('#question8Form input').on('change', function () {
        answer8 = ($('input[name=question8]:checked', '#question8Form').val());
    });

    $('#question9Form input').on('change', function () {
        answer9 = ($('input[name=question9]:checked', '#question9Form').val());
    });

    $('#question10Form input').on('change', function () {
        answer10 = ($('input[name=question10]:checked', '#question10Form').val());
    });

    $('#submit').on('click', function () {

        if (answer1 == "d") {
            correct++;
        } else if (answer1 == "") {
            unanswered++;
        } else (incorrect++);

        if (answer2 == "c") {
            correct++;
        } else if (answer2 == "") {
            unanswered++;
        } else (incorrect++);

        if (answer3 == "b") {
            correct++;
        } else if (answer3 == "") {
            unanswered++;
        } else (incorrect++);

        if (answer4 == "d") {
            correct++;
        } else if (answer4 == "") {
            unanswered++;
        } else (incorrect++);

        if (answer5 == "a") {
            correct++;
        } else if (answer5 == "") {
            unanswered++;
        } else (incorrect++);

        if (answer6 == "b") {
            correct++;
        } else if (answer6 == "") {
            unanswered++;
        } else (incorrect++);

        if (answer7 == "d") {
            correct++;
        } else if (answer7 == "") {
            unanswered++;
        } else (incorrect++);

        if (answer8 == "b") {
            correct++;
        } else if (answer8 == "") {
            unanswered++;
        } else (incorrect++);

        if (answer9 == "c") {
            correct++;
        } else if (answer9 == "") {
            unanswered++;
        } else (incorrect++);

        if (answer10 == "a") {
            correct++;
        } else if (answer10 == "") {
            unanswered++;
        } else (incorrect++);

        document.getElementById("correct").innerHTML = correct;
        document.getElementById("incorrect").innerHTML = incorrect;
        document.getElementById("unanswered").innerHTML = unanswered;

    });

    function tallyUp() {
        if (answer1 == "d") {
            correct++;
        } else if (answer1 == "") {
            unanswered++;
        } else (incorrect++);

        if (answer2 == "c") {
            correct++;
        } else if (answer2 == "") {
            unanswered++;
        } else (incorrect++);

        if (answer3 == "b") {
            correct++;
        } else if (answer3 == "") {
            unanswered++;
        } else (incorrect++);

        if (answer4 == "d") {
            correct++;
        } else if (answer4 == "") {
            unanswered++;
        } else (incorrect++);

        if (answer5 == "a") {
            correct++;
        } else if (answer5 == "") {
            unanswered++;
        } else (incorrect++);

        if (answer6 == "b") {
            correct++;
        } else if (answer6 == "") {
            unanswered++;
        } else (incorrect++);

        if (answer7 == "d") {
            correct++;
        } else if (answer7 == "") {
            unanswered++;
        } else (incorrect++);

        if (answer8 == "b") {
            correct++;
        } else if (answer8 == "") {
            unanswered++;
        } else (incorrect++);

        if (answer9 == "c") {
            correct++;
        } else if (answer9 == "") {
            unanswered++;
        } else (incorrect++);

        if (answer10 == "a") {
            correct++;
        } else if (answer10 == "") {
            unanswered++;
        } else (incorrect++);

        document.getElementById("correct").innerHTML = correct;
        document.getElementById("incorrect").innerHTML = incorrect;
        document.getElementById("unanswered").innerHTML = unanswered;
    };

    function runTimer() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
        number--;
        $("#timerDiv").html("<h2>" + number + "</h2>");
        if (number === 0) {
            clearInterval(intervalId);
            tallyUp();
        }

    }

});
