$(function () {

    var correcta = new Audio('./mp3/right.mp3');
    var incorrecta = new Audio('./mp3/wrong.mp3');

    var socket = io(),
        s1 = 0,
        s2 = 0,
        s3 = 0,
        s4 = 0,
        s5 = 0,
        teamOneScore = 0,
        teamTwoScore = 0,
        globalScore = 0,
        round = 0,
        strike = 0;

    socket.on('team one', function(teamName) { 
        $('#teamOne').text(teamName);
        document.getElementById('teamOneScore').innerText = 0;
    });
    socket.on('team two', function(teamName) { 
        $('#teamTwo').text(teamName);
        document.getElementById('teamTwoScore').innerText = 0;
    });
    //<<SECCIÓN DE RESPUESTAS>>
    socket.on('first answer', function(answer) { 
        $('#firstAnswer').text(answer);
        correcta.play();
    });
    socket.on('first score', function(score) {
        $('#firstScore').text(score);
    });

    socket.on('second answer', function(answer) {
        $('#secondAnswer').text(answer);
        correcta.play();
    });
    socket.on('second score', function(score) {
        $('#secondScore').text(score);
    });

    socket.on('third answer', function(answer) {
        $('#thirdAnswer').text(answer);
        correcta.play();
    });
    socket.on('third score', function(score) {
        $('#thirdScore').text(score);
    });

    socket.on('fourth answer', function(answer) {
        $('#fourthAnswer').text(answer);
        correcta.play();
    });
    socket.on('fourth score', function(score) {
        $('#fourthScore').text(score);
    });

    socket.on('fifth answer', function(answer) {
        $('#fifthAnswer').text(answer);
        correcta.play();
    });
    socket.on('fifth score', function(score) {
        $('#fifthScore').text(score);
    });
    //<<FIN DE SECCIÓN DE RESPUESTAS>>
    socket.on('score to t1', function() {
        round++;

        $('#firstAnswer').text("________________________________________");
        $('#secondAnswer').text("________________________________________");
        $('#thirdAnswer').text("________________________________________");
        $('#fourthAnswer').text("________________________________________");
        $('#fifthAnswer').text("________________________________________");
        $('#firstScore').text("__");
        $('#secondScore').text("__");
        $('#thirdScore').text("__");
        $('#fourthScore').text("__");
        $('#fifthScore').text("__");

        if(round == 4) {

            teamOneScore += + (globalScore * 2);
            document.getElementById('teamOneScore').innerText = teamOneScore;
            globalScore = 0;
            document.getElementById('globalScore').innerText = globalScore;
        } else if(round == 5) {

            teamOneScore += + (globalScore * 3);
            document.getElementById('teamOneScore').innerText = teamOneScore;
            globalScore = 0;
            document.getElementById('globalScore').innerText = globalScore;
        } else {

            teamOneScore += + globalScore;
            document.getElementById('teamOneScore').innerText = teamOneScore;
            globalScore = 0;
            document.getElementById('globalScore').innerText = globalScore;
        }
        strike = 0;
    });

    socket.on('score to t2', function() {
        round++;

        $('#firstAnswer').text("________________________________________");
        $('#secondAnswer').text("________________________________________");
        $('#thirdAnswer').text("________________________________________");
        $('#fourthAnswer').text("________________________________________");
        $('#fifthAnswer').text("________________________________________");
        $('#firstScore').text("__");
        $('#secondScore').text("__");
        $('#thirdScore').text("__");
        $('#fourthScore').text("__");
        $('#fifthScore').text("__");

        if(round == 4) {

            teamTwoScore += (globalScore * 2);
            document.getElementById('teamTwoScore').innerText = teamTwoScore;
            globalScore = 0;
            document.getElementById('globalScore').innerText = globalScore;
        } else if(round == 5){

            teamTwoScore += (globalScore * 3);
            document.getElementById('teamTwoScore').innerText = teamTwoScore;
            globalScore = 0;
            document.getElementById('globalScore').innerText = globalScore;
        } else {

            teamTwoScore += globalScore;
            document.getElementById('teamTwoScore').innerText = teamTwoScore;
            globalScore = 0;
            document.getElementById('globalScore').innerText = globalScore;
        }
        strike = 0;
    });

    socket.on('update global', function() {

        if(document.getElementById('firstScore').innerText !== "__") {
            s1 = parseInt(document.getElementById('firstScore').innerText);
        }
        if(document.getElementById('secondScore').innerText !== "__") {
            s2 = parseInt(document.getElementById('secondScore').innerText);
        }
        if(document.getElementById('thirdScore').innerText !== "__") {
            s3 = parseInt(document.getElementById('thirdScore').innerText);
        }
        if(document.getElementById('fourthScore').innerText !== "__") {
            s4 = parseInt(document.getElementById('fourthScore').innerText);
        }
        if(document.getElementById('fifthScore').innerText !== "__") {
            s5 = parseInt(document.getElementById('fifthScore').innerText);
        }

        globalScore = s1 + s2 + s3 + s4 + s5;

        if((round + 1) == 4) {
            
            document.getElementById('globalScore').innerText = (globalScore * 2);
        } else if((round + 1) == 5) {

            document.getElementById('globalScore').innerText = (globalScore * 3);
        } else {

            document.getElementById('globalScore').innerText = globalScore;
        }

        s1 = 0;
        s2 = 0;
        s3 = 0;
        s4 = 0;
        s5 = 0;
    });

    socket.on('strike', function() {
        strike++;
        console.log(strike);
        if(strike == 1) {
            $('#firstStrike img').css('display', 'block');
            incorrecta.play();

            setTimeout(function(){
                $('#firstStrike img').css('display', 'none');
            }, 1000);

        } else if(strike == 2) {
            $('#firstStrike img').css('display', 'block');
            $('#secondStrike img').css('display', 'block');
            incorrecta.play();

            setTimeout(function(){
                $('#firstStrike img').css('display', 'none');
                $('#secondStrike img').css('display', 'none');
            }, 1000);
        } else if(strike >= 3) {
            $('#firstStrike img').css('display', 'block');
            $('#secondStrike img').css('display', 'block');
            $('#thirdStrike img').css('display','block');
            incorrecta.play();

            setTimeout(function(){
                $('#firstStrike img').css('display', 'none');
                $('#secondStrike img').css('display', 'none');
                $('#thirdStrike img').css('display', 'none');
            }, 1000);
        }
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