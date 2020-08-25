$(function () {

    var socket = io();
    var s1 = 0,
        s2 = 0,
        s3 = 0,
        s4 = 0,
        s5 = 0,
        s6 = 0,
        s7 = 0,
        s8 = 0,
        s9 = 0,
        s10 = 0,
        globalOne = 0,
        globalTwo = 0;

    var repetida = new Audio('./mp3/repetida.mp3');

    socket.on('person one', function(name) { 
        $('#nameOne').text(name);
    });
    socket.on('person two', function(name) { 
        $('#nameTwo').text(name);
    });

    socket.on('1-answer-1', function(name) { 
        if(name == '') {
            $('#firstAnswer-1').text('XXXXXXXXXXXXXXXXXXXX');
        } else {
            $('#firstAnswer-1').text(name);
        }
       
    });

    socket.on('1-answer-2', function(name) { 
        if(name == '') {
            $('#firstAnswer-2').text('XXXXXXXXXXXXXXXXXXXX');
        } else {
            $('#firstAnswer-2').text(name);
        }
    });

    socket.on('2-answer-1', function(name) { 
        if(name == '') {
            $('#secondAnswer-1').text('XXXXXXXXXXXXXXXXXXXX');
        } else {
            $('#secondAnswer-1').text(name);
        }
    });

    socket.on('2-answer-2', function(name) { 
        if(name == '') {
            $('#secondAnswer-2').text('XXXXXXXXXXXXXXXXXXXX');
        } else{
            $('#secondAnswer-2').text(name);
        }
    });

    socket.on('3-answer-1', function(name) { 
        if(name == '') {
            $('#thirdAnswer-1').text('XXXXXXXXXXXXXXXXXXXX');
        } else {
            $('#thirdAnswer-1').text(name);
        }
    });

    socket.on('3-answer-2', function(name) { 
        if(name == '') {
            $('#thirdAnswer-2').text('XXXXXXXXXXXXXXXXXXXX');
        } else {
            $('#thirdAnswer-2').text(name);
        }
    });

    socket.on('4-answer-1', function(name) { 
        if(name == '') {
            $('#fourthAnswer-1').text('XXXXXXXXXXXXXXXXXXXX');
        } else {
            $('#fourthAnswer-1').text(name);
        }
    });

    socket.on('4-answer-2', function(name) { 
        if(name == '') {
            $('#fourthAnswer-2').text('XXXXXXXXXXXXXXXXXXXX');
        } else {
            $('#fourthAnswer-2').text(name);
        }
    });

    socket.on('5-answer-1', function(name) { 
        if(name == '') {
            $('#fifthAnswer-1').text('XXXXXXXXXXXXXXXXXXXX');
        } else {
            $('#fifthAnswer-1').text(name);
        }
    });

    socket.on('5-answer-2', function(name) { 
        if(name == '') {
            $('#fifthAnswer-2').text('XXXXXXXXXXXXXXXXXXXX');
        } else {
            $('#fifthAnswer-2').text(name);
        }
    });

    socket.on('1-scores-1', function(score) { 
        console.log(score);
        if(score == null) {
            $('#firstScore-1').text('0');
        } else {
            $('#firstScore-1').text(score);
        }
        // $('#firstScore-1').text(score);
    });
    socket.on('1-scores-2', function(score) { 
        console.log(score);
        if(score == null) {
            $('#firstScore-2').text('0');
        } else {
            $('#firstScore-2').text(score);
        }
        // $('#firstScore-2').text(score);
    });

    socket.on('2-scores-1', function(score) { 
        if(score == null) {
            $('#secondScore-1').text('0');
        } else {
            $('#secondScore-1').text(score);
        }
    });

    socket.on('2-scores-2', function(score) { 
        if(score == null) {
            $('#secondScore-2').text('0');
        } else {
            $('#secondScore-2').text(score);
        }
    });

    socket.on('3-scores-1', function(score) { 
        $('#thirdScore-1').text(score);
    });
    socket.on('3-scores-2', function(score) { 
        $('#thirdScore-2').text(score);
    });

    socket.on('4-scores-1', function(score) { 
        $('#fourthScore-1').text(score);
    });
    socket.on('4-scores-2', function(score) { 
        $('#fourthScore-2').text(score);
    });

    socket.on('5-scores-1', function(score) { 
        $('#fifthScore-1').text(score);
    });
    socket.on('5-scores-2', function(score) { 
        $('#fifthScore-2').text(score);
    });

    socket.on('update score', function() {

        if(document.getElementById('firstScore-1').innerText !== "__") {
            s1 = parseInt(document.getElementById('firstScore-1').innerText);
        }
        if(document.getElementById('secondScore-1').innerText !== "__") {
            s2 = parseInt(document.getElementById('secondScore-1').innerText);
        }
        if(document.getElementById('thirdScore-1').innerText !== "__") {
            s3 = parseInt(document.getElementById('thirdScore-1').innerText);
        }
        if(document.getElementById('fourthScore-1').innerText !== "__") {
            s4 = parseInt(document.getElementById('fourthScore-1').innerText);
        }
        if(document.getElementById('fifthScore-1').innerText !== "__") {
            s5 = parseInt(document.getElementById('fifthScore-1').innerText);
        }

        if(document.getElementById('firstScore-2').innerText !== "__") {
            s6 = parseInt(document.getElementById('firstScore-2').innerText);
        }
        if(document.getElementById('secondScore-2').innerText !== "__") {
            s7 = parseInt(document.getElementById('secondScore-2').innerText);
        }
        if(document.getElementById('thirdScore-2').innerText !== "__") {
            s8 = parseInt(document.getElementById('thirdScore-2').innerText);
        }
        if(document.getElementById('fourthScore-2').innerText !== "__") {
            s9 = parseInt(document.getElementById('fourthScore-2').innerText);
        }
        if(document.getElementById('fifthScore-2').innerText !== "__") {
            s10 = parseInt(document.getElementById('fifthScore-2').innerText);
        }

        globalOne = s1 + s2 + s3 + s4 + s5;
        globalTwo = s6 + s7 + s8 + s9 + s10;

        document.getElementById('scoreOne').innerText = globalOne;
        document.getElementById('scoreTwo').innerText = globalTwo;
    });

    socket.on('respuesta repetida', function() {
        repetida.play();
    });
});

var elem = document.documentElement;
function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
}

function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}