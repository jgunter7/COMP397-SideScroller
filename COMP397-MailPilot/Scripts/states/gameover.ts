module states {
    // Game over state after playing the game
    export class GameOver {
        //CONSTRUCTOR
        constructor() {
            this.main();
        }


        // PUBLIC METHODS
        // update method
        public update() {
            city.update();
        }

        // main method
        public main() {
            // instantiate new game container
            game = new createjs.Container();

            //add city/road paralox to the game container
            city = new objects.City(assets.loader.getResult("city"));
            game.addChild(city);

            road = new objects.Road(assets.loader.getResult("road"));
            game.addChild(road);

            // Add start and instruction buttons
            starte = new createjs.Bitmap(assets.loader.getResult("start"));
            starte.x = 75;
            starte.y = 355;
            starte.on("click", btnStartE_Click);
            game.addChild(starte);

            quit = new createjs.Bitmap(assets.loader.getResult("quit"));
            quit.x = 350;
            quit.y = 355;
            quit.on("click", btnQuit_Click);
            game.addChild(quit); 

            //display final score
            var instrus: createjs.Text;
            instrus = new createjs.Text("Final Score: " + scoreboard.score, "26px Consolas", "#FFFF00");
            instrus.x = canvas.clientWidth / 2 - instrus.getBounds().width / 2;
            instrus.y = 50;
            game.addChild(instrus);

            //add game container to stage
            stage.addChild(game);
        }
    }
}  

var starte: createjs.Bitmap;
var quit: createjs.Bitmap;

// Change gamestate to play when start is clicked
function btnStartE_Click() {
    starte.alpha = 0.7;
    gameState = "play";
    NewGameState();
}

// Change gamestate to menu when quit is clicked
function btnQuit_Click() {
    quit.alpha = 0.7;
    gameState = "menu";
    NewGameState();
}