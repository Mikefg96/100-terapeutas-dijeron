window.onload = function() {

    switchAnswers();
    console.log(QA[0][1])
}

const QA = [
    ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p9', 'p10', 'p11', 'p12', 'p13', 'p14', 'p15'],
    ['Húmero', 'Glenohumeral', 'Compresa húmedo caliente', 'Cuádriceps', 'Motor ocular común', 'Despolarización', 'Jobe', 'Bastón', 'Conminuta', 'Choque de talón', 'Punción seca', 'TENS', 'Ruptura ligamento cruzado anterior (LCA)', 'Evento cerebrovascular (EVC)', 'Espina bífida'],
    ['Tibia', 'Sacroilíaca', 'Electroterapia', 'Glúteos', 'Trigémino', 'Repolarización', 'Brazo caído', 'Muletas', 'Expuesta', 'Apoyo final', 'Jones', 'Interferencial', 'Meniscopatia', 'Parálisis cerebral (PC)', 'Mielomeningocele'],
    ['Peroné', 'Rodilla', 'Frío', 'Abdominales', 'Vago', 'Reposo', 'Rascado de appley', 'Andador', 'Oblicua', 'Balanceo', 'Compresión isquémica', 'Rusa', 'Luxación rotula', 'Traumatismo craneoencefálico (TCE)', 'Hidrocefalia'],
    ['Costillas', 'Metacarpofalángica', 'Ultrasonido', 'Paravertebrales', 'Facial', 'Hiperpolarización', 'Neer', 'Muleta canadiense', 'Tallo verde', 'Oscilación', 'Cyriax', 'Galvánica', 'Gonartrosis', 'Lesión medular', 'Enfermedad desmielinizante'],
    ['Radio', 'Tibioastragalina', 'Láser terapéutico', 'Isquiotibiales', 'Glosofaríngeo', 'Umbral', 'Gerber', 'Férula', 'Espiral', 'Pre-balanceo', 'Masoterapia', 'Diadinámicas', 'Condromalacia', 'Esclerosis múltiple', 'Anencefalia']
];
const scores = [
    ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p9', 'p10', 'p11', 'p12', 'p13', 'p14', 'p15'],
    ['46', '31', '40', '31', '24', '30', '22', '47', '24', '30','41', '26', '26', '45', '43'],
    ['22', '26', '26', '20', '20', '20', '20', '25', '19', '22','17', '19', '20', '22', '21'],
    ['10', '20', '10', '15', '18', '18', '19', '9', '16', '18','10', '16', '17', '10', '12'],
    ['5', '5', '6', '10', '13', '10', '15', '3', '14', '10','9', '13', '13', '7', '6'],
    ['3', '4', '4', '10', '11', '8', '10', '2', '13', '6','9', '12', '10', '2', '4'],
];
var answers = [];

function switchAnswers() {

    answers = [];
    var question = document.getElementById('questions').value;

    for(var i = 0; i < QA[0].length; i++) {
        if(QA[0][i] == question) {
            for(var j = 1; j < QA.length; j++) {

                answers.push(QA[j][i]);
            }
        }
    }

    for(var i = 0; i < answers.length; i++) {

        document.getElementById('r' + (i+1)).innerText = answers[i];
        document.getElementById('r' + (i+1)).value = answers[i];
    }
    console.log(answers);
}

function getScores(answerIndex) {

    var question = document.getElementById('questions').value;
    
    for(var i = 0; i < scores[0].length; i++) {
        if(scores[0][i] == question) {

            return scores[answerIndex][i];
        }
    }
}

$(function () {
    var socket = io();
    
    $('#teamNames').click(function() {
        socket.emit('team one', $('#teamOne').val());
        socket.emit('team two', $('#teamTwo').val());
        return false;
    });

    $('#r1').click(function() {
        socket.emit('first answer', $('#r1').val());
        socket.emit('first score', getScores(1));
        socket.emit('update global');
        return false;
    });
    
    $('#r2').click(function(){
        socket.emit('second answer', $('#r2').val());
        socket.emit('second score', getScores(2));
        socket.emit('update global');
        return false;
    });
    
    $('#r3').click(function(){
        socket.emit('third answer', $('#r3').val());
        socket.emit('third score', getScores(3));
        socket.emit('update global');
        return false;
    });

    $('#r4').click(function(){
        socket.emit('fourth answer', $('#r4').val());
        socket.emit('fourth score', getScores(4));
        socket.emit('update global');
        return false;
    });
    
    $('#r5').click(function(){
        socket.emit('fifth answer', $('#r5').val());
        socket.emit('fifth score', getScores(5));
        socket.emit('update global');
        return false;
    });

    $('#scoreOne').click(function() {

        socket.emit('score to t1');
        return false;
    });

    $('#scoreTwo').click(function() {

        socket.emit('score to t2');
        return false;
    });

    $('#strikes').click(function() {

        socket.emit('strike');
        return false;
    });
});