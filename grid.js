// created the grid for drop rows and circles.
const gameMaker = (across, down, body, dropRows, divName) => {
    const gameDiv = document.createElement('div');
    gameDiv.style.width = gameWidth;
    gameDiv.className = 'game-divs';
    body.appendChild(gameDiv);
    for (let i = 0; i < across; i++){
        const dropRow = document.createElement('div');
        dropRow.id = `${divName}${i}`;//`h${i}`;
        dropRow.className = dropRows;
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
            gameBox.id = `${divName}${q}${i}`;
            gameBox.classList = `${divName}${i}`;//`h${i}`;
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
function toggleClassName(divName, object){
    console.log(object);
    for (let element in object){
            if (object[element] === null && element === divName){
                Object.assign(object,{[element]:"blue"});
                console.log('null');
                return object;
            } else if (element === divName && object[element] === "blue"){
                console.log("red");
                Object.assign(object,{[element]:"red"});
                return object;
            }
            else if (object[element] === 'red' && element === divName){
                console.log('blue')
                Object.assign(object,{[element]:'blue'});
                return object;
            }
    }
    console.log(object);

}
// colors the circle and runs a wincheck function to determine if a connect 4 scenario exists.
const colorizor = (array, colorChoice, divName) =>{
    for (let element of array){
        if (element.color === null){
            element.color = colorChoice;
            element.style.backgroundColor = colorChoice;
            element.style.borderColor = 'white';
            console.log(element.classList.value);
            console.log(element.id);
            winCheck(element.location, colorChoice, divName);
            break;
        }
    }
}