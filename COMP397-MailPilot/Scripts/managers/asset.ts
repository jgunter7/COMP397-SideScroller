module managers {
    export class Asset {
        // PUBLIC PROPERTIES
        public loader: createjs.LoadQueue;
        public atlas: createjs.SpriteSheet;

        // PRIVATE PROPERTIES
        private manifest = [
            { id: "city", src: "assets/images/city.png" },
            { id: "road", src: "assets/images/road.png" },
        ];

        private data = {

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

        }

        // CONSTRUCTOR
        constructor() {
            this.preload();
        }

        preload() {
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            // event listener triggers when assets are completely loaded
            this.loader.on("complete", init, this);
            this.loader.loadManifest(this.manifest);

            // create texture atlas
            this.atlas = new createjs.SpriteSheet(this.data);
        }
    }
} 