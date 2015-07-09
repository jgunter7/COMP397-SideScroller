var states;
(function (states) {
    // Main menu gamestate
    var Menu = (function () {
        //CONSTRUCTOR
        function Menu() {
            this.main();
        }
        // PUBLIC METHODS
        // update method
        Menu.prototype.update = function () {
            // allow city and road to animate
            city.update();
            road.update();
        };
        // main method
        Menu.prototype.main = function () {
            // instantiate new game container
            game = new createjs.Container();
            // add city and road paralax
            city = new objects.City(assets.loader.getResult("city"));
            game.addChild(city);
            road = new objects.Road(assets.loader.getResult("road"));
            game.addChild(road);
            // Add start and instruction buttons
            start = new createjs.Bitmap(assets.loader.getResult("start"));
            start.x = 25;
            start.y = 355;
            start.on("click", btnStart_Click);
            game.addChild(start);
            instr = new createjs.Bitmap(assets.loader.getResult("instru"));
            instr.x = 275;
            instr.y = 355;
            instr.on("click", btnInstru_Click);
            game.addChild(instr);
            //add game container to stage
            stage.addChild(game);
        };
        return Menu;
    })();
    states.Menu = Menu;
})(states || (states = {}));
var instr;
var start;
function btnStart_Click() {
    start.alpha = 0.7;
    gameState = "play";
    NewGameState();
}
function btnInstru_Click() {
    instr.alpha = 0.7;
    gameState = "instructions";
    NewGameState();
}
//# sourceMappingURL=menu.js.map