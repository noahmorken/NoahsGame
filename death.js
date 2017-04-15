function playerDeath(Q) {
    'use strict';

    Q.state.dec("lives", 1);
    if (Q.state.p.lives <= 0) {
        Q.stageScene("endGame", 1, { label: "You Died" });
    } else {
        Q.clearStages();
        Q.stageScene('level' + Q.state.p.level);
        Q.stageScene("gameStats", 1);
    }
}
