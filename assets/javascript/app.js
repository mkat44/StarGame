$(document).ready(function() {
    var startgamebanner = true;
    var gamewindshield = false;
    var starsystem = [];
    var cetus = {
        exoplanet: "../assets/images/exoplanets_1.jpg",
        lifesupportplanet: "../assets/images/exoplanets_4.jpg",
        fuelplanet: "../assets/images/exoplanets_13.jpg",
        blackhole: "../assets/images/black_hole.jpg",
        sun: "../assets/images/red_dwarf_2.jpg",
        deadend: "../assets/images/cetus_stars.jpg",
        startingpoint: "../assets/images/cetus_omnicron.jpg"
    }
    var cygnus = {
        exoplanet: "../assets/images/exoplanets_3.jpg",
        lifesupportplanet: "../assets/images/exoplanets_6.jpg",
        fuelplanet: "../assets/images/exoplanets_2.jpg",
        blackhole: "../assets/images/black_hole_2.jpg",
        sun: "../assets/images/spaceship1.jpg",
        deadend: "../assets/images/cygnus_stars3.jpg",
        startingpoint: "../assets/images/cygnus_tulipnebula.jpg"
    }
    var monoceros = {
        exoplanet: "../assets/images/exoplanets_5.jpg",
        lifesupportplanet: "../assets/images/exoplanets_10.jpg",
        fuelplanet: "../assets/images/exoplanets_6.jpg",
        blackhole: "../assets/images/black_hole_3.jpg",
        sun: "../assets/images/sun_1.jpg",
        deadend: "../assets/images/monoceros_stars2.jpg",
        startingpoint: "../assets/images/monoceros_rosettenebula2.jpg"
    }
    var centaurus = {
        exoplanet: "../assets/images/exoplanets_6.jpg",
        lifesupportplanet: "../assets/images/exoplanets_11.jpg",
        fuelplanet: "../assets/images/exoplanets_8.jpg",
        blackhole: "../assets/images/black_hole_4.jpg",
        sun: "../assets/images/sun_2.jpg",
        deadend: "../assets/images/centaurus_stars2.jpg",
        startingpoint: "../assets/images/centaurus_nebula.jpg"
    }
    var starsystemarray = [cetus, cygnus, monoceros, centaurus];
    var lifesupport = "";
    var fuel = "";
    var up = "";
    var right = "";
    var back = "";
    var left = "";

    $("#windshield").hide();
    $("#variablepanel").hide();
    $(".shipheading").text("Traveler of Stars!");
    $(".logreadouts").html("Welcome to the Pazuzu 5000. <br>");
    $(".logreadouts").append("Please select a star system to traverse its depths and find habitable explanets for our dying world. <br>");
    $(".logreadouts").append("You will only have a limited amount of fuel and life support so please think quickly and carefully. There are dangerous objects in every star system, and there may be tricks at every turn. <br>");
    $(".logreadouts").append("Finding exoplanets is your main objective; some may have valuable assets for you. <br>Safe travels, captain.");
})