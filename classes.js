class Entrance {
  constructor(x, y, orientation) {
    this.x = x;
    this.y = y;
    this.orientation = orientation;

    this.entranceWidth = 80;
    this.entranceSideLength = 20;
  }

  createGraphics() {
    /*
    // archway
    circle(this.x, this.y, 100);

    // cover bottom of circle
    fill(204, 175, 129);
    noStroke();

    rect(this.x, this.y + 53, 200, 100);
    
    // for other things after this
    stroke(48);
    */
    push();
      angleMode(DEGREES);

      translate(this.x, this.y);
      rotate(this.orientation);

      stroke(100);

      line(-(this.entranceWidth / 2), 0, (this.entranceWidth / 2), 0);

      stroke(48);

      line(-(this.entranceWidth / 2), -(this.entranceSideLength / 2), -(this.entranceWidth / 2), (this.entranceSideLength / 2));
      line((this.entranceWidth / 2), -(this.entranceSideLength / 2), (this.entranceWidth / 2), (this.entranceSideLength / 2));
    pop();
  }
}

class Exit {
  constructor(x, y, orientation) {
    this.x = x;
    this.y = y;
    this.orientation = orientation;

    this.entranceWidth = 80;
    this.entranceSideLength = 20;
  }

  createGraphics() {
    /*
    // archway
    circle(this.x, this.y, 100);

    // cover bottom of circle
    fill(204, 175, 129);
    noStroke();

    rect(this.x, this.y + 53, 200, 100);
    
    // for other things after this
    stroke(48);
    */
    push();
      angleMode(DEGREES);

      translate(this.x, this.y);
      rotate(this.orientation);

      stroke(48);
      fill(100);

      triangle(0, 0, -(this.entranceWidth / 2), -(this.entranceSideLength / 2), -(this.entranceWidth / 2), (this.entranceSideLength / 2));
      triangle(0, 0, (this.entranceWidth / 2), -(this.entranceSideLength / 2), (this.entranceWidth / 2), (this.entranceSideLength / 2));
    pop();
  }
}

class Enclosure {
  constructor(enclosureX, enclosureY, enclosureWidth, enclosureHeight, animalName) {
    this.animalResearchInformation = researchInformation[animalName];

    this.x = enclosureX;
    this.y = enclosureY;
    this.width = enclosureWidth;
    this.height = enclosureHeight;
    this.animalName = animalName;
    this.frenchAnimalName = this.animalResearchInformation.frenchName;
    
    this.image;
  }

  preloadImage() {
    this.image = loadImage("enclosure-images/" + this.animalName + "-enclosure.png");
  }

  createElements() {
    this.parkAreaXOffset = ((width / 2) - (parkAreaWidth / 2));
    this.parkAreaYOffset = ((height / 2) - (parkAreaHeight / 2));
    
    this.animalDiv = createDiv();
    this.animalDiv.position(getCenteredGridX(this.x, this.width, this.parkAreaXOffset), getCenteredGridY(this.y, this.height, this.parkAreaYOffset));
    this.animalDiv.size(this.width, this.height);
    this.animalDiv.addClass("enclosure-container")
    this.animalDiv.id(this.animalName + "-enclosure-container");
    this.animalDiv.parent(parkArea);

    this.animalTitle = createP(this.frenchAnimalName);
    this.animalDiv.addClass("enclosure-title")
    this.animalTitle.id(this.animalName + "-enclosure-title");
    this.animalTitle.parent(this.animalDiv);

    this.animalImage = createImg("animal-enclosure-images/" + this.animalName + ".png");
    this.animalDiv.addClass("enclosure-image")
    this.animalImage.id(this.animalName + "-enclosure-image");
    this.animalImage.parent(this.animalDiv);
  }

  createGraphics() {
    noFill();
    
    image(this.image, this.x, this.y, this.width, this.height);
  
    if (this.animalName == "shark") {
      rect(this.x, this.y, this.width, this.height, 0, this.height / 2, this.height / 2, 0);
    } else {
      rect(this.x, this.y, this.width, this.height);
    }
  }

  detectClick(animalName) {
    function showEvent() {
      let animalResearchInformation = researchInformation[animalName];
      
      researchTitle.html(animalResearchInformation.frenchName);
      researchSubtitle.html("(" + animalResearchInformation.scientificName + ")");

      researchInformationClassDescription.html(animalResearchInformation.classification);
      researchInformationDietDescription.html(animalResearchInformation.diet);
      researchInformationHabitatDescription.html(animalResearchInformation.habitat);
      researchInformationAppearanceDescription.html(animalResearchInformation.appearance);

      researchImageContainer.style("background-image", "linear-gradient(to left, transparent, rgb(59, 59, 59)), url('animal-research-images/" + animalName + ".png')");
      
      if (animalName == "platypus") {
        researchImageContainer.style("background-position", "40% 0");
      } else if (animalName == "frog") {
        researchImageContainer.style("background-position", "60% 0");
      } else if (animalName == "turtle") {
        researchImageContainer.style("background-position", "20% 0");
      } else if (animalName == "bird") {
        researchImageContainer.style("background-position", "40% 0");
      } else if (animalName == "shark") {
        researchImageContainer.style("background-position", "20% 0");
      } else if (animalName == "giraffe") {
        researchImageContainer.style("background-position", "30% 0");
      }

      researchFrame.position(getCenteredGridX(0, researchFrame.size().width), getCenteredGridY(0, researchFrame.size().height));

      researchContainer.style("visibility", "visible");
      researchContainer.style("opacity", 1);
    }

    function hideEvent() {
      researchContainer.style("opacity", 0);
      setTimeout(function() {
        researchContainer.style("visibility", "hidden");
      }, 250)
    }

    this.animalDiv.mousePressed(showEvent);
    researchCloseButton.mousePressed(hideEvent);
  }
}

