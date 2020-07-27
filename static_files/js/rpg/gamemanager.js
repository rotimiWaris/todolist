let GameManager = {
    setGameStart: function (classType) {
        this.resetPlayer(classType);
        this.setPreFight();
    },
    resetPlayer: function (classType) {
        switch (classType) {
            case "Warrior":
                player = new Player(classType, 200, 0, 200, 100, 50);
                break;

            case "Hunter":
                player = new Player(classType, 200, 0, 50, 200, 100);
                break;

            case "Mage":
                player = new Player(classType, 80, 0, 70, 200, 150);
                break;

            case "Ranger":
                player = new Player(classType, 100, 0, 100, 150, 200);
                break;
        }
        let getInterface = document.querySelector(".interface");

        getInterface.innerHTML = '<img src="/static/img/' + classType.toLowerCase() + '.png" alt="' + classType + '" class="img-avatar"><div><h3>' + classType + '</h3><p class="player-health">Health: ' + player.health + ' </p><p>Mana: ' + player.mana + ' </p><p>Strength: ' + player.strength + ' </p><p>Agility: ' + player.agility + ' </p><p>Speed: ' + player.speed + ' </p></div>';
    },
    setPreFight: function () {
        let getHeading = document.querySelector(".heading");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");

        // GETTING DIV CLASSES IN THE RPG
        getHeading.innerHTML = '<p>Find an Enemy!</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search for Enemy</a>';
        getArena.style.visibility = "visible";
    },
    setFight: function () {
        let getHeading = document.querySelector(".heading");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");

        // CREATE ENEMY
        let enemy0 = new Enemy("Demon", 100, 0, 50, 100, 100);
        let enemy1 = new Enemy("Dragon", 200, 0, 150, 80, 150);
        let enemy2 = new Enemy("Lone-Hyena", 150, 0, 100, 50, 170);
        let enemy3 = new Enemy("Monster", 250, 0, 100, 50, 50);
        let enemy4 = new Enemy("Troll", 150, 0, 50, 80, 150);

        // RANDOM NUMBER
        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(5));
        switch (chooseRandomEnemy) {
            case 0:
                enemy = enemy0;
                break;
            case 1:
                enemy = enemy1;
                break;
            case 2:
                enemy = enemy2;
                break;
            case 3:
                enemy = enemy3;
                break;
            case 4:
                enemy = enemy4;
                break;
        }
        getHeading.innerHTML = '<p>Attack</p>';

        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack</a>';

        getEnemy.innerHTML = '<img src="/static/img/' + enemy.enemyType.toLowerCase() + '.png" alt="' + enemy.enemyType + '" class="img-avatar"><div><h3>' + enemy.enemyType + '</h3><p class="enemy-health">Health: ' + enemy.health + ' </p><p>Mana: ' + enemy.mana + ' </p><p>Strength: ' + enemy.strength + ' </p><p>Agility: ' + enemy.agility + ' </p><p>Speed: ' + enemy.speed + ' </p></div>';
    }
}