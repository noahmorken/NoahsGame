function createPlayerSprite(Q) {
    'use strict';
    // You can create a sub-class by extending the Q.Sprite class to create Q.Player
    Q.Sprite.extend("Player", {

        // the init constructor is called on creation
        init: function (p) {

            // You can call the parent's constructor with this._super(..)
            this._super(p, {
                sheet: "player",  // Setting a sprite sheet sets sprite width and height
                x: 410,           // You can also set additional properties that can
                y: 90             // Be overridden on object creation
            });

            // Add in pre-made components to get up and running quickly
            this.add('2d, platformerControls');

            // Write event handlers to respond hook into behaviors.
            // hit.sprite is called everytime the player collides with a sprite
            this.on("hit.sprite", function (collision) {
                // Check the collision, if it's the Tower, you win!
                if (collision.obj.isA("Tower")) {
                    if (Q.state.p.level < lastLevel) {
                        Q.state.inc("level", 1);
                        Q.stageScene("nextLevel", 1, { label: "Next Level" });
                    } else {
                        // Stage the endGame scene above the current stage
                        Q.stageScene("endGame", 1, { label: "You Won!" });
                        // Remove the player to prevent them from moving
                    }
                    this.destroy();
                }
            });
        }
    });
}
