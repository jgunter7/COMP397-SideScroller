module objects {
    // City Class ++++++++++++++++++++++++++++++++++++++
    export class City extends createjs.Bitmap {
        // PUBLIC PROPERTIES ++++++++++++++++++++++++++++
        width: number;
        height: number;
        dx: number = 1;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.reset();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        private checkBounds(): void {

            // check if city has left screen
            if (this.x <= -1091) {
                this.reset();
            }
        }


        private reset(): void {
            this.y = 0;
            this.x = 0; // reset city off screen
        }


        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {

            this.x -= this.dx; // moves city down the stage
            this.checkBounds();
        }
    }
}  