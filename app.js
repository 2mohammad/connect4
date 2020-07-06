// runs the broader logic of the app and provides for a management of the size of the grid as well as number of boxes to match.
// through changing these values the game can be changed to a connect 5, with a 8 x 8 grid. Game width may need to be adjusted to
// align the grid.
const squaresAcross = 7;
const sqaresDown = 6;
const matchBoxCount = 4;
const gameWidth = '400px';

const body = document.getElementById('game-div');
const dropRows = document.getElementsByClassName('drop-rows');
let color = null;

gameMaker(squaresAcross, sqaresDown, body); //located in grid.js

body.addEventListener('click', function(e){
    if (e.target.className === 'drop-rows'){
        const colorChoice = toggleClassName(); //located in gamelogic.js
        const findr = Array.from(document.getElementsByClassName(e.target.id)).reverse();
        return colorizor(findr, colorChoice); //located in grid.js
        }
    });
