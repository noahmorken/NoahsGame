function createEndGameScene(Q) {
    'use strict';
    // To display a game over / game won popup box, 
    // create a endGame scene that takes in a `label` option
    // to control the displayed message.
    Q.scene('endGame', function (stage) {
        var container = stage.insert(new Q.UI.Container({ x: Q.width / 2, y: Q.height / 2, fill: "rgba(0,0,0,0.5)" })),
            button = container.insert(new Q.UI.Button({ x: 0, y: 0, fill: "#CCCCCC", label: "Play Again" })),
            label = container.insert(new Q.UI.Text({x: 10, y: -10 - button.p.h, label: stage.options.label }));
        // When the button is clicked, clear all the stages
        // and restart the game.
        button.on("click", function () {
            Q.clearStages();
            Q.state.reset({ score: 0, lives: 3, level: 1});
            Q.stageScene('level' + Q.state.p.level);
            Q.stageScene('gameStats', 1);
        });

        // Expand the container to visibily fit its contents
        container.fit(20);
    });
}
