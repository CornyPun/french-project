// park area variables
let parkAreaDiv;

let parkAreaX = 0;
let parkAreaY = 0;
let parkAreaWidth = 1000;
let parkAreaHeight = 900;

// platypus enclosure variables
let platypusEnclosureX = 325;
let platypusEnclosureY = -350;
let platypusEnclosureWidth = 300;
let platypusEnclosureHeight = 150;

// frog enclosure variables
let frogEnclosureX = 325;
let frogEnclosureY = -180;
let frogEnclosureWidth = 300;
let frogEnclosureHeight = 150;

// turtle enclosure variables
let turtleEnclosureX = -325;
let turtleEnclosureY = -350;
let turtleEnclosureWidth = 300;
let turtleEnclosureHeight = 150;

// bird enclosure variables
let birdEnclosureX = 325;
let birdEnclosureY = 230;
let birdEnclosureWidth = 300;
let birdEnclosureHeight = 150;

// shark enclosure variables
let sharkEnclosureX = -337;
let sharkEnclosureY = 70;
let sharkEnclosureWidth = 325;
let sharkEnclosureHeight = 180;

// giraffe enclosure variables
let giraffeEnclosureX = -337;
let giraffeEnclosureY = 325;
let giraffeEnclosureWidth = 325;
let giraffeEnclosureHeight = 250;

// park area div
let parkArea;

// lists for objects
let entrances;
let exits;
let enclosures;
let foodOutlets;
let fountains;
let sceneryAreas;
let tables;
let washrooms;

// welcome elements
let welcomeContainer;
let welcomeBackground;
let welcomeFrame;

let welcomeHeaderContainer;
let welcomeTitle;

let welcomeInformationContainer;

let welcomeInformationResearchContainer;
let welcomeInformationReseachTextContainer;
let welcomeInformationResearchTitle;
let welcomeInformationResearchDescription;
let welcomeInformationResearchIcon;

let welcomeInformationFinishedContainer;
let welcomeInformationFinishedTextContainer;
let welcomeInformationFinishedTitle;
let welcomeInformationFinishedDescription;
let welcomeInformationFinishedIcon;

let welcomeInformationCloseButton;
let welcomeInformationCloseButtonContainer;

// research elements
let researchContainer;
let researchBackground;
let researchFrame;

let researchCloseButton;
let researchCloseButtonIcon;

let researchImageContainer;

let researchHeaderContainer;
let researchTitle;
let researchSubtitle;

let researchInformationContainer;

let researchInformationClassContainer;
let researchInformationClassTitle;
let researchInformationClassDescription;

let researchInformationDietContainer;
let researchInformationDietTitle;
let researchInformationDietDescription;

let researchInformationHabitatContainer;
let researchInformationHabitatTitle;
let researchInformationHabitatDescription;

let researchInformationAppearanceContainer;
let researchInformationAppearanceTitle;
let researchInformationAppearanceDescription;

