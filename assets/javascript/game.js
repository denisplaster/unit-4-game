var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
isChrome.volume = 0.1;
    if(!isChrome){
      $('#iframeAudio').remove()
    }
  else{
     $('#playAudio').remove() //just to make sure that it will not have 2x audio in the background 
  }
    
    // Audio Setup
    // ===========
    
    // Create an audio element with JavaScript
    var audioElement = document.createElement("audio");
    // audioElement.volume = 0.8;

    
    // Set it's source to the location of audio file.
    audioElement.setAttribute("src", "assets/audio/Porter Ln 5.mp3");

var random_result;
var lost = 0;
var win = 0;
var previous = 0;  
// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
var startGame = function () {

    $(".crystals").empty();

    var images = ['https://photos.smugmug.com/Web-photos/n-fCs8Wf/i-SjgfCD6/0/f59d5ffd/S/i-SjgfCD6-S.png', 
                  'https://photos.smugmug.com/Web-photos/n-fCs8Wf/i-j4sxtXr/0/ce77a71e/S/i-j4sxtXr-S.png', 
                  'https://photos.smugmug.com/Web-photos/n-fCs8Wf/i-p9dQk7P/0/9fa0a354/S/i-p9dQk7P-S.png', 
                  'https://photos.smugmug.com/Web-photos/n-fCs8Wf/i-3H2mNL3/0/14df5a89/S/i-3H2mNL3-S.png'];
    // The random number shown at the start of the game should be between 19 - 120.
    random_result = Math.ceil(Math.random() * 102) + 18;
    // The player will be shown a random number at the start of the game.
    $("#result").html("The Magic Number is: " + random_result);
    $("#result").css({"font-size": "150%"});
    // There will be four crystals displayed as buttons on the page.
    for (var i = 0; i < 4; i++) {
    // Each crystal should have a random hidden value between 1 - 12.
        var random = Math.ceil(Math.random() * 12);
    // When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

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
          
        $( "#clue" ).click(function() {
            crystal.html(random);
          });
        
    }

    $("#previous").html("Crystals Collected: " + previous);

}

startGame();
    // When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
    $(document).on('click', ".crystal", function() {

        var num = parseInt($(this).attr('data-random'));
    // When they do click one, update the player's score counter.   
        previous += num;

        $("#previous").html("Total Crystals: " + previous);
    // The player loses if their score goes above the random number.
        if(previous > random_result){
        
            lost++;     
    // The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
            $("#lost").html("Losses: " + lost);
            $("#lost").css('color', 'red');

            previous = 0;
    // The game restarts whenever the player wins or loses.
            startGame();

        }
        else if(previous === random_result){

    // The player wins if their total score matches the random number from the beginning of the game.

            win++;
            audioElement.play();

            $("#win").html("Wins: " + win);
            $("#win").css({"font-size": "125%"});

            previous = 0;
     // The game restarts whenever the player wins or loses.
            startGame();

        }

    });














