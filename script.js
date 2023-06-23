const questions1 = [
    "Feeling or showing pleasure or contentment",
    "Possessing or exhibiting courage or courageous endurance",
    "Easily understood or done; presenting no difficulty",
    "Having or showing a friendly, generous, or warm-hearted nature",
    "Of a size that is less than normal or usual",
    "Emitting or reflecting light; shining",
    "Moving fast or doing something in a short time",
    "Causing laughter or amusement; humorous",
    "Making very little noise; almost silent",
    "In accordance with fact or reality; accurate or exact"
];

const leftAnswers1 = [
    "H",
    "BR",
    "SI",
    "K",
    "SM",
    "BR",
    "Q",
    "FU",
    "QU",
    "T"
];

const middleAnswers1 = [
    "AP",
    "AV",
    "MP",
    "IN",
    "AL",
    "IG",
    "UIC",
    "NN",
    "IE",
    "RU"
];

const rightAnswers1 = [
    "PY",
    "E",
    "LE",
    "D",
    "L",
    "HT",
    "K",
    "Y",
    "T",
    "E"
];

const questions2 = [
    "To inspect or scrutinize closely",
    "Logically connected; consistent and understandable",
    "Sufficient or abundant; plenty of something",
    "To occupy or involve oneself; participate actively",
    "Arouse curiosity or interest by unusual or fascinating qualities",
    "Showing care and conscientiousness in one's work or duties",
    "Open to more than one interpretation; unclear or vague",
    "Intense and eager enjoyment, interest, or approval",
    "To understand or grasp the meaning or nature of something",
    "The most favorable or advantageous point, level, or amount"
];

const leftAnswers2 = [
    "EXA",
    "CO",
    "A",
    "EN",
    "INT",
    "DI",
    "AMB",
    "ENTH",
    "COMP",
    "OP"
];

const middleAnswers2 = [
    "MIN",
    "HER",
    "MP",
    "GAG",
    "RI",
    "LIG",
    "IGU",
    "USIA",
    "REH",
    "TIM"
];

const rightAnswers2 = [
    "E",
    "ENT",
    "LE",
    "E",
    "GUE",
    "ENT",
    "OUS",
    "SM",
    "END",
    "UM"
];

const questions3 = [
    "To agree or be of the same opinion",
    "Involving many carefully arranged parts or details; detailed or complex",
    "To cause someone to feel completely baffled or puzzled",
    "To make less severe, serious, or painful; alleviate",
    "Curious or inquiring, especially excessively so",
    "Admirably purposeful, determined, and unwavering",
    "Having no particular interest or sympathy; unconcerned",
    "Dealing with things sensibly and realistically in a way that is based on practical considerations",
    "To spread or disperse widely, especially information or knowledge",
    "To serve as a typical example or representative of something"
];

const leftAnswers3 = [
    "C",
    "E",
    "P",
    "M",
    "I",
    "R",
    "I",
    "P",
    "D",
    "E"
];

const middleAnswers3 = [
    "ON",
    "LA",
    "ER",
    "IT",
    "NQ",
    "ES",
    "DI",
    "RA",
    "SE",
    "EX"
];

const rightAnswers3 = [
    "CUR",
    "TE",
    "EX",
    "TE",
    "RE",
    "VE",
    "FF",
    "IC",
    "TE",
    "FY"
];
const questions4 = [
    "Fluent or persuasive in speaking or writing",
    "Calm, peaceful, and untroubled",
    "The ability to make good judgments and quick decisions",
    "Producing many works, results, or offspring",
    "Holding firmly; persistent in maintaining or adhering to something",
    "Showing a selfless concern for the well-being of others; unselfish",
    "Able to withstand or recover quickly from difficult conditions",
    "In its original condition; unspoiled or untouched",
    "A person or thing that is mysterious, puzzling, or difficult to understand",
    "Conformity to facts; accuracy; truthfulness"
];

const leftAnswers4 = [
    "E",
    "S",
    "A",
    "P",
    "T",
    "A",
    "R",
    "P",
    "E",
    "V"
];

