module objects {
    // Truck Class ++++++++++++++++++++++++++++++++++++++
    export class Truck extends objects.GameObject {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);

            this.sound = "engine";

            this.x = 50;
            this.y = 430;

            createjs.Sound.play(this.sound, { "loop": -1 });
        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {
            this.y = stage.mouseY; // position truck under mouse
            if (this.y > 450)
                this.y = 450;
            if (this.y < 335)
                this.y = 335;
        }

        public shutupTruck(): void {
            createjs.Sound.stop(); // stops audio manually
        }
    }
} 