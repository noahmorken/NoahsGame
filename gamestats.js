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
                Q.state.on("change.lives", this, "updatestat");
            },
            updatestat: function (stat) {
                this.p.label = "Lives: " + stat;
            }
        });
        Q.UI.Text.extend("Score", {
            init: function (p) {
                this._super({
                    label: "Score: " + Q.state.p.score,
                    x: 0,
                    y: 0
                });
                Q.state.on("change.score", this, "updatestat");
            },
            updatestat: function (stat) {
                this.p.label = "score: " + stat;
            }
        });
        Q.UI.Text.extend("Level", {
            init: function (p) {
                this._super({
                    label: "Level: " + Q.state.p.level,
                    x: Q.width / 6,
                    y: 0
                });
                Q.state.on("change.level", this, "updatestat");
            },
            updatestat: function (stat) {
                this.p.label = "level: " + stat;
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
            score = stage.insert(new Q.Score(), statsContainer),
            level = stage.insert(new Q.Level(), statsContainer);
    });
}