const middleAnswers4 = [
    "LO",
    "ER",
    "CU",
    "RO",
    "NA",
    "LT",
    "SI",
    "RI",
    "NI",
    "ER"
];

const rightAnswers4 = [
    "QUENT",
    "NE",
    "MEN",
    "IC",
    "IOUS",
    "IC",
    "NT",
    "NE",
    "MA",
    "Y"
];

const questions5 = [
    "A moment of sudden revelation or insight",
    "Present, appearing, or found everywhere",
    "A confusing and difficult problem or question",
    "Complaining in a whining manner; peevish",
    "Having or showing keen mental discernment and good judgment; wise",
    "Too great or extreme to be expressed or described in words",
    "Experienced or felt by empathy with or imaginary participation in the experiences of another person",
    "A feeling of pensive sadness, typically with no obvious cause",
    "Attractive and impressive through being richly colorful or sumptuous",
    "Characterized by vulgar or pretentious display; designed to impress or attract notice"
];

const leftAnswers5 = [
    "E",
    "U",
    "C",
    "Q",
    "S",
    "I",
    "V",
    "M",
    "R",
    "O"
];

const middleAnswers5 = [
    "PI",
    "BI",
    "NU",
    "ER",
    "AG",
    "FF",
    "IC",
    "EL",
    "SP",
    "ST"
];

const rightAnswers5 = [
    "PHANY",
    "OUS",
    "M",
    "S",
    "IOUS",
    "BLE",
    "US",
    "LY",
    "NT",
    "US"
];


var selectedNumbers = [];
var question = document.getElementById('question');
var leftPart = document.getElementById('left-part');
var givenPart = document.getElementById('given-part');
var rightPart = document.getElementById('right-part');
var hintButton = document.getElementById('hint-button');
var hintText = document.getElementById('hint-text');
var hintsRemaining = document.getElementById('hints-remaining');
var levelText = document.getElementById('level');
var livesText = document.getElementById('lives');
var scoreText = document.getElementById('score');
var congratulations = document.getElementsByClassName('congratulations');
var gameover = document.getElementsByClassName('gameover');
var app = document.getElementsByClassName('app');
var congratulationsScore = document.getElementById('congratulations-score');
var gameoverScore = document.getElementById('gameover-score');
var nextButton = document.getElementById('next');
// var congratulationsDisplay = document.getElementById('congratulations-scoreDisplay');
// var gameoverDisplay = document.getElementById('gameover-scoreDisplay');
let hints = 3;
let currentLevel = 1;
let lives = 3;
let score = 0;


// export {score};

document.getElementById('next').disabled = true;

// congratulationsDisplay.textContent = "Your score is "+score;
// gameoverDisplay.textContent = "Your score is "+score;

var currentIndex;

hintsRemaining.textContent = "Hints Remaining: "+hints;
levelText.textContent = "Level : "+currentLevel+"/20";


function getRandomUniqueNumber(min, max) {
    if(selectedNumbers.length === 4){
        for(let i=0;i<4;i++){
            selectedNumbers.pop();
        }
    }
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  
    if (selectedNumbers.includes(randomNumber)) {
      // Number already selected, generate a new one recursively
      return getRandomUniqueNumber(min, max);
    }
  
    // Add the number to the selectedNumbers array
    selectedNumbers.push(randomNumber);
  
    return randomNumber;
}


function nextLevel(){
    if(currentLevel === 1){
        hideElements(app);
        showElements(congratulations);
        congratulationsScore.textContent = "Your Score is "+score;
    }
    // if(checkAnswervar === false){
    //     alert('Complete the current level first');
    // }
    currentLevel++;
    playGame();
}

function handleLives(){
    if(lives === 0){
        hideElements(app);
        showElements(gameover);
        gameoverScore.textContent = "Your Score is "+score;
    }
}

function getRandomQuestion(elements) {
    currentIndex = getRandomUniqueNumber(0,9);
    return elements[currentIndex];
}

// if(hintButtonPressed === true){
//     document.getElementById('hint-button').disable = true;
// }

