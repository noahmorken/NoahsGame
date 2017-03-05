function createEnemy1Sprite(Q) {
    'use strict';
    Q.Sprite.extend("Enemy", {
        init: function (p) {
            this._super(p, { sheet: 'enemy', vx: 100 });

            // Enemies use the Bounce AI to change direction 
            // whenver they run into something.
            this.add('2d, aiBounce');

            // Listen for a sprite collision, if it's the player,
            // end the game unless the enemy is hit on top
            this.on("bump.left,bump.right,bump.bottom", function (collision) {
                if (collision.obj.isA("Player")) {
                    collision.obj.destroy();
                    Q.state.dec("lives", 1);
                    if (Q.state.p.lives === 0) {
                        Q.stageScene("endGame", 1, { label: "You Died" });
                    } else {
                        Q.clearStages();
                        Q.stageScene('level' + Q.state.p.level);
                        Q.stageScene("gameStats", 1);
                    }
                }
            });

            // If the enemy gets hit on the top, destroy it
            // add to the score and give the user a "hop"
            this.on("bump.top", function (collision) {
                if (collision.obj.isA("Player")) {
                    this.destroy();
                    Q.state.inc("score", 50);
                    collision.obj.p.vy = -300;
                }
            });
        }
    });
}