/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/



const init = () => {
    active = 0;
    roundScore = 0;
    scores = [0, 0]
    document.getElementById('score-0').textContent = '0'
    document.getElementById('score-1').textContent = '0'
    document.getElementById('current-1').textContent = '0'
    document.getElementById('current-0').textContent = '0'
    document.getElementById('dicey').style.display = 'none'
    document.querySelector('#name-0').textContent = 'Player 1'
    document.querySelector('#name-1').textContent = 'Player 2'
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');



}
init()

document.querySelector('.btn-roll').addEventListener('click', () => {
    //generate random number
    var dice = Math.floor(Math.random() * 6) + 1

    //displaying the dice
    if (dice != 1) {
        var diceDom = document.querySelector('.dice');
        diceDom.style.display = 'block'
        diceDom.src = 'dice-' + dice + '.png'
    } else {
        document.querySelector('.dice').style.display = 'none'
    }
    //update round score
    if (dice != 1) {
        //document.querySelector('#current-' + active).innerHTML = dice;
        roundScore = dice
        document.querySelector('#current-' + active).innerHTML = dice
    } else {
        nextPlayer()

    }


})

document.querySelector('.btn-hold').addEventListener('click', () => {
    //Add current score to global score
    scores[active] += roundScore;



    //update the UI
    document.querySelector('#score-' + active).textContent = scores[active]

    //nextplayer


    // Check winner

    if (scores[0] >= 100) {
        //alert('Player 1 wins')
        document.querySelector('#name-0').textContent = 'Player ' + '1' + ' wins'
        document.querySelector('.dice').style.display = 'none'
        document.querySelector('#score-0').textContent = 0
        document.querySelector('#score-1').textContent = 0
        document.querySelector('#current-0').textContent = 0
        document.querySelector('#current-1').textContent = 0
        document.querySelector('.player-0-panel').classList.add('winner');
        document.querySelector('.player-0-panel').classList.remove('active');


    }
    else if (scores[1] >= 100) {
        //  alert('Player 2 wins')
        document.querySelector('#name-1').textContent = 'Player ' + '2' + ' wins'
        document.querySelector('.player-1-panel').classList.add('winner');
        document.querySelector('#score-0').textContent = 0
        document.querySelector('#score-1').textContent = 0
        document.querySelector('#current-0').textContent = 0
        document.querySelector('#current-1').textContent = 0
        document.querySelector('.dice').style.display = 'none'
        document.querySelector('.player-1-panel').classList.remove('active');

    } else {
        nextPlayer();
        document.querySelector('.dice').style.display = 'none'

        //document.querySelector('.restart').style.display = 'show'
    }


})

const nextPlayer = () => {
    active === 0 ? active = 1 : active = 0;
    roundScore = 0

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0'
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active')
}

document.querySelector('.btn-new').addEventListener('click', init)