function giveHint(){
    hints--;
    hintsRemaining.textContent = "Hints Remaining: "+hints;
    if(currentLevel<=4){
        hintText.textContent = "The number of letters in the left part is " + leftAnswers1[currentIndex].length + ". \nThe number of letters in the right part is " + rightAnswers1[currentIndex].length+ ".";
    }
    else if(currentLevel<=8){
        hintText.textContent = "The number of letters in the left part is " + leftAnswers2[currentIndex].length + ". \nThe number of letters in the right part is " + rightAnswers2[currentIndex].length+ ".";
    }
    else if(currentLevel<=12){
        hintText.textContent = "The number of letters in the left part is " + leftAnswers3[currentIndex].length + ". \nThe number of letters in the right part is " + rightAnswers3[currentIndex].length+ ".";
    }
    else if(currentLevel<=16){
        hintText.textContent = "The number of letters in the left part is " + leftAnswers4[currentIndex].length + ". \nThe number of letters in the right part is " + rightAnswers4[currentIndex].length+ ".";
    }
    else{
        hintText.textContent = "The number of letters in the left part is " + leftAnswers5[currentIndex].length + ". \nThe number of letters in the right part is " + rightAnswers5[currentIndex].length+ ".";
    }
    hintButton.disabled = true;
}

function showElements(elements){
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.add('show');
    }
}

function hideElements(elements){
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.add('hide');
    }
}

function playGame(){
    if(currentLevel<=4){
        question.textContent = getRandomQuestion(questions1);
        givenPart.textContent = middleAnswers1[currentIndex];
    }
    else if(currentLevel<=8){
        question.textContent = getRandomQuestion(questions2);
        givenPart.textContent = middleAnswers2[currentIndex];
    }
    else if(currentLevel<=12){
        question.textContent = getRandomQuestion(questions3);
        givenPart.textContent = middleAnswers3[currentIndex];
    }
    else if(currentLevel<=16){
        question.textContent = getRandomQuestion(questions4);
        givenPart.textContent = middleAnswers4[currentIndex];
    }
    else{
        question.textContent = getRandomQuestion(questions5);
        givenPart.textContent = middleAnswers5[currentIndex];
    }
    hintText.textContent = "";
    livesText.textContent = lives+" Lives remaining";
    document.getElementById('report').textContent = "";
    scoreText.textContent = "Score: "+score;
    hintsRemaining.textContent = "Hints Remaining: "+hints;
    if(hints === 0){
        document.getElementById('hint-button').disabled = true;
    }
    else{
        hintButton.disabled = false;
    }
    levelText.textContent = "Level : "+currentLevel+"/20";
    leftPart.value = "";
    rightPart.value = "";
    nextButton.disabled = true;
}

