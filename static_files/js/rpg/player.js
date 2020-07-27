let player;

function Player(classType, health, mana, strength, agility, speed) {
    this.classType = classType;
    this.health = health;
    this.mana = mana;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;
}

let PlayerMoves = {
    calcAttack: function () {
        // WHO ATTACKS FIRST
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;
        // PLAYER ATTACKS
        let playerAttack = function () {
            let calcBaseDamage;
            if (player.mana > 0) {
                calcBaseDamage = player.strength * player.mana / 1000;
            } else {
                calcBaseDamage = player.strength * player.agility / 1000;
            }
            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBaseDamage + offsetDamage;
            // NUMBER OF HITS
            let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility / 10) / 2) + 1;
            let attackValues = [calcOutputDamage, numberOfHits];
            return attackValues;
        }
        // ENEMY ATTACKS
        var enemyAttack = function () {
            let calcBaseDamage;
            if (enemy.mana > 0) {
                calcBaseDamage = enemy.strength * enemy.mana / 1000;
            } else {
                calcBaseDamage = enemy.strength * enemy.agility / 1000;
            }
            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBaseDamage + offsetDamage;
            // NUMBER OF HITS
            let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.agility / 10) / 2) + 1;
            let attackValues = [calcOutputDamage, numberOfHits];
            return attackValues;
        }
        // GET PLAYER/ENEMY HEALTH TO CHANGE LATER
        let getPlayerHealth = document.querySelector(".player-health");
        let getEnemyHealth = document.querySelector(".enemy-health");
        // INITIATE ATTACKS
        // IF PLAYER IS FASTER
        if (getPlayerSpeed >= getEnemySpeed) {
            let playerAttackValues = playerAttack();
            let totalDamage = playerAttackValues[0] * playerAttackValues[1];
            enemy.health = enemy.health - totalDamage;
            alert("You hit " + playerAttackValues[0] + " damages " + playerAttackValues[1] + " times.");
            if (enemy.health <= 0) {
                alert("You win :)! Refresh the browser to play again.");
                getPlayerHealth.innerHTML = "Health: " + player.health;
                getEnemyHealth.innerHTML = "Health: 0";
            } else {
                getEnemyHealth.innerHTML = "Health: " + enemy.health;
                // ENEMY ATTACKS
                let enemyAttackValues = enemyAttack()
                let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
                player.health = player.health - totalDamage;
                alert(enemy.enemyType + " hit " + enemyAttackValues[0] + " damages " + enemyAttackValues[1] + " times.");
                if (player.health <= 0) {
                    alert("You loose :(! Refresh the browser to play again.");
                    getPlayerHealth.innerHTML = "Health: 0";
                    getEnemyHealth.innerHTML = "Health: " + enemy.health;
                } else {
                    getPlayerHealth.innerHTML = "Health: " + player.health;
                }
            }
            // IF ENEMY IS FASTER
            } else if (getEnemySpeed >= getPlayerSpeed) {
                let enemyAttackValues = enemyAttack();
                let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
                player.health = player.health - totalDamage;
                alert(enemy.enemyType + " hit " + enemyAttackValues[0] + " damages " + enemyAttackValues[1] + " times.");
                if (player.health <= 0) {
                    alert("You loose :(! Refresh the browser to play again.");
                    getEnemyHealth.innerHTML = "Health: " + enemy.health;
                    getPlayerHealth.innerHTML = "Health: 0";
                } else {
                    getPlayerHealth.innerHTML = "Health: " + player.health;
                    // PLAYER ATTACKS
                    let playerAttackValues = playerAttack()
                    let totalDamage = playerAttackValues[0] * playerAttackValues[1];
                    enemy.health = enemy.health - totalDamage;
                    alert("You hit " + playerAttackValues[0] + " damages " + playerAttackValues[1] + " times.");
                    if (enemy.health <= 0) {
                        alert("You win :)! Refresh the browser to play again.");
                        getEnemyHealth.innerHTML = "Health: 0";
                        getPlayerHealth.innerHTML = "Health: " + player.health;
                    } else {
                        getEnemyHealth.innerHTML = "Health: " + enemy.health;
                    }
                }
            }
        }
    }