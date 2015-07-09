module objects {
    // Lambo Class ++++++++++++++++++++++++++++++++++++++
    // This is the enemy class which brings the players live count down
    export class Lambo extends objects.GameObject {

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
            this.dx = 4;
            this.name = "car";
            this.sound = "crash";

            this.reset();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        private checkBounds(): void {

            // check if car has left screen
            if (this.x < 0 - this.width) {
                this.reset();
            }
        }


        public reset(): void {
            var locations = [360, 440]; // allows a small gap for the truck to fit between (cheat)
            var rand = Math.floor(Math.random()*9) % 2;
            this.y = locations[rand]; // start car at random location
            this.x = canvas.clientWidth + this.width * rand; // start car off stage randomly stagered
        }


        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {
            this.x -= this.dx; // brings car down the stage
            this.checkBounds();
        }
    }
}  