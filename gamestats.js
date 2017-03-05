function createStatsScene(Q) {
    'use strict';
    Q.scene('gameStats', function (stage) {
        Q.UI.Text.extend("Lives", {
            init: function (p) {
                this._super({
                    label: "Lives: " + Q.state.p.lives,
                    x: -1 * Q.width / 6,
                    y: 0
                });
                Q.state.on("change.lives", this, "lives");
            },
            lives: function (lives) {
                this.p.label = "Lives: " + lives;
            }
        });
        Q.UI.Text.extend("Score", {
            init: function (p) {
                this._super({
                    label: "score: " + Q.state.p.score,
                    x: Q.width / 6,
                    y: 0
                });
                Q.state.on("change.score", this, "score");
            },
            score: function (score) {
                this.p.label = "score: " + score;
            }
        });
        
        var statsContainer = stage.insert(new Q.UI.Container({
            fill: "gray",
            x: Q.width / 2,
            y: Q.height - 30,
            border: 1,
            shadow: 3,
            shadowColor: "rgba(0,0,0,0.5)",
            w: 960,
            h: 40
        })),
            lives = stage.insert(new Q.Lives(), statsContainer),
            score = stage.insert(new Q.Score(), statsContainer);
    });
}