let researchInformation = {
  platypus: {
    frenchName: "L'orrnithorynque",
    scientificName: "Ornithorhynchus anatinus",
    classification: "L'ornithorynque est un mammifère, mais si vous voulez être plus spécifique, il est un monotrème. Il a le sang chaud, il a de la fourrure et il est né en vie.",
    diet: "L'ornithorynque ne mange pas les plantes, alors il est carnivore. Il mange des choses comme les insectes, les crustacés et les vers. Les ornithorynques gardent leurs nourritures dans leurs grandes joues !",
    habitat: "L'ornithorynque vit dans les ruisseaux, les rivières et les lacs à l'est de l'Australie. Il vit aussi sur terre, mais la moitié d'un jour d'un ornithorynque est dans l'eau pour chercher la nourriture.",
    appearance: "L'ornithorynque a beaucoup de caractéristiques. L'une de ces caractéristiques est un long corps profilé pour nager dans l'eau. Il a aussi un bec comme un canard et il a une large queue plate. Il a quatre courts membres avec pieds palmés et enfin, il a de la fourrure brune foncée."
  },

  frog: {
    frenchName: "La grenouille de dard de poison",
    scientificName: "Dendrobatidae",
    classification: "La grenouille de dard de poison est une amphibienne. Elle est une vertébrée, alors elle a une colonne vertébrale. La peau de la grenouille de dard de poison est lisse et gluante et elle a le sang froid.",
    diet: "La grenouille de dard de poison mange seulement de la viande, alors elle est carnivore. Elle aime manger les petits insectes, comme les fourmis et les termites. Elle trouve ses nourritures sur le sol de la forêt.",
    habitat: "La grenouille de dard de poison vit dans les forêts tropicales en Amérique centrale et Amérique du Sud. Elle vit dans les forêts tropicales parce qu'il y a beaucoup d'humidité pour garder de l'eau dans sa peau.",
    appearance: "La grenouille de dard de poison est un animal très coloré ! Elle est principalement bleue vive et la tête de la grenouille de dard de poison est bleue foncée. Elle a aussi beaucoup de taches bleues et noires et enfin, elle a deux bras et deux jambes. Ses bras a quatre doigts et ses jambes ont cinq doigts. Elle a de la palmure."
  },

  turtle: {
    frenchName: "La tortue-alligator",
    scientificName: "Chelydra serpentina",
    classification: "La tortue-alligator est un reptile. Elle est une vertébrée et elle a les écailles pour empêcher la perte d'eau. Elle a aussi le sang froid et enfin, elle pond les œufs.",
    diet: "La tortue-alligator mange les plantes et de la viande, alors elle est omnivore. Elle mange différentes plantes aquatiques, comme les feuilles, les algues et les autres. Elle mange aussi différents animaux, comme les poissons, les têtards, les grenouilles et les autres.",
    habitat: "La tortue-alligator vit principalement au Canada, dans les étendues d'eau douce dans le sud-est du Canada. Elle vit dans les étendues d'eau parce qu'elle est presque entièrement un animal aquatique, alors elle doit être dans l'eau.",
    appearance: "La tortue-alligator peut avoir une carapace verte, brune ou noire pour camoufler dans la nature. Elle a aussi une longue queue, une grande tête et un long cou. Enfin, elle a les écailles pour se protéger."
  },

  bird: {
    frenchName: "Le viréo aux yeux rouges",
    scientificName: "Vireo olivaceus",
    classification: "Le viréo aux yeux rouges est un oiseau. Il a des ailes pour voler en l'air, des plumes pour se garder au chaud et un bec pour construire les nids.",
    diet: "Le viréo aux yeux rouges est omnivore, alors il mange de la viande et les aliments végétaux. Il mange essentiellement les insectes comme les chenilles, les papillons et les papillons de nuit. Mais, le viréo aux yeux rouges mange occasionnellement les fruits et les baies aussi.",
    habitat: "Le viréo aux yeux rouges vit en Amérique du Nord, dans les forêts boréales dans le sud du Canada et les forêts caduques en Amérique. Il vit dans les forêts parce qu'il y a beaucoup d'arbres pour construire les nids.",
    appearance: "Le viréo aux yeux rouges a un haut du corps vert olive et un dessous blanc. Il a aussi un haut du crâne gris avec un bord noir. Il a deux jambes épaisses bleues-grises et un bec fort. Enfin, il a des yeux rouges."
  },

  shark: {
    frenchName: "Le requin-marteau",
    scientificName: "Sphyrnidae",
    classification: "Le requin-marteau est un poisson. Il a cinq branchies pour vivre et respirer dans la mer. Le requin-marteau n'a pas de membres.",
    diet: "Le requin-marteau est carnivore, alors il mange seulement de la viande, pas d'aliments végétaux. Il mange beaucoup de choses, comme les petits poissons et les invertébrés. Les plus grands requins-marteaux mangent les phoques, les lions de mer et les autres.",
    habitat: "Le requin-marteau vit dans beaucoup d'océans, comme l'océan Atlantique, l'océan Indien, l'océan Pacifique et la mer Méditerranée. Les requin-marteaux vivent dans les océans et les mers parce qu'ils sont les poissons, alors ils doivent vivre dans l'eau.",
    appearance: "Le requin-marteau est un requin, alors il a toutes les caractéristiques d'un requin. Par exemple, il a deux grandes nageoires pour nager dans l'eau. Il a aussi une grande nageoire dorsale pour stabiliser leur corps et il a beaucoup de petites dents tranchantes pour tuer leur proie ! Enfin, le requin-marteau a un visage allongé qui ressemble à un marteau pour épingler et manger les raies sur le sol !"
  },

  giraffe: {
    frenchName: "La girafe Masaï",
    scientificName: "Giraffa tippelskirchi",
    classification: "La girafe Masaï est un mammifère, alors elle a de la courte fourrure dense. Elle a aussi le sang chaud et enfin, elle ne pond pas les œufs.",
    diet: "La girafe Masaï est herbivore, alors elle mange seulement les plantes. Elle mange plusieurs choses, comme les feuilles, les fruits et les fleurs. Elle mange principalement les feuilles d'acacia parce qu'elles ont beaucoup de nutriments.",
    habitat: "La girafe Masaï vit dans les savanes en Tanzanie et les savanes dans le sud du Kenya. Elle vit dans les savanes parce qu'il y a beaucoup d'acacias pour manger et il y a beaucoup d'espace ouvert pour repérer les prédateurs.",
    appearance: "La girafe Masaï est plus foncée que les autres girafes. Elle a les grandes taches brunes foncées en forme de feuilles. Elle a aussi quatre longues jambes pour marcher et courir et elle a une longue queue pour écraser les insectes. Enfin et surtout, elle a un très long cou pour manger les grands arbres comme les acacias !"
  }
};

