module states {
    export class Instructions {


        //CONSTRUCTOR
        constructor() {
            this.main();
        }


        // PUBLIC METHODS
        // update method
        public update() {

        }

        // main method
        public main() {
            // instantiate new game container
            game = new createjs.Container();

            //add ocean object to stage
            city = new objects.City(assets.loader.getResult("city"));
            game.addChild(city);

            road = new objects.Road(assets.loader.getResult("road"));
            game.addChild(road);

            // Add simple instruction text and back button
            var instrus: createjs.Text;
            instrus = new createjs.Text("Avoid the sports cars and collect the cash!", "26px Consolas", "#FFFF00");
            instrus.x = 10;
            instrus.y = 350;
            game.addChild(instrus);

            back = new createjs.Bitmap(assets.loader.getResult("back"));
            back.x = canvas.clientWidth / 2 - back.getBounds().width / 2;
            back.y = 25;
            back.on("click", btnBack_Click);
            game.addChild(back);

            //add game container to stage
            stage.addChild(game);
        }
    }
}  

var back: createjs.Bitmap;

//Change gamestate when back button is clicked
function btnBack_Click() {
    back.alpha = 0.7;
    gameState = "menu";
    NewGameState();
}