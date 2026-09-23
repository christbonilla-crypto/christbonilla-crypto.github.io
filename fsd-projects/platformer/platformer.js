$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
createBadPlatform(0, 700, 10000000000000, 100, "blue")
//Boat
createPlatform(0, 675, 150, 25, "brown")
createFakePlatform(0, 650, 25, 25, "brown")
createFakePlatform(125, 650, 25, 25, "brown")
createFakePlatform(25, 650, 100, 25, "grey")
createFakePlatform(65, 675, 25, -100, "brown")
createFakePlatform(55, 600, 100, -50, "white")
//Island
createPlatform(450, 675, 400, 25, "yellow")
createPlatform(480, 650, 350, 25, "yellow")
createFakePlatform(650, 675, 25, -100, "brown")
createFakePlatform(665, 600, 25, -50, "brown")
createPlatform(625 , 525, 100, 25, "green")
createPlatform(600 , 535 , 50, 25, "green")
createPlatform(700 , 535 , 50, 25, "green")
createFakePlatform(660 , 535 , 25, 25, "green")
//Shark
createBadPlatform(250, 615, 75, 90, "grey")
createPlatform(300, 600, 5, 5, "lightblue")
createBadPlatform(268, 643, 40, 60, "red")
createBadPlatform(273, 675, 30, 27, "grey")
createBadPlatform(245, 625, 25, 26, "black")
createBadPlatform(310, 625, 25, 25, "black")
//Pirate Boat
createPlatform(1000, 600, 400, 800, "brown")
createPlatform(900, 500, 600, 150, "brown")
createPlatform(1375, 100, 400, 800, "brown")
createPlatform(1000, 0, 400, 200, "white")
//Clouds
createPlatform(700, 400, 100, 50, "white")
createFakePlatform(675, 415, 150, 25, "white")
createPlatform(500, 350, 100, 50, "white")
createFakePlatform(475, 365, 150, 25, "white")
createPlatform(300, 300, 100, 50, "white")
createFakePlatform(275, 315, 150, 25, "white")
createPlatform(50, 250, 200, 50, "white")
createPlatform(25, 265, 250, 25, "white")
//Sun
createFakePlatform(0, 0, 150, 150, "yellow")
createFakePlatform(0, 0, 125, 125, "white")



    // TODO 3 - Create Collectables
  createCollectable("database", 270, 525, .05 , 1)
    createCollectable("database", 1300, 425, .05 , 1)
    createCollectable("database", 125, 180, .05 , 1)



    
    // TODO 4 - Create Cannons
 createCannon("right", 600, 2500, 25, 25, 1, 1, 1)
    createCannon("left", 250, 2500, 25, 25, 1, 1, 1)
      createCannon("top", 250, 2500, 25, 25, 1, 1, 1)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
