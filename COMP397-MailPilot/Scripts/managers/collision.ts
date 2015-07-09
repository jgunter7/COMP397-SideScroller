module managers {
    export class Collision {
        //CONSTRUCTOR +++++++++++++++++++++++++++
        constructor() {
        }

        //PUBLIC METHODS ++++++++++++++++++++++++
        // check the distance between truck and any other game object
        public check(gameObject: objects.GameObject, x: number) {
            var rect1: createjs.Rectangle;
            var rect2: createjs.Rectangle;
            rect1 = truck.getTransformedBounds();
            rect2 = gameObject.getTransformedBounds();
            //This game users ractangles as the hit areas, this works better than the distance 
            // formula for my situation.
            if (rect1.intersects(rect2)) {
                if (gameObject.isColliding == false) {
                    createjs.Sound.play(gameObject.sound);
                    if (gameObject.name == "car") {
                        enemys[x].reset();
                        scoreboard.lives--;

                    }
                    if (gameObject.name == "money") {
                        coin.reset();
                        scoreboard.score += 100;
                    }
                }
                gameObject.isColliding = true;
            }
            else {
                gameObject.isColliding = false;
            }
        }
    }
}