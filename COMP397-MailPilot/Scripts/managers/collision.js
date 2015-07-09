var managers;
(function (managers) {
    var Collision = (function () {
        //CONSTRUCTOR +++++++++++++++++++++++++++
        function Collision() {
        }
        //PUBLIC METHODS ++++++++++++++++++++++++
        // check the distance between truck and any other game object
        Collision.prototype.check = function (gameObject, x) {
            var rect1;
            var rect2;
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
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map