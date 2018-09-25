// There will be four crystals displayed as buttons on the page.


// The player will be shown a random number at the start of the game.

// When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
var random_result;
var lost = 0;
var win = 0;
var previous = 0;

  // Audio Setup
    // ===========
    
    // Create an audio element with JavaScript
    var audioElement = document.createElement("audio");
    audioElement.volume = 0.2;

    
    // Set it's source to the location
    // of audio file.
    audioElement.setAttribute("src", "assets/audio/Porter Ln 5.mp3");
    
    // Theme Button
    // $(".theme-button").on("click", function() {
     
    //   audioElement.play()
      
    // });
    
    
var startGame = function () {

    $(".crystals").empty();

    var images = ['https://photos.smugmug.com/Web-photos/n-fCs8Wf/i-SjgfCD6/0/f59d5ffd/S/i-SjgfCD6-S.png', 
                  'https://photos.smugmug.com/Web-photos/n-fCs8Wf/i-j4sxtXr/0/ce77a71e/S/i-j4sxtXr-S.png', 
                  'https://photos.smugmug.com/Web-photos/n-fCs8Wf/i-p9dQk7P/0/9fa0a354/S/i-p9dQk7P-S.png', 
                  'https://photos.smugmug.com/Web-photos/n-fCs8Wf/i-3H2mNL3/0/14df5a89/S/i-3H2mNL3-S.png'];
    // The random number shown at the start of the game should be between 19 - 120.
    random_result = Math.ceil(Math.random() * 102) + 18;

    $("#result").html('Random Result: ' + random_result);

    for (var i = 0; i < 4; i++) {

        var random = Math.ceil(Math.random() * 12) + 1;

        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "data-random": random
            } );

            crystal.css({
                "background-image":"url('" + images[i] + "')",
                "background-size":"cover"
            })

        $(".crystals").append(crystal);
    }

    $("#previous").html("Total Score: " + previous);

}


startGame();


$(document).on('click', ".crystal", function() {

    var num = parseInt($(this).attr('data-random'));
    
    previous += num;

    $("#previous").html("Total Score: " + previous);

    if(previous > random_result){

        lost++;
     

        $("#lost").html("Losses: " + lost);

        previous = 0;
    // The game restarts whenever the player wins or loses.
        startGame();

    }
    else if(previous === random_result){

        win++;
        audioElement.play();



        $("#win").html("Wins: " + win);

        previous = 0;
    // The game restarts whenever the player wins or loses.
        startGame();

    }
    
});

// Your game will hide this amount until the player clicks a crystal.
// When they do click one, update the player's score counter.


// The player wins if their total score matches the random number from the beginning of the game.
// The player loses if their score goes above the random number.




// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.


// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.



// Each crystal should have a random hidden value between 1 - 12.