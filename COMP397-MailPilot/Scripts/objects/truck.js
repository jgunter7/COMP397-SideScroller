var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Truck Class ++++++++++++++++++++++++++++++++++++++
    var Truck = (function (_super) {
        __extends(Truck, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function Truck(imageString) {
            _super.call(this, imageString);
            this.sound = "engine";
            this.x = 50;
            this.y = 430;
            createjs.Sound.play(this.sound, { "loop": -1 });
        }
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        Truck.prototype.update = function () {
            this.y = stage.mouseY; // position truck under mouse
            if (this.y > 450)
                this.y = 450;
            if (this.y < 335)
                this.y = 335;
        };
        Truck.prototype.shutupTruck = function () {
            createjs.Sound.stop(); // stops audio manually
        };
        return Truck;
    })(objects.GameObject);
    objects.Truck = Truck;
})(objects || (objects = {}));
//# sourceMappingURL=truck.js.map