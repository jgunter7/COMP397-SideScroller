module objects {
    // Coin Class ++++++++++++++++++++++++++++++++++++++
    export class Coin extends objects.GameObject {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);

            this.name = "money";
            this.sound = "ching";
            this.dx = 5;

            this.reset();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        private checkBounds(): void {

            // check if coin has left screen
            if (this.x < 0 - this.width) {
                this.reset();
            }
        }


        public reset(): void {
            this.x = canvas.clientWidth + this.width; // start money bag just off screen
            this.y = Math.floor(Math.random() * (450 - 335 + 1)) + 335; // random location
        }


        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {

            this.x -= this.dx; // moves coin down the container
            this.checkBounds();
        }
    }
} 