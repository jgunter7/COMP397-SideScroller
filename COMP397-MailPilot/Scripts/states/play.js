var states;
(function (states) {
    // Gamestate for actual game play
    var Play = (function () {
        //CONSTRUCTOR
        function Play() {
            this.main();
        }
        // PUBLIC METHODS
        // update method
        Play.prototype.update = function () {
            city.update();
            road.update();
            truck.update();
            coin.update();
            for (var enemy = 0; enemy < 2; enemy++) {
                enemys[enemy].update();
                collision.check(enemys[enemy], enemy);
            }
            collision.check(coin, -1);
            scoreboard.update();
            if (scoreboard.lives == 0) {
                gameState = "gameover";
                NewGameState();
            }
        };
        // main method
        Play.prototype.main = function () {
            // instantiate new game container
            game = new createjs.Container();
            //add city / road paralax to game container
            city = new objects.City(assets.loader.getResult("city"));
            game.addChild(city);
            road = new objects.Road(assets.loader.getResult("road"));
            game.addChild(road);
            //add coin object to game container
            coin = new objects.Coin("money");
            coin.scaleX = coin.scaleY = Math.min(40 / coin.width, 40 / coin.height);
            coin.width = coin.getTransformedBounds().width;
            game.addChild(coin);
            // add truck object to game container
            truck = new objects.Truck("truck");
            truck.scaleX = truck.scaleY = Math.min(75 / truck.width, 75 / truck.height);
            truck.width = truck.getTransformedBounds().width;
            game.addChild(truck);
            // add 2 lambo objects to game container
            for (var lambo = 0; lambo < 2; lambo++) {
                enemys[lambo] = new objects.Lambo("car");
                enemys[lambo].scaleX = enemys[lambo].scaleY = Math.min(75 / enemys[lambo].width, 75 / enemys[lambo].height);
                enemys[lambo].width = enemys[lambo].getTransformedBounds().width;
                game.addChild(enemys[lambo]);
            }
            //add scoreboard
            scoreboard = new objects.ScoreBoard();
            //add collision manager
            collision = new managers.Collision();
            //add game container to stage
            stage.addChild(game);
        };
        return Play;
    })();
    states.Play = Play;
})(states || (states = {}));
//# sourceMappingURL=play.js.map