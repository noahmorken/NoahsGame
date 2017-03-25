function createLevel3Scene(Q) {
    'use strict';
    // Create a new scene called level 3
    Q.scene("level3", function (stage) {

        // Add in a tile layer, and make it the collision layer
        stage.collisionLayer(new Q.TileLayer({ dataAsset: 'level3.json', sheet: 'tiles' }));

        // Create the player and add him to the stage
        var player = stage.insert(new Q.Player()),
            enemies = 7,
            i;

        // Give the stage a moveable viewport and tell it
        // to follow the player.
        stage.add("viewport").follow(player);

        // Add in some time delay enemies
        function timeDelayEnemy() {
            stage.insert(new Q.Enemy({ x: 700, y: 0 }));
        }

        for (i = 0; i < enemies; i = i + 1) {
            // Time delay enemies
            window.setTimeout(timeDelayEnemy, (5000 * (i + 1) * (i + 1) / (enemies * enemies)));
        }
        
//        stage.insert(new Q.Enemy({ x: 700, y: 0 }));
//        stage.insert(new Q.Enemy({ x: 800, y: 0 }));
//        stage.insert(new Q.Enemy({ x: 900, y: 0 }));
//        // Time delay enemies
//        window.setTimeout(function () {
//            stage.insert(new Q.Enemy({ x: 950, y: 0 }));
//        }, 3000);
//        window.setTimeout(function () {
//            stage.insert(new Q.Enemy({ x: 950, y: 0 }));
//        }, 6000);
        

        // Finally add in the tower goal
        stage.insert(new Q.Tower({ x: 180, y: 50 }));
    });
}
