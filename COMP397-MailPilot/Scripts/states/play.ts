﻿module states {
    export class Play {


        //CONSTRUCTOR
        constructor() {
            this.main();
        }


        // PUBLIC METHODS
        // update method
        public update() {
            city.update();
            road.update();
            plane.update();
            island.update();

            for (var cloud = 0; cloud < 3; cloud++) {
                clouds[cloud].update();
                collision.check(clouds[cloud]);
            }

            collision.check(island);

            scoreboard.update();
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

        //add island object to stage
        island = new objects.Island("island");
        game.addChild(island);

        // add plane object to stage
        plane = new objects.Plane("plane");
        game.addChild(plane);

        // add 3 cloud objects to stage
        for (var cloud = 0; cloud < 3; cloud++) {
            clouds[cloud] = new objects.Cloud("cloud");
            game.addChild(clouds[cloud]);
        }


        //add scoreboard
        scoreboard = new objects.ScoreBoard();

        //add collision manager
        collision = new managers.Collision();

        //add game container to stage
        stage.addChild(game);
    }
    }
} 