/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />

/// <reference path="managers/asset.ts" />

/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/city.ts" />
/// <reference path="objects/road.ts" />
/// <reference path="objects/truck.ts" />
/// <reference path="objects/coin.ts" />
/// <reference path="objects/lambo.ts" />

/// <reference path="objects/scoreboard.ts" />

/// <reference path="managers/collision.ts" />

/// <reference path="states/play.ts" />

// Game Framework Variables
var canvas = document.getElementById("canvas");
var stage: createjs.Stage;
var stats: Stats;
var game: createjs.Container;

// Game Variables
var city: objects.City;
var road: objects.Road;
var truck: objects.Truck;
var coin: objects.Coin;
var enemys: objects.Lambo[] = [];
var gameState = "menu";

var scoreboard: objects.ScoreBoard;


// Game Managers
var assets: managers.Asset;
var collision: managers.Collision;

// Game States
var play: states.Play;
var menu: states.Menu;
var instructions: states.Instructions;
var gameover: states.GameOver;


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

    switch (gameState) {
        case "menu":
            menu.update();
            break;
        case "instructions":
            instructions.update();
            break;
        case "play":
            play.update();
            break;
        case "gameover":
            gameover.update();
            break;
    }

    stage.update();

    stats.end(); // end measuring
}


// Our Main Game Function
function main() {
    // instantiate new game container
    game = new createjs.Container();

    // instantiate play state;
    //play = new states.Play();
    //instructions = new states.Instructions();
    menu = new states.Menu();
    //gameover = new states.GameOver();

    //add game container to stage
    stage.addChild(game);
}

// handles cleanup between states
function NewGameState() {
    stage.removeAllChildren();
    if (play != undefined)
        truck.shutupTruck(); // stop engine noise
    menu = null;
    instructions = null;
    play = null;
    gameover = null;
    switch (gameState) {
        case "menu":
            menu = new states.Menu();
            break;
        case "instructions":
            instructions = new states.Instructions();
            break;
        case "play":
            play = new states.Play();
            break;
        case "gameover":
            gameover = new states.GameOver();
            break;
    }
}