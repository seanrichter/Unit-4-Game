


    //assign values to variables
    var targetNumber = Math.floor(Math.random() * 101) + 19; // Generate random number between 19-120
    var crystals = $("#crystals");
    var counter = 0;
    var wins = 0;
    var loses = 0;
    var gem1 = Math.floor(Math.random() * 12) + 2;  //assign and generate a random number between 1-12
    var gem2 = Math.floor(Math.random() * 12) + 2;  //assign and generate a random number between 1-12
    var gem3 = Math.floor(Math.random() * 12) + 2;  //assign and generate a random number between 1-12
    var gem4 = Math.floor(Math.random() * 12) + 2;  //assign and generate a random number between 1-12
    var numberOptions = [gem1, gem2, gem3, gem4];  // assign and create an array for values
    var crystalImages = ["./assets/images/gem1.jpg", "./assets/images/gem2.jpg", "./assets/images/gem3.jpg", "./assets/images/gem4.jpg",];  //assign and create array for images

    //displays values on screen
    $("#number-to-guess").text(targetNumber);
    $("#wins-count").text(wins);
    $("#loses-count").text(loses);
    $("#score").text(counter);

    //for loop to create crystals for every numberOption
    for (var i = 0; i < numberOptions.length; i++) {
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", crystalImages[i]);
        imageCrystal.attr("data-crystalvalue", numberOptions[i]);
        crystals.append(imageCrystal);