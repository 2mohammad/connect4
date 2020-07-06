// created the grid for drop rows and circles.
const gameMaker = (across, down, body) => {
    const gameDiv = document.createElement('div');
    gameDiv.style.width = gameWidth;
    gameDiv.className = 'game-divs';
    body.appendChild(gameDiv);
    for (let i = 0; i < across; i++){
        const dropRow = document.createElement('div');
        dropRow.id = `h${i}`;
        dropRow.className = 'drop-rows';
        dropRow.style.width = '50px';
        dropRow.style.height = '50px';
        dropRow.style.border = 'dotted 1px #666';
        dropRow.style.borderRadius = '50%';
        dropRow.style.float = 'left';
        gameDiv.appendChild(dropRow);    
    }
    for (let q = 1; q <=  down; q++){
        for (let i = 0; i < across; i++){
            const gameBox = document.createElement('div');
            gameBox.id = `${q}${i}`;
            gameBox.classList = `h${i}`;
            gameBox.color = null;
            gameBox.location = `${q}${i}`;
            gameBox.style.width = '50px';
            gameBox.style.height = '50px';
            gameBox.style.borderRadius = '50%';
            gameBox.style.border = 'solid 1px #666';
            gameBox.style.float = 'left';
            gameDiv.appendChild(gameBox);
        }
        const gameRow = document.createElement('p');
        gameDiv.appendChild(gameRow);
    }
}

// toggles between red and blue colors.
function toggleClassName(){
    if (color === null){
        return color = 'blue';
    } else if (color === 'blue'){
        return color = 'red';//red
    } else if (color === 'red'){
        return color = 'blue';
    }
}
// colors the circle and runs a wincheck function to determine if a connect 4 scenario exists.
const colorizor = (array, colorChoice) =>{
    for (let element of array){
        if (element.color === null){
            element.color = colorChoice;
            element.style.backgroundColor = colorChoice;
            element.style.borderColor = 'white';
            winCheck(element.location, colorChoice);
            break;
        }
    }
}