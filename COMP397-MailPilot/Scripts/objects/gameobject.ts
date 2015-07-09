module objects {
    // GameObject Super Class ++++++++++++++++++++++++++++++++++++++
    export class GameObject extends createjs.Sprite {
        // PUBLIC PROPERTIES ++++++++++++++++++++++++++++
        public width: number;
        public height: number;
        public isColliding: boolean = false;
        public sound: string = "";
        public name: string = "";

        // PROTECTED PROPERTIES +++++++++++++++++++++++++++
        protected dy: number;
        protected dx: number;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(assets.atlas, imageString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
        }
    }
}   