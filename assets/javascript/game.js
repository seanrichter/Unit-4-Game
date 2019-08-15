

$(document).ready(function() {

    
    //assign values to variables
    var targetNumber = Math.floor(Math.random() * 101) + 19; // Generate random number between 19-120
    var crystals = $("#crystals"); 
    var counter = 0; 
    var wins = 0; 
    var loses = 0
    var crystal1 = Math.floor(Math.random() * 12) + 2; //assign and generate random number between 1-12
    var crystal2 = Math.floor(Math.random() * 12) + 2; //assign and generate random number between 1-12
    var crystal3 = Math.floor(Math.random() * 12) + 2; //assign and generate random number between 1-12
    var crystal4 = Math.floor(Math.random() * 12) + 2; //assign and generate random number between 1-12
    var numberOptions = [crystal1, crystal2, crystal3, crystal4]; // assign and create array for values
    var crystalImages = ['./assets/images/crystal1.png', './assets/images/crystal2.png', './assets/images/crystal3.png', './assets/images/crystal4.png']; // assign and create array for images

    // displays values on screen
    $("#number-to-guess").text(targetNumber); 
    $('#wins-count').text(wins);
    $('#loses-count').text(loses); 
    $('#score').text(counter); 
      
    // for loop to create crystals for every numberOption
    for (var i = 0; i < numberOptions.length; i++) { 
      var imageCrystal = $("<img>"); 
      imageCrystal.addClass("crystal-image"); 
      imageCrystal.attr('src', crystalImages[i]); 
      imageCrystal.attr("data-crystalvalue", numberOptions[i]);
      crystals.append(imageCrystal);
    }

    // on click event to the the value of each crystal clicked
    crystals.on("click", ".crystal-image", function() {
      var crystalValue = ($(this).attr("data-crystalvalue"));
      crystalValue = parseInt(crystalValue);
      counter += crystalValue;
      $('#score').text(counter);

      if (counter === targetNumber) {
        wins++;
        alert('You win!');
        $('#wins-count').text(wins);
        console.log('wins: ' + wins);
        resetGame();
      }
  
      else if (counter >= targetNumber) {
        loses++;
        alert('You lose!');
        $('#loses-count').text(loses);
        resetGame();
      }

    });

      //Reset game function
      function resetGame() {
        targetNumber = Math.floor(Math.random() * 101) + 19;
        crystal1 = Math.floor(Math.random() * 12) + 2; 
        crystal2 = Math.floor(Math.random() * 12) + 2; 
        crystal3 = Math.floor(Math.random() * 12) + 2; 
        crystal4 = Math.floor(Math.random() * 12) + 2;
        numberOptions = [crystal1, crystal2, crystal3, crystal4];
        crystalImages = ['./assets/images/crystal1.png', './assets/images/crystal2.png', './assets/images/crystal3.png', './assets/images/crystal4.png']; 
        counter = 0;
        crystals.empty();
        
        for (var i = 0; i < numberOptions.length; i++) { 
          var imageCrystal = $("<img>"); 
          imageCrystal.addClass("crystal-image"); 
          imageCrystal.attr('src', crystalImages[i]); 
          imageCrystal.attr("data-crystalvalue", numberOptions[i]);
          crystals.append(imageCrystal);
        }

        $("#number-to-guess").text(targetNumber);
        $('#score').text(counter);
        
      }
});