window.onload = function() {

    switchAnswers();
    switchAnswers2();
    switchAnswers3();
    switchAnswers4();
    switchAnswers5();
}

const QA = [
    ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p9', 'p10', 'p11', 'p12', 'p13', 'p14', 'p15'],
    ['Marte', 'Batman', 'Piso', 'Sol', 'Naranja', 'Margarita', 'Barro', 'Sumo', 'Alas', 'Cepillo Dental', 'Al pastor', 'Café', 'Reggaetón', 'González', 'Cola'],
    ['Venus','Superman', 'Bajo la mesa', 'Luna', 'Manzana', 'Paloma', 'Piedra', 'Box', 'Pico', 'Boletos', 'Suadero', 'Té', 'Bachata', 'Pérez', 'Naranja'],
    ['Júpiter', 'Drácula', 'Zapato', 'Estrellas', 'Melón','Muppet', 'Mármol', 'Lucha libre', 'Patas / Garras', 'Llaves', 'De canasta', 'Sopa instantánea', 'Mambo', 'Hernández', 'Manzana'],
    ['Saturno', 'El Santo', 'Árbol', 'Luz eléctrica', 'Ciruela', 'Vampiro', 'Yeso', 'Fútbol americano', 'Cabeza', 'Dinero', 'Campechano', 'Un baño', 'Merengue', 'López', 'Limón'],
    ['Mercurio', 'Caperucita roja', 'Silla', 'Reflector', 'Toronja', 'Tequila Sunrise', 'Metal', 'Levantaiento de pesas', 'Plumas', 'Pasta dental', 'Bistec', 'Un biberón', 'Cumbia', 'Flores', 'Uva'],
];
const scores = [
    ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p9', 'p10', 'p11', 'p12', 'p13', 'p14', 'p15'],
    ['41', '46', '26', '36', '53', '26', '37', '39', '50',  '20',  '33',  '29',  '55',  '44',  '43'],
    ['15', '28', '16', '22', '21', '15', '18', '19', '24',   '9',  '30',  '26',  '15',  '26',  '26'],
    ['13', '10',  '8', '14', '14', '11', '15', '10', '13',   '8',  '16',  '19',  '12',  '19',  '20'],
    ['11',  '4',  '7',  '9',  '4', '10', '12',  '9',  '7',   '7',   '8',  '13',   '9',   '5',   '7'],
    ['10',  '4',  '5',  '5',  '3',  '6', '10',  '5',  '6',   '5',   '6',  '10',   '6',   '5',   '4'],
];

var answers = [];
var answers2 = [];
var answers3= [];
var answers4 = [];
var answers5 = [];

var scores1 = [];
var scores2 = [];
var scores3 = [];
var scores4 = [];
var scores5 = [];

function switchAnswers() {

    answers = [];
    var question = document.getElementById('firstQuestion').value;

    for(var i = 0; i < QA[0].length; i++) {
        if(QA[0][i] == question) {
            for(var j = 1; j < QA.length; j++) {

                answers.push(QA[j][i]);
            }
        }
    }

    for(var i = 0; i < answers.length; i++) {

        document.getElementById('1-r' + (i+1) + '-1').innerText = answers[i];
        document.getElementById('1-r' + (i+1) + '-1').value = answers[i];
        document.getElementById('1-r' + (i+1) + '-2').innerText = answers[i];
        document.getElementById('1-r' + (i+1) + '-2').value = answers[i];
    }
    console.log(answers);
}
function switchAnswers2() {

    answers2 = [];
    var question = document.getElementById('secondQuestion').value;

    for(var i = 0; i < QA[0].length; i++) {
        if(QA[0][i] == question) {
            for(var j = 1; j < QA.length; j++) {

                answers2.push(QA[j][i]);
            }
        }
    }

    for(var i = 0; i < answers2.length; i++) {

        document.getElementById('2-r' + (i+1) + '-1').innerText = answers2[i];
        document.getElementById('2-r' + (i+1) + '-1').value = answers2[i];
        document.getElementById('2-r' + (i+1) + '-2').innerText = answers2[i];
        document.getElementById('2-r' + (i+1) + '-2').value = answers2[i];
    }
}
function switchAnswers3() {

    answers3 = [];
    var question = document.getElementById('thirdQuestion').value;

    for(var i = 0; i < QA[0].length; i++) {
        if(QA[0][i] == question) {
            for(var j = 1; j < QA.length; j++) {

                answers3.push(QA[j][i]);
            }
        }
    }

    for(var i = 0; i < answers3.length; i++) {

        document.getElementById('3-r' + (i+1) + '-1').innerText = answers3[i];
        document.getElementById('3-r' + (i+1) + '-1').value = answers3[i];
        document.getElementById('3-r' + (i+1) + '-2').innerText = answers3[i];
        document.getElementById('3-r' + (i+1) + '-2').value = answers3[i];
    }
}
function switchAnswers4() {

    answers4 = [];
    var question = document.getElementById('fourthQuestion').value;

    for(var i = 0; i < QA[0].length; i++) {
        if(QA[0][i] == question) {
            for(var j = 1; j < QA.length; j++) {

                answers4.push(QA[j][i]);
            }
        }
    }

    for(var i = 0; i < answers4.length; i++) {

        document.getElementById('4-r' + (i+1) + '-1').innerText = answers4[i];
        document.getElementById('4-r' + (i+1) + '-1').value = answers4[i];
        document.getElementById('4-r' + (i+1) + '-2').innerText = answers4[i];
        document.getElementById('4-r' + (i+1) + '-2').value = answers4[i];
    }
}
function switchAnswers5() {

    answers5 = [];
    var question = document.getElementById('fifthQuestion').value;

    for(var i = 0; i < QA[0].length; i++) {
        if(QA[0][i] == question) {
            for(var j = 1; j < QA.length; j++) {

                answers5.push(QA[j][i]);
            }
        }
    }

    for(var i = 0; i < answers5.length; i++) {

        document.getElementById('5-r' + (i+1) + '-1').innerText = answers5[i];
        document.getElementById('5-r' + (i+1) + '-1').value = answers5[i];
        document.getElementById('5-r' + (i+1) + '-2').innerText = answers5[i];
        document.getElementById('5-r' + (i+1) + '-2').value = answers5[i];
    }
}