function preload() {
  enclosures = [
    new Enclosure(platypusEnclosureX, platypusEnclosureY, platypusEnclosureWidth, platypusEnclosureHeight, "platypus", "L'ornithorynque"),
    new Enclosure(frogEnclosureX, frogEnclosureY, frogEnclosureWidth, frogEnclosureHeight, "frog", "La grenouille de dard de poison"),
    new Enclosure(turtleEnclosureX, turtleEnclosureY, turtleEnclosureWidth, turtleEnclosureHeight, "turtle", "La tortue-alligator"),
    new Enclosure(birdEnclosureX, birdEnclosureY, birdEnclosureWidth, birdEnclosureHeight, "bird", "Le viréo aux yeux rouges"),
    new Enclosure(sharkEnclosureX, sharkEnclosureY, sharkEnclosureWidth, sharkEnclosureHeight, "shark", "Le requin-marteau"),
    new Enclosure(giraffeEnclosureX, giraffeEnclosureY, giraffeEnclosureWidth, giraffeEnclosureHeight, "giraffe", "La girafe masai")
  ];

  for (let i = 0; i < enclosures.length; i++) {
    let enclosure = enclosures[i];
    
    enclosure.preloadImage();
  }

  fountains = [
    new Fountain(0, -60),
    new Fountain(0, 180),
  ]

  for (let i = 0; i < fountains.length; i++) {
    let fountain = fountains[i];
    
    fountain.preloadImage();
  }

  sceneryAreas = [
    new SceneryArea(-375, -90, 0),
    new SceneryArea(-225, -90, 0),
    new SceneryArea(375, 82, 0),
    new SceneryArea(225, 82, 0),
    new SceneryArea(0, -325, 90),
    new SceneryArea(0, -175, 90),
    new SceneryArea(0, 65, 90),
    new SceneryArea(0, 305, 90),
  ];

  for (let i = 0; i < sceneryAreas.length; i++) {
    let sceneryArea = sceneryAreas[i];
    
    sceneryArea.preloadImage();
  }

  tables = [
    new Table(140, 402, 90),
    new Table(140, 348, 90),

    new Table(140, 283, 90),
    new Table(140, 229, 90),
    new Table(140, 175, 90),

    new Table(140, -8, 90),
    new Table(140, -62, 90),

    new Table(140, -127, 90),
    new Table(140, -181, 90),
    new Table(140, -235, 90),
    new Table(140, -297, 90),

    new Table(140, -351, 90),
    new Table(140, -405, 90),

    /**/

    new Table(-140, -297, 90),
    new Table(-140, -351, 90),
    new Table(-140, -405, 90),

    new Table(-140, -178, 90),
    new Table(-140, -232, 90),

    new Table(-160, 0, 55),
    new Table(-140, 70, 90),
    new Table(-160, 140, 135),

    new Table(-140, 222, 90),
    new Table(-140, 286, 90),
    new Table(-140, 351, 90),
    new Table(-140, 415, 90),
  ]

  for (let i = 0; i < tables.length; i++) {
    let table = tables[i];
    
    table.preloadImage();
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // creates park area
  parkArea = createDiv();
  parkArea.position(getCenteredGridX(parkAreaX, parkAreaWidth), getCenteredGridY(parkAreaY, parkAreaHeight));
  parkArea.size(parkAreaWidth, parkAreaHeight);
  parkArea.addClass("park-area")

  // creates welcome elements
  welcomeContainer = createDiv();
  welcomeContainer.position(getCenteredGridX(0, width), getCenteredGridY(0, height));
  welcomeContainer.addClass("welcome-container");
  
  welcomeBackground = createDiv();
  welcomeBackground.addClass("welcome-background");
  welcomeBackground.parent(welcomeContainer);

  welcomeFrame = createDiv();
  welcomeFrame.addClass("welcome-frame");
  welcomeFrame.parent(welcomeContainer);

  welcomeHeaderContainer = createDiv();
  welcomeHeaderContainer.addClass("welcome-header-container");
  welcomeHeaderContainer.parent(welcomeFrame);

  welcomeTitle = createElement("h1", "Bienvenue à Zoo de Calgary!");
  welcomeTitle.addClass("welcome-title");
  welcomeTitle.parent(welcomeHeaderContainer);
  
  welcomeInformationContainer = createDiv();
  welcomeInformationContainer.addClass("welcome-information-container");
  welcomeInformationContainer.parent(welcomeFrame)

  welcomeInformationResearchContainer = createDiv();
  welcomeInformationResearchContainer.addClass("welcome-information-subcontainer")
  welcomeInformationResearchContainer.id("welcome-information-research-subcontainer");
  welcomeInformationResearchContainer.parent(welcomeInformationContainer);

  welcomeInformationReseachTextContainer = createDiv();
  welcomeInformationReseachTextContainer.addClass("welcome-information-text-container");
  welcomeInformationReseachTextContainer.id("welcome-information-research-text-container");
  welcomeInformationReseachTextContainer.parent(welcomeInformationResearchContainer);

  welcomeInformationResearchTitle = createElement("h3", "Des recherches");
  welcomeInformationResearchTitle.addClass("welcome-information-title");
  welcomeInformationResearchTitle.id("welcome-information-research-title");
  welcomeInformationResearchTitle.parent(welcomeInformationReseachTextContainer);

  welcomeInformationResearchDescription = createP("Cliquez sur les enclos pour apprendre plus.");
  welcomeInformationResearchDescription.addClass("welcome-information-description");
  welcomeInformationResearchDescription.id("welcome-information-research-description");
  welcomeInformationResearchDescription.parent(welcomeInformationReseachTextContainer);

  welcomeInformationResearchIcon = createImg("icons/click-enclosure.png");
  welcomeInformationResearchIcon.addClass("welcome-information-image");
  welcomeInformationResearchIcon.id("welcome-information-research-image");
  welcomeInformationResearchIcon.parent(welcomeInformationResearchContainer);

  welcomeInformationFinishedContainer = createDiv();
  welcomeInformationFinishedContainer.addClass("welcome-information-subcontainer")
  welcomeInformationFinishedContainer.id("welcome-information-finished-subcontainer");
  welcomeInformationFinishedContainer.parent(welcomeInformationContainer);

  welcomeInformationFinishedTextContainer = createDiv();
  welcomeInformationFinishedTextContainer.addClass("welcome-information-text-container");
  welcomeInformationFinishedTextContainer.id("welcome-information-finished-text-container");
  welcomeInformationFinishedTextContainer.parent(welcomeInformationFinishedContainer);

  welcomeInformationFinishedTitle = createElement("h3", "Fini ?");
  welcomeInformationFinishedTitle.addClass("welcome-information-title");
  welcomeInformationFinishedTitle.id("welcome-information-finished-title");
  welcomeInformationFinishedTitle.parent(welcomeInformationFinishedTextContainer);

  welcomeInformationFinishedDescription = createP("Cliquez sur le « X » dans le coin supérieur droit quand vous avez fini.");
  welcomeInformationFinishedDescription.addClass("welcome-information-description");
  welcomeInformationFinishedDescription.id("welcome-information-finished-description");
  welcomeInformationFinishedDescription.parent(welcomeInformationFinishedTextContainer);

  welcomeInformationFinishedIcon = createImg("icons/click-close-button.png");
  welcomeInformationFinishedIcon.addClass("welcome-information-image");
  welcomeInformationFinishedIcon.id("welcome-information-finished-image");
  welcomeInformationFinishedIcon.parent(welcomeInformationFinishedContainer);

  welcomeInformationCloseButtonContainer = createDiv();
  welcomeInformationCloseButtonContainer.addClass("welcome-information-close-button-container");
  welcomeInformationCloseButtonContainer.parent(welcomeFrame);

  welcomeInformationCloseButton = createButton("OK");
  welcomeInformationCloseButton.addClass("welcome-information-close-button");
  welcomeInformationCloseButton.parent(welcomeInformationCloseButtonContainer);

  welcomeInformationCloseButton.mousePressed(
    function() {
      welcomeContainer.style("opacity", 0);
      setTimeout(function() {
        welcomeContainer.style("visibility", "hidden");
      }, 250)
    }
  );

  welcomeFrame.position(getCenteredGridX(0, welcomeFrame.size().width), getCenteredGridY(0, welcomeFrame.size().height));

  // creates research elements
  researchContainer = createDiv();
  researchContainer.position(getCenteredGridX(0, width), getCenteredGridY(0, height));
  researchContainer.addClass("research-container");
  
  researchBackground = createDiv();
  researchBackground.addClass("research-background");
  researchBackground.parent(researchContainer);

  researchFrame = createDiv();
  researchFrame.position(getCenteredGridX(0, width * 0.8), getCenteredGridY(0, height * 0.8));
  researchFrame.addClass("research-frame");
  researchFrame.parent(researchContainer);

  researchCloseButton = createDiv();
  researchCloseButton.addClass("research-close-button");
  researchCloseButton.parent(researchFrame);

  researchImageContainer = createDiv();
  researchImageContainer.addClass("research-image-container");
  researchImageContainer.parent(researchFrame);

  researchCloseButtonIcon = createImg("icons/close-button.png", "close");
  researchCloseButtonIcon.addClass("research-close-button-icon");
  researchCloseButtonIcon.parent(researchCloseButton);

  researchHeaderContainer = createDiv();
  researchHeaderContainer.addClass("research-header-container");
  researchHeaderContainer.parent(researchFrame);

  researchTitle = createElement("h1", "Le requin-marteau");
  researchTitle.addClass("research-title");
  researchTitle.parent(researchHeaderContainer);

  researchSubtitle = createElement("h2", "(Sphyrnidae)");
  researchSubtitle.addClass("research-subtitle");
  researchSubtitle.parent(researchHeaderContainer);

  researchInformationContainer = createDiv();
  researchInformationContainer.addClass("research-information-container");
  researchInformationContainer.parent(researchFrame)

  researchInformationClassContainer = createDiv();
  researchInformationClassContainer.addClass("research-information-subcontainer")
  researchInformationClassContainer.id("research-information-class-subcontainer");
  researchInformationClassContainer.parent(researchInformationContainer);

  researchInformationClassTitle = createElement("h3", "La classe");
  researchInformationClassTitle.addClass("research-information-title");
  researchInformationClassTitle.id("research-information-class-title");
  researchInformationClassTitle.parent(researchInformationClassContainer);

  researchInformationClassDescription = createP("");
  researchInformationClassDescription.addClass("research-information-description");
  researchInformationClassDescription.id("research-information-class-description");
  researchInformationClassDescription.parent(researchInformationClassContainer);

  researchInformationDietContainer = createDiv();
  researchInformationDietContainer.addClass("research-information-subcontainer")
  researchInformationDietContainer.id("research-information-diet-subcontainer");
  researchInformationDietContainer.parent(researchInformationContainer);

  researchInformationDietTitle = createElement("h3", "Le régime alimentaire")
  researchInformationDietTitle.addClass("research-information-title");
  researchInformationDietTitle.id("research-information-diet-title");
  researchInformationDietTitle.parent(researchInformationDietContainer);

  researchInformationDietDescription = createP("");
  researchInformationDietDescription.addClass("research-information-description");
  researchInformationDietDescription.id("research-information-diet-description");
  researchInformationDietDescription.parent(researchInformationDietContainer);

  researchInformationHabitatContainer = createDiv();
  researchInformationHabitatContainer.addClass("research-information-subcontainer");
  researchInformationHabitatContainer.id("research-information-habitat-subcontainer");
  researchInformationHabitatContainer.parent(researchInformationContainer);

  researchInformationHabitatTitle = createElement("h3", "L'habitat");
  researchInformationHabitatTitle.addClass("research-information-title");
  researchInformationHabitatTitle.id("research-information-habitat-title");
  researchInformationHabitatTitle.parent(researchInformationHabitatContainer);

  researchInformationHabitatDescription = createP("");
  researchInformationHabitatDescription.addClass("research-information-description");
  researchInformationHabitatDescription.id("research-information-habitat-description");
  researchInformationHabitatDescription.parent(researchInformationHabitatContainer);

  researchInformationAppearanceContainer = createDiv();
  researchInformationAppearanceContainer.addClass("research-information-subcontainer");
  researchInformationAppearanceContainer.id("research-information-appearance-subcontainer");
  researchInformationAppearanceContainer.parent(researchInformationContainer);

  researchInformationAppearanceTitle = createElement("h3", "La description morphologique");
  researchInformationAppearanceTitle.addClass("research-information-title");
  researchInformationAppearanceTitle.id("research-information-appearance-title");
  researchInformationAppearanceTitle.parent(researchInformationAppearanceContainer);

  researchInformationAppearanceDescription = createP("");
  researchInformationAppearanceDescription.addClass("research-information-description");
  researchInformationAppearanceDescription.id("research-information-appearance-description");
  researchInformationAppearanceDescription.parent(researchInformationAppearanceContainer);

  entrances = [
    new Entrance(0, -450, 0),
    new Entrance(-500, -90, 90)
  ];

  exits = [
    new Exit(0, 450, 0),
    new Exit(500, 82, -90),
  ];

  // creates class elements
  for (let i = 0; i < enclosures.length; i++) {
    let enclosure = enclosures[i];
    
    enclosure.createElements();
    enclosure.detectClick(enclosure.animalName);
  }

  foodOutlets = [
    new FoodOutlet(-400, -205, 150, 100),
    new FoodOutlet(400, -35, 150, 100),
    new FoodOutlet(250, 375, 150, 100)
  ];
  
  for (let i = 0; i < foodOutlets.length; i++) {
    let foodOutlet = foodOutlets[i]

    foodOutlet.createElements();
  }

  washrooms = [
    new Washroom(-250, -205, 150, 100),
    new Washroom(250, -35, 150, 100),
    new Washroom(400, 375, 150, 100)
  ];
  
  for (let i = 0; i < washrooms.length; i++) {
    let washroom = washrooms[i]
    
    washroom.createElements();
  }
}

// gets x according to center, then does calculations to convert it according to top left corner
function getCenteredGridX(x, objWidth, xOffset) {
  if (xOffset == null) {
    xOffset = 0;
  }
  return (((width / 2) + x) - (objWidth / 2) - (xOffset));
}

// gets y according to center, then does calculations to convert it according to top left corner
function getCenteredGridY(y, objHeight, yOffset) {
  if (yOffset == null) {
    yOffset = 0;
  }
  return (((height / 2) + y) - (objHeight / 2) - (yOffset));
}

function draw() {
  background(100);

  // push() & pop() to position according to center 
  push();
    // sets up position so it is according to a grid, with 0, 0 in the middle
    translate(width / 2, height / 2);
    
    // sets up basic formatting
    strokeJoin(ROUND);
    stroke(48);
    strokeWeight(5);

    rectMode(CENTER);
    imageMode(CENTER);

    // park area
    fill(204, 175, 129);

    rect(0, 0, 1000, 900);

    // entrances
    for (let i = 0; i < entrances.length; i++) {
      let entrance = entrances[i]
  
      entrance.createGraphics();
    }

    for (let i = 0; i < exits.length; i++) {
      let exit = exits[i]
  
      exit.createGraphics();
    }

    // enclosures
    for (let i = 0; i < enclosures.length; i++) {
      let enclosure = enclosures[i];
      
      enclosure.createGraphics();
    }

    // food outlets
    for (let i = 0; i < foodOutlets.length; i++) {
      let foodOutlet = foodOutlets[i]
  
      foodOutlet.createGraphics();
    }

    // fountains
    for (let i = 0; i < fountains.length; i++) {
      let fountain = fountains[i]
  
      fountain.createGraphics();
    }

    // scenery areas
    for (let i = 0; i < sceneryAreas.length; i++) {
      let sceneryArea = sceneryAreas[i];
      
      sceneryArea.createGraphics();
    }

    // tables
    for (let i = 0; i < tables.length; i++) {
      let table = tables[i];
      
      table.createGraphics();
    }

    // washrooms
    for (let i = 0; i < washrooms.length; i++) {
      let washroom = washrooms[i]
      
      washroom.createGraphics();
    }
  pop();
}

function windowResized() {
  // resizes canvas
  resizeCanvas(windowWidth, windowHeight);

  // resizes divs
  parkArea.position(getCenteredGridX(parkAreaX, parkAreaWidth), getCenteredGridY(parkAreaY, parkAreaHeight));
  researchFrame.position(getCenteredGridX(0, researchFrame.size().width), getCenteredGridY(0, researchFrame.size().height));
  welcomeFrame.position(getCenteredGridX(0, welcomeFrame.size().width), getCenteredGridY(0, welcomeFrame.size().height));
}