var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Coin Class ++++++++++++++++++++++++++++++++++++++
    var Coin = (function (_super) {
        __extends(Coin, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function Coin(imageString) {
            _super.call(this, imageString);
            this.name = "money";
            this.sound = "ching";
            this.dx = 5;
            this.reset();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        Coin.prototype.checkBounds = function () {
            // check if coin has left screen
            if (this.x < 0 - this.width) {
                this.reset();
            }
        };
        Coin.prototype.reset = function () {
            this.x = canvas.clientWidth + this.width; // start money bag just off screen
            this.y = Math.floor(Math.random() * (450 - 335 + 1)) + 335; // random location
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        Coin.prototype.update = function () {
            this.x -= this.dx; // moves coin down the container
            this.checkBounds();
        };
        return Coin;
    })(objects.GameObject);
    objects.Coin = Coin;
})(objects || (objects = {}));
//# sourceMappingURL=coin.js.map