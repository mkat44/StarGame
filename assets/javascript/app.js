$(document).ready(function() {
    var startgamebanner = true;
    var starsystem = [];
    var cetus = {
        name: "Cetus",
        constellationanimal: "Whale",
        lightyears: "12",
        fuel: 10,
        exoplanet: "../TriviaGame/assets/images/exoplanets_1.jpg",
        lifesupportplanet: "../TriviaGame/assets/images/exoplanets_4.jpg",
        fuelplanet: "../TriviaGame/assets/images/exoplanets_13.jpg",
        blackhole: "../TriviaGame/assets/images/black_hole.jpg",
        sun: "../TriviaGame/assets/images/red_dwarf2.jpg",
        deadend: "../TriviaGame/assets/images/cetus_stars.jpg",
        startingpoint: "../TriviaGame/assets/images/cetus_omnicron.jpg",
        windshieldpic: "../TriviaGame/assets/images/cetus_mira2.jpg"
    }
    var cygnus = {
        name: "Cygnus",
        constellationanimal: "Swan",
        lightyears: "2400",
        fuel: 6,
        exoplanet: "../TriviaGame/assets/images/exoplanets_3.jpg",
        lifesupportplanet: "../TriviaGame/assets/images/exoplanets_6.jpg",
        fuelplanet: "../TriviaGame/assets/images/exoplanets_2.jpg",
        blackhole: "../TriviaGame/assets/images/black_hole_2.jpg",
        sun: "../TriviaGame/assets/images/spaceship1.jpg",
        deadend: "../TriviaGame/assets/images/cygnus_stars3.jpg",
        startingpoint: "../TriviaGame/assets/images/cygnus_tulipnebula.jpg",
        windshieldpic: "../TriviaGame/assets/images/cygnus_northamericannebula.jpg"
    }
    var monoceros = {
        name: "Monoceros",
        constellationanimal: "Unicorn",
        lightyears: "490",
        fuel: 8,
        exoplanet: "../TriviaGame/assets/images/exoplanets_5.jpg",
        lifesupportplanet: "../TriviaGame/assets/images/exoplanets_10.jpg",
        fuelplanet: "../TriviaGame/assets/images/exoplanets_6.jpg",
        blackhole: "../TriviaGame/assets/images/black_hole_3.jpg",
        sun: "../TriviaGame/assets/images/sun_1.jpg",
        deadend: "../TriviaGame/assets/images/monoceros_stars2.jpg",
        startingpoint: "../TriviaGame/assets/images/monoceros_rosettenebula2.jpg",
        windshieldpic: "../TriviaGame/assets/images/monoceros_stars3.jpg"
    }
    var centaurus = {
        name: "Centaurus",
        constellationanimal: "Centaur",
        lightyears: "4",
        fuel: 12,
        exoplanet: "../TriviaGame/assets/images/exoplanets_6.jpg",
        lifesupportplanet: "../TriviaGame/assets/images/exoplanets_11.jpg",
        fuelplanet: "../TriviaGame/assets/images/exoplanets_8.jpg",
        blackhole: "../TriviaGame/assets/images/black_hole_4.jpg",
        sun: "../TriviaGame/assets/images/sun_2.jpg",
        deadend: "../TriviaGame/assets/images/centaurus_stars2.jpg",
        startingpoint: "../TriviaGame/assets/images/centaurus_nebula.jpg",
        windshieldpic: "../TriviaGame/assets/images/centaurus_nebula2.jpg"
    }
    var starsystemarray = [cetus, cygnus, monoceros, centaurus];
    var currentlocation = "";
    var lifesupport = "";
    var up = "";
    var right = "";
    var back = "";
    var left = "";
    var score = 0;
    var fuelremaining = "";

    $("#variablepanel").hide();
    $(".shipheading").text("Traveler of Stars!");
    $(".logreadouts").html("Welcome to the Pazuzu 5000. <br>");
    $(".logreadouts").append("Please select a star system to traverse its depths and find habitable explanets for our dying world. <br>");
    $(".logreadouts").append("You will only have a limited amount of fuel and life support so please think quickly and carefully. There are dangerous objects in every star system, and there may be tricks at every turn. <br>");
    $(".logreadouts").append("Finding exoplanets is your main objective; some may have valuable assets for you. <br>Safe travels, captain.");

    $(document).on("click", ".option", function() {
        startgamebanner = false;
        $("#startgame").hide();
        $("#variablepanel").show();
        starsystem = $(this).attr("value");
        var starsystemselect = "";
        for (var i = 0; i < starsystemarray.length; i++) {
            if (starsystem == starsystemarray[i].name) {
                starsystemselect = starsystemarray[i];
                console.log(starsystemselect.name);
            }
        }
        fuelremaining = starsystemselect.fuel;
        $(".fuelremaining").append(fuelremaining);
        $(".currentscorekeeper").append(score);
        $("#placeholderimage2").attr("src", starsystemselect.windshieldpic);
        $(".shipheading").empty();
        $(".shipheading").text(starsystemselect.name + " the " + starsystemselect.constellationanimal);
        $(".logreadouts").empty();
        $(".logreadouts").html("Welcome to " + starsystemselect.name + ". <br>");
        $(".logreadouts").append("You are now approximately " + starsystemselect.lightyears + " light years from Earth. <br>");
        $(".logreadouts").append("Use the navigation panel to traverse through space to find the exoplanets. <br>");
        lifesupport = 60;
        $(".lifesupporttimer").append(lifesupport);
        var timer = setInterval(countdown, 1000);
        function countdown() {
            if (lifesupport == -1) {
                clearTimeout(timer);
                // set up an end of game time holder and end of game function
                // doSomething();
            } else {
                $(".lifesupporttimer").html(lifesupport + " seconds remaining...");
                lifesupport--;
              }
            }
        // this is not going to be pretty or elegant but I didn't have time to do the cooler way of plotting nodes so please bear with me!
        if (starsystemselect.name === "Cetus") {
            currentlocation = "a";
            console.log("hi");
            if (currentlocation == "a") {
            $(document).on("click", ".up-button", function() {
                console.log("b");
                $("#placeholderimage2").attr("src", starsystemselect.sun);
                $(".logreadouts").append("You move closer to the system's star. Is it getting hotter in here? <br>");
                fuelremaining--;
                $(".fuelremaining").html(fuelremaining);
                currentlocation = "b";
            });
            $(document).on("click", ".down-button", function() {
                console.log("c");
                $("#placeholderimage2").attr("src", starsystemselect.deadend);
                $(".logreadouts").append("You have a gorgeous view, but there aren't any planets nearby. Keep moving! <br>");
                fuelremaining--;
                $(".fuelremaining").html(fuelremaining);
                var cetusC = currentlocation;
            });
            $(document).on("click", ".right-button", function() {
                $("#placeholderimage2").attr("src", starsystemselect.lifesupportplanet);
                $(".logreadouts").append("You've found your first exoplanet! This one doesn't look like a viable option for life, but perhaps it could be of some other use. <br>");
                $(".logreadouts").append("Upon closer inspection, you've found more resources for your life support systems!<br>");
                score += 5;
                lifesupport += 5;
                $(".curren5scorekeeper").html(score);
                $(".lifesupporttimer").html(lifesupport);
                var cetusE = currentlocation;
            });
            $(document).on("click", ".left-button", function() {
                $("#placeholderimage2").attr("src", starsystemselect.fuelplanet);
                $(".logreadouts").append("You've found your first exoplanet! This one doesn't look like a viable option for life, but perhaps it could be of some other use. <br>")
                $(".logreadouts").append("Upon closer inspection, you've found more fuel! <br>");
                score += 5;
                fuelremaining += 5;
                $(".currentscorekeeper").html(score);
                $(".fuelremaining").html(fuelremaining);
                var cetusD = currentlocation;
            });
            }
            else if (currentlocation === "b") {
                $(document).on("click", ".down-button", function() {
                    $("#placeholderimage2").attr("src", starsystemselect.windshieldpic);
                    $(".logreadouts").append("You move back to where you started. Try selecting one of the other directions. <br>");
                    fuelremaining--;
                    $(".fuelremaining").html(fuelremaining);
                    currentlocation = "a";
                });
                $(document).on("click", ".right-button", function() {
                    $("#placeholderimage2").attr("src", starsystemselect.blackhole);
                    $(".logreadouts").append("You've reached a black hole! Oh no, you feel yourself being sucked in. Can you escape? <br>");
                    fuelremaining--;
                    $(".fuelremaining").html(fuelremaining);
                    var cetusF = currentlocation;
                    // back to the beginning with variables intact
                });
                $(".upbutton").hide();
                $(".left-button").hide();
            }
            else if (currentlocation == cetusC) {
                $(document).on("click", ".up-button", function() {
                    $("#placeholderimage2").attr("src", starsystemselect.windshieldpic);
                    $(".logreadouts").append("You move back to where you started. Try selecting one of the other directions. <br>");
                    fuelremaining--;
                    $(".fuelremaining").html(fuelremaining);
                    currentlocation = cetusA;
                });
                $(document).on("click", ".left-button", function() {
                    $("#placeholderimage2").attr("src", starsystemselect.exoplanet);
                    $(".logreadouts").append("You've done it! You've found the holy grail. A perfect, earth-like exoplanet. <br>");
                    $(".logreadouts").append("Keep searching to further cement your name in history. <br>");
                    score += 10;
                    $(".currentscorekeeper").html(score);
                    fuelremaining--;
                    $(".fuelremaining").html(fuelremaining);
                    var cetusG = currentlocation;
                });
                $(".down-button").hide();
                $(".right-button").hide();
            }
            else if (currentlocation == cetusD) {
                $(document).on("click", ".right-button", function() {
                    $("#placeholderimage2").attr("src", starsystemselect.windshieldpic);
                    $(".logreadouts").append("You move back to where you started. Try selecting one of the other directions. <br>");
                    fuelremaining--;
                    $(".fuelremaining").html(fuelremaining);
                    currentlocation = cetusA;
                });
                $(document).on("click", ".down-button", function() {
                    $("#placeholderimage2").attr("src", starsystemselect.exoplanet);
                    $(".logreadouts").append("You've done it! You've found the holy grail. A perfect, earth-like exoplanet. <br>");
                    $(".logreadouts").append("Keep searching to further cement your name in history. <br>");
                    score += 10;
                    $(".currentscorekeeper").html(score);
                    fuelremaining--;
                    $(".fuelremaining").html(fuelremaining);
                    cetusG = currentlocation;
                });
                $(".up-button").hide();
                $(".left-button").hide();
            }
            else if (currentlocation == cetusE) {
                $(document).on("click", ".left-button", function() {
                    $("#placeholderimage2").attr("src", starsystemselect.windshieldpic);
                    $(".logreadouts").append("You move back to where you started. Try selecting one of the other directions. <br>");
                    fuelremaining--;
                    $(".fuelremaining").html(fuelremaining);
                    currentlocation = cetusA;
                });
                $(document).on("click", ".up-button", function() {
                    $("#placeholderimage2").attr("src", starsystemselect.blackhole);
                    $(".logreadouts").append("You've reached a black hole! Oh no, you feel yourself being sucked in. Can you escape? <br>");
                    fuelremaining--;
                    $(".fuelremaining").html(fuelremaining);
                    cetusF = currentlocation;
                });
                $(".down-button").hide();
                $(".right-buton").hide();
            }
            else if (currentlocation == cetusF) {
                
            }
            else if (currentlocation == cetusG) {

            }

        }
        else if (starsystemselect.name === "Cygnus") {

        }
        else if (starsystemselect.name === "Monoceros") {

        }
        else if (starsystemselect.name === "Centaurus") {

        }
        else {

        }
    })
})