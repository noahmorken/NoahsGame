window.addEventListener("load", function () {
    'use strict';
    /*global Quintus */
    /*jslint nomen: true */
    var Q = new Quintus()                      // Create a new engine instance
            .include("Sprites, Scenes, Input, 2D, Touch, UI") // Load any needed modules
            .setup({ maximize: true })         // Add a canvas element onto the page, maximize to browser size
            .controls()                        // Add in default controls (keyboard, buttons)
            .touch(),                          // Add in touch support (for the UI)
        lastLevel = 2;
    Q.state.reset({ score : 0, lives : 3, level : 1 });
    
    window.createPlayerSprite(Q);
    window.createTowerSprite(Q);
    window.createEnemy1Sprite(Q);
    window.createLevel1Scene(Q);
    window.createLevel2Scene(Q);
    window.createEndGameScene(Q);
    window.createNextLevelScene(Q);
    window.createStatsScene(Q);
    
    // Q.load can be called at any time to load additional assets
    // assets that are already loaded will be skipped
    Q.load("sprites.png, sprites.json, level1.json, level2.json, tiles.png",
        // The callback will be triggered when everything is loaded
        function () {
            // Sprites sheets can be created manually
            Q.sheet("tiles", "tiles.png", { tilew: 32, tileh: 32 });

            // Or from a .json asset that defines sprite locations
            Q.compileSheets("sprites.png", "sprites.json");

            // all stageScene to run the game
            Q.stageScene("level1");
        
            // Add the stats box
            Q.stageScene("gameStats", 1);
        
        });
});