class FoodOutlet {
  // initialize variables
  constructor(x, y, width, height) {
    this.foodOutletDiv;
    this.foodOutletImage;
    
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  // creates html elements
  createElements() {
    this.parkAreaXOffset = ((width / 2) - (parkAreaWidth / 2));
    this.parkAreaYOffset = ((height / 2) - (parkAreaHeight / 2));

    this.foodOutletDiv = createDiv();
    this.foodOutletDiv.position(getCenteredGridX(this.x, this.width, this.parkAreaXOffset), getCenteredGridY(this.y, this.height, this.parkAreaYOffset));
    this.foodOutletDiv.size(this.width, this.height);
    this.foodOutletDiv.addClass("food-outlet-container");
    this.foodOutletDiv.parent(parkArea);

    this.foodOutletImage = createImg("utility-images/food.png");
    this.foodOutletImage.addClass("food-outlet-image");
    this.foodOutletImage.size(this.width - 70, AUTO);
    this.foodOutletImage.parent(this.foodOutletDiv);
  }

  // creates p5 graphics on canvas
  createGraphics() {
    fill(240, 240, 240);

    rect(this.x, this.y, this.width, this.height);
  }
}

class Fountain {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.image;
  }

  preloadImage() {
    this.image = loadImage("utility-images/fountain.png");
  }

  createGraphics() {
    push();
      translate(this.x, this.y);

      noFill();

      image(this.image, 0, 0, 60, 60);
      
      rect(0, 0, 60, 60, 30, 30, 30, 30);
    pop();
  }
}

class SceneryArea {
  constructor(x, y, orientation) {
    this.x = x;
    this.y = y;
    this.orientation = orientation;

    this.image;
  }

  preloadImage() {
    this.image = loadImage("utility-images/scenery-area.png");
  }

  createGraphics() {
    push();
      translate(this.x, this.y);
      rotate(this.orientation);

      noFill();

      image(this.image, 0, 0);

      rect(0, 0, 100, 40);
    pop();
  }
}

class Table {
  constructor(x, y, orientation) {
    this.x = x;
    this.y = y;
    this.orientation = orientation;

    this.image;
  }

  preloadImage() {
    this.image = loadImage("utility-images/table.png");
  }

  createGraphics() {
    push();
      translate(this.x, this.y);
      rotate(this.orientation);

      noFill();

      image(this.image, 0, 0, 40, 40);
    pop();
  }
}

class Washroom {
  constructor(x, y, width, height) {
    this.washroomDiv;
    this.menWashroomDiv;
    this.menWashroomImage;
    this.womenWashroomDiv;
    this.womenWashroomImage;
    
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  // creates html elements
  createElements() {
    this.parkAreaXOffset = ((width / 2) - (parkAreaWidth / 2));
    this.parkAreaYOffset = ((height / 2) - (parkAreaHeight / 2));

    this.washroomDiv = createDiv();
    this.washroomDiv.position(getCenteredGridX(this.x, this.width, this.parkAreaXOffset), getCenteredGridY(this.y, this.height, this.parkAreaYOffset));
    this.washroomDiv.size(this.width, this.height);
    this.washroomDiv.addClass("washroom-container");
    this.washroomDiv.parent(parkArea);

    this.menWashroomDiv = createDiv();
    this.menWashroomDiv.addClass("men-washroom-container");
    this.menWashroomDiv.parent(this.washroomDiv);

    this.menWashroomImage = createImg("utility-images/men-washroom.png");
    this.menWashroomImage.addClass("men-washroom-image");
    this.menWashroomImage.parent(this.menWashroomDiv);

    this.womenWashroomDiv = createDiv();
    this.womenWashroomDiv.addClass("women-washroom-container");
    this.womenWashroomDiv.parent(this.washroomDiv);

    this.womenWashroomImage = createImg("utility-images/women-washroom.png");
    this.womenWashroomImage.addClass("women-washroom-image");
    this.womenWashroomImage.parent(this.womenWashroomDiv);
  }

  // creates p5 graphics on canvas
  createGraphics() {
    fill(240, 240, 240);

    rect(this.x - (this.width / 4), this.y, this.width / 2, this.height);
    rect(this.x + (this.width / 4), this.y, this.width / 2, this.height);
  }
}