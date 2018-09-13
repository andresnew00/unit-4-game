 // var carNumber = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// for (var i = 0; i < cardNumber.length; i++);  

$(document).ready(function () {
    function gameStarts() {
        var randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        $(".goal").text(String(randomNumber));

        var cardNumber1 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        var cardNumber2 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        var cardNumber3 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        var cardNumber4 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

        $(".score").text(String(0));
        points = 0;
        gameOver = false;
    }

    //random number for "goal class"
    // $(".goal").on("click", function() {

    // });
    //make cards click functions with random values

    $("#one").on("click", function () {

        console.log(cardNumber1);
    });
    $("#two").on("click", function () {

        console.log(cardNumber2);
    });
    $("#three").on("click", function () {

        console.log(cardNumber3);
    }); $("#four").on("click", function () {

        console.log(cardNumber4);
    });
    // make function that grabs clicks values and adds them together in score

    //    if (scoreValue === randomNumber){
    //        win++;
    //        //reset game
    //    }
    //    else if (scoreValue > randomNumber){
    //        losses++;
    //        //reset game
    //    }

});