//  Need number randomizer + jquery to project


// update function
// reset function (start, whenever win or lose occurs,
// show new random number and have four hidden values on crystals. user score and score counter reset to 0)

// variables for number of games the player wins and loses.
var numberDisplay = '';
var totalScore = 0;
var wins = 0;
var losses = 0;
var win = false;
var lose = false;
var gameStart = false;
var crystal_1 = Math.floor(Math.random() * 13);
var crystal_2 = Math.floor(Math.random() * 13);
var crystal_3 = Math.floor(Math.random() * 13);
var crystal_4 = Math.floor(Math.random() * 13);
$('.crystal-1 button').val(crystal_1)
$('.crystal-2 button').val(crystal_2)
$('.crystal-3 button').val(crystal_3)
$('.crystal-4 button').val(crystal_4)
// random number runs from 19-120. Each crystal should have a random hidden value between 1-12. also need to randomize this. 
var randomNm = Math.floor(Math.random() * 121);
// show player random number at start of game.

function reset() {
    numberDisplay = '';
    totalScore = 0;
    win = false;
    lose = false;
    gameStart = false;
    crystal_1 = Math.floor(Math.random() * 13);
    crystal_2 = Math.floor(Math.random() * 13);
    crystal_3 = Math.floor(Math.random() * 13);
    crystal_4 = Math.floor(Math.random() * 13);
    $('.crystal-1 button').val(crystal_1)
    $('.crystal-2 button').val(crystal_2)
    $('.crystal-3 button').val(crystal_3)
    $('.crystal-4 button').val(crystal_4)
    randomNm = Math.floor(Math.random() * 121);
    // show player random number at start of game.
    $('.number-generated h1').text(randomNm);
    var numberDisplay = randomNm;
    $('.score').text(`Your total score is: 000`);
    console.log($('.crystal-1 button'));
    console.log(crystal_1);
    console.log('------------------');
    console.log(randomNm);
    console.log(numberDisplay);
    return randomNm;
}

// event listener to button click on crystals. use this
$(".btn-clicked button").on("click", function () {
    if (!gameStart) {
        gameStart = true;
    }

    if ((win == false) && (lose == false))
        totalScore += parseInt(this.value);
    console.log(this);
    console.log(totalScore);
    console.log(randomNm);
    update();

    // upon clicking add a specific amount of points to the players total score
    // This amount should be hidden until player clicks crystal. Display: none to display: inhertit
})

function update() {
    $('.score').text(`Your total score is: ${totalScore}`);

    //check for win or lose
    winner();
    loser();
}

// player win function (if their score matches the random number)  
function winner() {
    if (totalScore === randomNm) {
        win = true;
        wins++;
        alert("WINNER WINNER CHICKEN DINNER!");
        $('.total-score-section').append('<div class="restart"><button>Restart Game</button></div>');
        $('.wins').text(`Wins: ${wins}`);
        $(".restart button").on("click", function () {
            reset();
            $('.restart').remove();
        });
    }
}
// lose function (if they go above the random number)
function loser() {
    if (totalScore > randomNm) {
        lose = true;
        losses++;
        alert("YOU LOSE");
        $('.total-score-section').append('<div class="restart"><button>Restart Game</button></div>')
        $('.losses').text(`Losses: ${losses}`);
        $(".restart button").on("click", function () {
            reset();
            $('.restart').remove();
        });

    }
}
