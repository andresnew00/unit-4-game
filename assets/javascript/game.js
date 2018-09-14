
$(document).ready(function () {

    var points = 0;
    var randomNumber = 0;
    var gameOver = true;
    var wins = 0;
    var losses = 0;

    function gameStarts() {
        var randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        $(".goal").html(randomNumber); //try .text didnt work...

        var cardNumber1 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        var cardNumber2 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        var cardNumber3 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        var cardNumber4 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

        $(".score").text(String(0)); //found "string" online and seem to work for them but not here (what is it?)
        points = 0;
        gameOver = false;
    }

    if (gameOver = true) {
        gameStarts();
    }

    function scoreCheck() {
        if (points > randomNumber) {
            losses++;
            alert("TOO BAD!");
            gameOver = true;
        }
        else if (points < randomNumber) {
            wins++;
            alert("GOOD JOB!");
            gameOver = true;
        }

    $("#one").on("click", function () {
        points = points + cardNumber1;
        $(".score").text(points);
        scoreCheck();
    });
    $("#two").on("click", function () {
            points = points + cardNumber2;
            $(".score").text(points);
            scoreCheck();
        });
    $("#three").on("click", function () {
                points = points + cardNumber3;
                $(".score").text(points);
                scoreCheck();
            });
    $("#four").on("click", function () {
                    points = points + cardNumber4;
                    $(".score").text(points);
                    scoreCheck();
                });


});