function getScores(answerIndex) {

    var question = document.getElementById('questions').value;
    
    for(var i = 0; i < scores[0].length; i++) {
        if(scores[0][i] == question) {

            return scores[answerIndex][i];
        }
    }
}

function relateScores(questionValue) {
    toSend = [];
    scores1 = [];

    for(var i = 0; i < scores[0].length; i++) {

        if(scores[0][i] == questionValue) {

            for(j = 1; j < scores.length; j++) {

                scores1.push(scores[j][i]);
            }
        }
    }

    var pOneAnswer = $('#1-answer-1').val();
    var pTwoAnswer = $('#1-answer-2').val();
    console.log(pOneAnswer);
    var toSend = [];

    if(pOneAnswer == '') {

        toSend.push('0');
    } else {

        for(var i = 0; i < answers.length; i++) {

            if(answers[i] == pOneAnswer) {
    
                toSend.push(scores1[i]);
            }
        }    
    }

    if(pTwoAnswer == '') {

        toSend.push('0');
    } else {

        for(var i = 0; i < answers.length; i++) {

            if(answers[i] == pTwoAnswer) {
    
                toSend.push(scores1[i]);
            }
        }
    }
    return toSend;
}

function relateScores2(questionValue) {
    toSend = [];
    scores2 = [];

    for(var i = 0; i < scores[0].length; i++) {
    
            if(scores[0][i] == questionValue) {
    
                for(j = 1; j < scores.length; j++) {
    
                    scores2.push(scores[j][i]);
                }
            }
        }
    
    var pOneAnswer = $('#2-answer-1').val();
    var pTwoAnswer = $('#2-answer-2').val();

    if(pOneAnswer == '') {

        toSend.push('0');
    } else {

        for(var i = 0; i < answers2.length; i++) {

            if(answers2[i] == pOneAnswer) {
    
                toSend.push(scores2[i]);
            }
        }
    }

    if(pTwoAnswer == '0') {

        toSend.push('0');
    } else {

        for(var i = 0; i < answers2.length; i++) {

            if(answers2[i] == pTwoAnswer) {
    
                toSend.push(scores2[i]);
            }
        }
    }
    return toSend;
}

function relateScores3(questionValue) {
    toSend = [];
    scores3 = [];

    for(var i = 0; i < scores[0].length; i++) {
    
            if(scores[0][i] == questionValue) {
    
                for(j = 1; j < scores.length; j++) {
    
                    scores3.push(scores[j][i]);
                }
            }
        }
    
    var pOneAnswer = $('#3-answer-1').val();
    var pTwoAnswer = $('#3-answer-2').val();

    if(pOneAnswer == '') {

        toSend.push('0');
    } else {

        for(var i = 0; i < answers3.length; i++) {

            if(answers3[i] == pOneAnswer) {
    
                toSend.push(scores3[i]);
            }
        }
    }

    if(pTwoAnswer == '') {
        toSend.push('0');
    } else {

        for(var i = 0; i < answers3.length; i++) {

            if(answers3[i] == pTwoAnswer) {
    
                toSend.push(scores3[i]);
            }
        }
    }
    return toSend;
}

