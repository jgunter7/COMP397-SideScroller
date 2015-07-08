/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />

/// <reference path="utility/utility.ts" />
/// <reference path="managers/asset.ts" />

/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/city.ts" />
/// <reference path="objects/road.ts" />
/// <reference path="objects/plane.ts" />
/// <reference path="objects/island.ts" />
/// <reference path="objects/cloud.ts" />

/// <reference path="objects/scoreboard.ts" />

/// <reference path="managers/collision.ts" />

/// <reference path="states/play.ts" />


// on branch atlas


// Game Framework Variables
var canvas = document.getElementById("canvas");
var stage: createjs.Stage;
var stats: Stats;
var game: createjs.Container;


// Game Variables
var city: objects.City;
var road: objects.Road;
var plane: objects.Plane;
var island: objects.Island;
var clouds: objects.Cloud[] = [];

var scoreboard: objects.ScoreBoard;


// Game Managers
var assets: managers.Asset;
var collision: managers.Collision;

// Game States
var play: states.Play;




// Preloader Function
function preload() {
    // instantiate asset manager class
    assets = new managers.Asset();


    //Setup statistics object
    setupStats();
}

// Callback function that initializes game objects
function init() {
    stage = new createjs.Stage(canvas); // reference to the stage
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60); // framerate 60 fps for the game
    // event listener triggers 60 times every second
    createjs.Ticker.on("tick", gameLoop); 

    // calling main game function
    main();
}

// function to setup stat counting
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // set to fps

    // align bottom-right
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '650px';
    stats.domElement.style.top = '10px';

    document.body.appendChild(stats.domElement);
}


// Callback function that creates our Main Game Loop - refreshed 60 fps
function gameLoop() {
    stats.begin(); // Begin measuring

    play.update();

    stage.update();

    stats.end(); // end measuring
}


// Our Main Game Function
function main() {
    // instantiate new game container
    game = new createjs.Container();

    // instantiate play state;
    play = new states.Play();

    //add game container to stage
    stage.addChild(game);
}