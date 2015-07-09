var states;
(function (states) {
    var Instructions = (function () {
        //CONSTRUCTOR
        function Instructions() {
            this.main();
        }
        // PUBLIC METHODS
        // update method
        Instructions.prototype.update = function () {
        };
        // main method
        Instructions.prototype.main = function () {
            // instantiate new game container
            game = new createjs.Container();
            //add ocean object to stage
            city = new objects.City(assets.loader.getResult("city"));
            game.addChild(city);
            road = new objects.Road(assets.loader.getResult("road"));
            game.addChild(road);
            // Add simple instruction text and back button
            var instrus;
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
        };
        return Instructions;
    })();
    states.Instructions = Instructions;
})(states || (states = {}));
var back;
//Change gamestate when back button is clicked
function btnBack_Click() {
    back.alpha = 0.7;
    gameState = "menu";
    NewGameState();
}
//# sourceMappingURL=instructions.js.map