function relateScores4(questionValue) {
    toSend = [];
    scores4 = [];

    for(var i = 0; i < scores[0].length; i++) {
    
            if(scores[0][i] == questionValue) {
    
                for(j = 1; j < scores.length; j++) {
    
                    scores4.push(scores[j][i]);
                }
            }
        }
    
    var pOneAnswer = $('#4-answer-1').val();
    var pTwoAnswer = $('#4-answer-2').val();

    if(pOneAnswer == '') {

        toSend.push('0');
    } else {

        for(var i = 0; i < answers4.length; i++) {

            if(answers4[i] == pOneAnswer) {
    
                toSend.push(scores4[i]);
            }
        }
    }

    if(pTwoAnswer == '') {

        toSend.push('0');
    } else {

        for(var i = 0; i < answers4.length; i++) {

            if(answers4[i] == pTwoAnswer) {
    
                toSend.push(scores4[i]);
            }
        }
    }
    return toSend;
}

function relateScores5(questionValue) {
    toSend = [];
    scores5 = [];

    for(var i = 0; i < scores[0].length; i++) {
    
            if(scores[0][i] == questionValue) {
    
                for(j = 1; j < scores.length; j++) {
    
                    scores5.push(scores[j][i]);
                }
            }
        }
    
    var pOneAnswer = $('#5-answer-1').val();
    var pTwoAnswer = $('#5-answer-2').val();

    if(pOneAnswer == '') {

        toSend.push('0');
    } else {

        for(var i = 0; i < answers5.length; i++) {

            if(answers5[i] == pOneAnswer) {
    
                toSend.push(scores5[i]);
            }
        }
    }

    if(pTwoAnswer == ''){

        toSend.push('0');
    } else {
        
        for(var i = 0; i < answers5.length; i++) {

            if(answers5[i] == pTwoAnswer) {
    
                toSend.push(scores5[i]);
            }
        }
    }
    return toSend;
}



$(function () {
    var socket = io();
    
    $('#peopleNames').click(function() {
        socket.emit('person one', $('#personOne').val());
        socket.emit('person two', $('#personTwo').val());
        return false;
    });

    $('#a1').click(function() {
        socket.emit('1-answer-1', $('#1-answer-1').val());
        socket.emit('1-answer-2', $('#1-answer-2').val());
        
        setTimeout(function() {

            var scoresArray = relateScores($('#firstQuestion').val());
            console.log(scoresArray);
            socket.emit('1-scores-1', scoresArray[0]);
            socket.emit('1-scores-2', scoresArray[1]);
            socket.emit('update score');
        }, 3000);
        return false;
    });

    $('#a2').click(function() {
        socket.emit('2-answer-1', $('#2-answer-1').val());
        socket.emit('2-answer-2', $('#2-answer-2').val());

        setTimeout(function() {

            var scoresArray = relateScores2($('#secondQuestion').val());
            socket.emit('2-scores-1', scoresArray[0]);
            socket.emit('2-scores-2', scoresArray[1]);
            socket.emit('update score');
        }, 3000);
        return false;
    });

    $('#a3').click(function() {
        socket.emit('3-answer-1', $('#3-answer-1').val());
        socket.emit('3-answer-2', $('#3-answer-2').val());

        setTimeout(function(){

            var scoresArray = relateScores3($('#thirdQuestion').val());
            socket.emit('3-scores-1', scoresArray[0]);
            socket.emit('3-scores-2', scoresArray[1]);
            socket.emit('update score');
        }, 3000);
        return false;
    });

    $('#a4').click(function() {
        socket.emit('4-answer-1', $('#4-answer-1').val());
        socket.emit('4-answer-2', $('#4-answer-2').val());

        setTimeout(function() {

            var scoresArray = relateScores4($('#fourthQuestion').val());
            socket.emit('4-scores-1', scoresArray[0]);
            socket.emit('4-scores-2', scoresArray[1]);
            socket.emit('update score');
        }, 3000);
        return false;
    });

    $('#a5').click(function() {
        socket.emit('5-answer-1', $('#5-answer-1').val());
        socket.emit('5-answer-2', $('#5-answer-2').val());

        setTimeout(function() {

            var scoresArray = relateScores5($('#fifthQuestion').val());
            socket.emit('5-scores-1', scoresArray[0]);
            socket.emit('5-scores-2', scoresArray[1]);
            socket.emit('update score');
        }, 3000);
        return false;
    });

    $('#repetida').click(function() {

        socket.emit('respuesta repetida');
    });
});