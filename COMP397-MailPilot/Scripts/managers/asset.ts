module managers {
    // Loads all images,sprites, and audio
    export class Asset {
        // PUBLIC PROPERTIES
        public loader: createjs.LoadQueue;
        public atlas: createjs.SpriteSheet;

        // PRIVATE PROPERTIES
        private manifest = [
            { id: "city", src: "assets/images/city.png" },
            { id: "road", src: "assets/images/road.png" },
            { id: "start", src: "assets/images/start.png" },
            { id: "instru", src: "assets/images/instru.png" },
            { id: "back", src: "assets/images/back.png" },
            { id: "quit", src: "assets/images/quit.png" },
            { id: "engine", src: "assets/audio/car.wav" },
            { id: "ching", src: "assets/audio/ching.wav" },
            { id: "crash", src: "assets/audio/crash.wav" }
        ];

        private data = {

        "images": [
            "assets/images/atlas.png"
        ],

        "frames": [
            [2, 2, 542, 271, 0, -1, -34],
            [2, 275, 164, 198, 0, -6, -4],
            [168, 275, 298, 148, 0, -11, -46]
        ],

        "animations": {
            "car": [0],
            "money": [1],
            "truck": [2]
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