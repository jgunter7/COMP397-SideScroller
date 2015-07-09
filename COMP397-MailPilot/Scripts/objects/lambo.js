var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Lambo Class ++++++++++++++++++++++++++++++++++++++
    // This is the enemy class which brings the players live count down
    var Lambo = (function (_super) {
        __extends(Lambo, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function Lambo(imageString) {
            _super.call(this, imageString);
            this.dx = 4;
            this.name = "car";
            this.sound = "crash";
            this.reset();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        Lambo.prototype.checkBounds = function () {
            // check if car has left screen
            if (this.x < 0 - this.width) {
                this.reset();
            }
        };
        Lambo.prototype.reset = function () {
            var locations = [360, 440]; // allows a small gap for the truck to fit between (cheat)
            var rand = Math.floor(Math.random() * 9) % 2;
            this.y = locations[rand]; // start car at random location
            this.x = canvas.clientWidth + this.width * rand; // start car off stage randomly stagered
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        Lambo.prototype.update = function () {
            this.x -= this.dx; // brings car down the stage
            this.checkBounds();
        };
        return Lambo;
    })(objects.GameObject);
    objects.Lambo = Lambo;
})(objects || (objects = {}));
//# sourceMappingURL=lambo.js.map