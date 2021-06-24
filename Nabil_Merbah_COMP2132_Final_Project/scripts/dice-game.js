function rollDices() {
    const rollDice = function () {
        return Math.floor(Math.random() * 6) + 1;
    }
    return [rollDice(), rollDice()];
}

// before
const player1 = {
    name: "Player1"
};

const cpu = {
    name: "Computer"
};

// after
// let player1 = {
//     name: "Nabil",
//     rolls: 3,
//     player.dices = [3, 6]
//     score: [
//         [2, 3],
//         [4, 4],
//         [3, 6]
//     ]
// };

// let cpu = {
//     name: "Computer",
//     rolls: 3,
//     player.dices = [4, 4]
//     score: [
//         [2, 3],
//         [3, 6]
//         [4, 4],
//     ]
// };

function computeScore(results) {

    if (results[0] === 1 || results[1] === 1) {
        return 0;

    } else if (results[0] === results[1]) {
        return (results[0] + results[1]) * 2;

    } else {
        return results[0] + results[1];
    }
}

function displayDices(
    dices, // Dices with values to display
    diceImages, // Array of dice images to display
) {


    if (dices[0] < 1 || dices[0] > 6 || dices[1] < 1 || dices[1] > 6) {
        throw new Error("Invalid parameters", dice, diceImages
        );
    }
    else {
        const firstDiceImage = `pictures/dice${results[0]}.jpg`;
        document.querySelectorAll('img')[3].setAttribute('src', firstDiceImage);
        const secondDiceImage = `pictures/dice${results[1]}.jpg`;
        document.querySelectorAll('img')[2].setAttribute('src', secondDiceImage);
        console.log(result[0]);
        console.log(result[1]);
    }
}

function refreshView() {

    const stats = {
        finalScores: [],// Array of numbers 
        scoresDisplay: [], // HTML to display
        totalScoresDisplay: [] // HTML to display
    };

    [player1, cpu]
        .forEach((player, index) => {
            // Contains total score for player
            let total = 0;

            let output = "";

            // Compute individul roll scores
            [
                [1, 3],
                [3, 4],
                [6, 6]
            ]
            player.scores
                .forEach(score => { // [number, number]
                    const rollScore = computeScore(score);

                    output += `<p>Roll ${index + 1}: ${rollScore} [${score[0]}, ${score[1]}]</p>`;

                    total += rollScore;
                });

            stats.finalScores.push(total);
            stats.scoresDisplay.push(output);
            stats.totalScoresDisplay.push(`<p>${player.name} score: ${total}</p>`);
        });

    const playerScores = document.getElementById('player_scores');
    const playerTotalScore = document.getElementById('player_total_score');
    const playerDices = document.getElementById('player_dices');

    playerScores.innerHTML = stats.scoresDisplay[0];
    playerTotalScore.innerHTML = stats.totalScoresDisplay[0];

    const computerScores = document.getElementById('computer_scores');
    const computerTotalScore = document.getElementById('computer_total_score');
    const computerDices = document.getElementById('cpu_dices');

    computerScores.innerHTML = stats.scoresDisplay[1];
    computerTotalScore.innerHTML = stats.totalScoresDisplay[1];
    // 

    const winner = document.getElementById('winner');

    if (player1.rolls === 3 && cpu.rolls === 3) {
        if (stats.finalScores[0] > stats.finalScores[1]) {
            winner.innerHTML = `<p>The Winner is: ${player1.name}</p>`;
        } else if (stats.finalScores[0] < stats.finalScores[1]) {
            winner.innerHTML = `<p>The Winner is: ${cpu.name}</p>`;
        } else {
            winner.innerHTML = `<p>Draw game!</p>`;
        }
    } else {
        winner.innerHTML = "";
    }
}

function playerRollsDice(player) {
    if (player.rolls < 3) {
        const results = rollDices();

        player.rolls++;
        player.dices = results;
        player.scores.push(results);
        console.log(results[0]);

        refreshView();
    }
}

function reset() {
    [player1, cpu]
        .forEach(player => {
            player.rolls = 0;
            player.scores = [];
            player.dices = [null, null];
        });

    refreshView();
}

reset();

refreshView();

