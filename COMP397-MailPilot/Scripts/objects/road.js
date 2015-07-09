var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Road paralax with the city
    // Road Class ++++++++++++++++++++++++++++++++++++++
    var Road = (function (_super) {
        __extends(Road, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function Road(imageString) {
            _super.call(this, imageString);
            this.dx = 5;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.reset();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        Road.prototype.checkBounds = function () {
            // check if road has left screen
            if (this.x == -960) {
                this.reset();
            }
        };
        Road.prototype.reset = function () {
            this.y = 325;
            this.x = 0; // reset road on screen
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        Road.prototype.update = function () {
            this.x -= this.dx; // moves road down the stage
            this.checkBounds();
        };
        return Road;
    })(createjs.Bitmap);
    objects.Road = Road;
})(objects || (objects = {}));
//# sourceMappingURL=road.js.map