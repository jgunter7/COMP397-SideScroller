var managers;
(function (managers) {
    var Asset = (function () {
        // CONSTRUCTOR
        function Asset() {
            // PRIVATE PROPERTIES
            this.manifest = [
                { id: "city", src: "assets/images/city.png" },
                { id: "road", src: "assets/images/road.png" },
            ];
            this.data = {
                "images": [
                    "assets/images/atlas.png"
                ],
                "frames": [
                    [2, 2, 226, 176, 0, 0, -1],
                    [2, 180, 62, 60, 0, 0, -1],
                    [66, 180, 61, 49, 0, -4, -10]
                ],
                "animations": {
                    "cloud": [0],
                    "island": [1],
                    "plane": [2]
                }
            };
            this.preload();
        }
        Asset.prototype.preload = function () {
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            // event listener triggers when assets are completely loaded
            this.loader.on("complete", init, this);
            this.loader.loadManifest(this.manifest);
            // create texture atlas
            this.atlas = new createjs.SpriteSheet(this.data);
        };
        return Asset;
    })();
    managers.Asset = Asset;
})(managers || (managers = {}));
//# sourceMappingURL=asset.js.map