function checkAnswer(){
    if(currentLevel<=4){
        if(leftAnswers1[currentIndex] === leftPart.value.toUpperCase() && rightAnswers1[currentIndex] === rightPart.value.toUpperCase()){
            document.getElementById('report').textContent = "Congratulations, you are correct!!!";
            document.getElementById('next').disabled = false;
            score+=50;
            scoreText.textContent = "Score: "+score;
        }
        else if(leftAnswers1[currentIndex] === leftPart.value.toUpperCase()){
            document.getElementById('report').textContent = "Oh sorry, only your left part is correct";
            lives--;
            livesText.textContent = lives+" Lives remaining";
            handleLives();
        }
        else if(rightAnswers1[currentIndex] === rightPart.value.toUpperCase()){
            document.getElementById('report').textContent = "Oh sorry, only your right part is correct";
            lives--;
            livesText.textContent = lives+" Lives remaining";
            handleLives();
        }
        else{
            document.getElementById('report').textContent = "Oh sorry, both left and right parts are wrong";
            lives--;
            livesText.textContent = lives+" Lives remaining";
            handleLives();
        }
    }
    else if(currentLevel<=8){
        if(leftAnswers2[currentIndex] === leftPart.value.toUpperCase() && rightAnswers2[currentIndex] === rightPart.value.toUpperCase()){
            document.getElementById('report').textContent = "Congratulations, you are correct!!!";
            document.getElementById('next').disabled = false;
            score+=100;
            scoreText.textContent = "Score: "+score;
        }
        else if(leftAnswers2[currentIndex] === leftPart.value.toUpperCase()){
            document.getElementById('report').textContent = "Oh sorry, only your left part is correct";
            lives--;
            livesText.textContent = lives+" Lives remaining";
            handleLives();
        }
        else if(rightAnswers2[currentIndex] === rightPart.value.toUpperCase()){
            document.getElementById('report').textContent = "Oh sorry, only your right part is correct";
            lives--;
            livesText.textContent = lives+" Lives remaining";
            handleLives();
        }
        else{
            document.getElementById('report').textContent = "Oh sorry, both left and right parts are wrong";
            lives--;
            livesText.textContent = lives+" Lives remaining";
            handleLives();
        }
    }
    else if(currentLevel<=12){
        if(leftAnswers3[currentIndex] === leftPart.value.toUpperCase() && rightAnswers3[currentIndex] === rightPart.value.toUpperCase()){
            document.getElementById('report').textContent = "Congratulations, you are correct!!!";
            document.getElementById('next').disabled = false;
            score+=150;
            scoreText.textContent = "Score: "+score;
        }
        else if(leftAnswers3[currentIndex] === leftPart.value.toUpperCase()){
            document.getElementById('report').textContent = "Oh sorry, only your left part is correct";
            lives--;
            livesText.textContent = lives+" Lives remaining";
            handleLives();
        }
        else if(rightAnswers3[currentIndex] === rightPart.value.toUpperCase()){
            document.getElementById('report').textContent = "Oh sorry, only your right part is correct";
            lives--;
            livesText.textContent = lives+" Lives remaining";
            handleLives();
        }
        else{
            document.getElementById('report').textContent = "Oh sorry, both left and right parts are wrong";
            lives--;
            livesText.textContent = lives+" Lives remaining";
            handleLives();
        }
    }
    else if(currentLevel<=16){
        if(leftAnswers4[currentIndex] === leftPart.value.toUpperCase() && rightAnswers4[currentIndex] === rightPart.value.toUpperCase()){
            document.getElementById('report').textContent = "Congratulations, you are correct!!!";
            document.getElementById('next').disabled = false;
            score+=200;
            scoreText.textContent = "Score: "+score;
        }
        else if(leftAnswers4[currentIndex] === leftPart.value.toUpperCase()){
            document.getElementById('report').textContent = "Oh sorry, only your left part is correct";
            lives--;
            livesText.textContent = lives+" Lives remaining";
            handleLives();
        }
        else if(rightAnswers4[currentIndex] === rightPart.value.toUpperCase()){
            document.getElementById('report').textContent = "Oh sorry, only your right part is correct";
            lives--;
            livesText.textContent = lives+" Lives remaining";
            handleLives();
        }
        else{
            document.getElementById('report').textContent = "Oh sorry, both left and right parts are wrong";
            lives--;
            livesText.textContent = lives+" Lives remaining";
            handleLives();
        }
    }
    else{
        if(leftAnswers5[currentIndex] === leftPart.value.toUpperCase() && rightAnswers5[currentIndex] === rightPart.value.toUpperCase()){
            document.getElementById('report').textContent = "Congratulations, you are correct!!!";
            document.getElementById('next').disabled = false;
            score+=250;
            scoreText.textContent = "Score: "+score;
        }
        else if(leftAnswers5[currentIndex] === leftPart.value.toUpperCase()){
            document.getElementById('report').textContent = "Oh sorry, only your left part is correct";
            lives--;
            livesText.textContent = lives+" Lives remaining";
            handleLives();
        }
        else if(rightAnswers5[currentIndex] === rightPart.value.toUpperCase()){
            document.getElementById('report').textContent = "Oh sorry, only your right part is correct";
            lives--;
            livesText.textContent = lives+" Lives remaining";
            handleLives();
        }
        else{
            document.getElementById('report').textContent = "Oh sorry, both left and right parts are wrong";
            lives--;
            livesText.textContent = lives+" Lives remaining";
            handleLives();
        }
    }
}


playGame();
