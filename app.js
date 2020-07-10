// runs the broader logic of the app and provides for a management of the size of the grid as well as number of boxes to match.
// through changing these values the game can be changed to a connect 5, with a 8 x 8 grid. Game width may need to be adjusted to
// align the grid.
const squaresAcross = 7;
const sqaresDown = 6;
const matchBoxCount = 4;
const gameWidth = '400px';
let color = null;
const object = {}

//const body = document.getElementById('game-div');

class Game {
    constructor(squaresAcross, sqaresDown, matchBoxCount, body){
        this.squaresAcross = 7;
        this.sqaresDown = 6;
        this.matchBoxCount = 4;
        this.body = document.getElementById('game-div');
        this.dropRows = `u${Math.floor(Math.random() * 1000)}`;
        this.divName = `${Math.floor(Math.random() * 1000)}`;
    }
     
    play(){
        Object.assign(object,{[`${this.divName}`]:null});
       return gameMaker(this.squaresAcross, this.sqaresDown, this.body, this.dropRows, this.divName);
    }
    listen(){
        const dropRows = this.dropRows;
        const divName = this.divName;
        this.body.addEventListener('click', function(e){

            if (e.target.className === dropRows){
                console.log(object);
                toggleClassName(divName, object); //located in gamelogic.js
                let colorChoice = '';
                for (let element in object){
                    if (divName === element){
                        colorChoice = object[element];
                    }
                }
                const findr = Array.from(document.getElementsByClassName(e.target.id)).reverse();
                //console.log(findr);

                return colorizor(findr, colorChoice, divName); //located in grid.js
                }
            });
    }
}

const gm = new Game();
gm.play();
gm.listen();

const gm1 = new Game();
gm1.play();
gm1.listen();

const gm2 = new Game();
gm2.play();
gm2.listen();

const gm3 = new Game();
gm3.play();
gm3.listen();

