module objects {
    // Road paralax with the city
    // Road Class ++++++++++++++++++++++++++++++++++++++
    export class Road extends createjs.Bitmap {
        // PUBLIC PROPERTIES ++++++++++++++++++++++++++++
        width: number;
        height: number;
        dx: number = 5;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.reset();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        private checkBounds(): void {

            // check if road has left screen
            if (this.x == -960) {
                this.reset();
            }
        }


        private reset(): void {
            this.y = 325;
            this.x = 0; // reset road on screen
        }


        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {

            this.x -= this.dx; // moves road down the stage
            this.checkBounds();
        }
    }
}   