function winCheck(element, color, divName){

    // this function creates the logic to capture DOM elements required to calculate connect 4s in the vertical, diagnonal, and cross positions.
    // each of the for loops begins at the latest circle and captures into an array the div elements for each of the 4 arrays.

    // DOM value of latest circle
    const boxValue = element;
    console.log('boxValue'+boxValue);
    // arrays to capture DOM divs for diagonal, vertical and cross matches based on boxValue. 
    const diag = [];
    const vert = [];
    const left = [];
    const right = [];

    // these variables use modulus operations to capture the start row or column for each of the diagonal and vertical arrays.  
    const diagStart = boxValue - (boxValue % 10);
    const vertStart = (boxValue % 10)+10;

    // this variable captures the column position of the box value within the row. If box value is 63; then 
    // column value is the 4th column.  
    const diagIterations = parseInt(element[1]);
    let rightIterations = diagIterations;
    let leftIterations = squaresAcross - diagIterations;
    
    const vertIterations = parseInt(element[0]);
    //console.log(vertIterations);
    let downIterations = vertIterations;
    let upIterations = sqaresDown - downIterations;
    console.log(upIterations);
    console.log(downIterations);

    // these variables establish the counting system for the div elements that make up the grid.
    // in this case, the rows increment down at a base 10, and div elements increment by 1.
    const rowBase = 10;
    const leftIncrement = rowBase - 1;
    const rightIncrement = rowBase + 1;
    const maxDiv = parseInt(divName.substring(1,5)+(rowBase * squaresAcross + squaresAcross).toString());

    // for loops to capture diagonal and vertical div elements; takes in the diagonal start, captures the DOM element
    // and pushes the element to the array.
    for (let i = 0; i < squaresAcross; i++){
        const values = (diagStart+i);
        //console.log(values);
        const buck = document.getElementById(`${divName.substring(0,4)}${values}`);
        diag.push(buck);
        //console.log(diag);
    }

    for (let i = 0; i < sqaresDown; i++){
        const values = vertStart + (i * rowBase);
        const buck = document.getElementById(`${divName.substring(0,4)}${values}`);
        vert.push(buck);
    }
// left -up
    for (let i = parseInt(boxValue); leftIterations <= squaresAcross; i = i - 11){
        const buck = document.getElementById(`${divName.substring(0,4)}${i}`);
        if(buck === null){

        }
        else{
            left.push(buck);
        }
        leftIterations++;
    }

// left -down
    for(let i = parseInt(boxValue); downIterations <= sqaresDown; i = i + 11){
        const buck = document.getElementById(`${divName.substring(0,4)}${i}`);
        if(buck === null){

        }
        else{
            left.push(buck);
        }
        downIterations++;
    }


// right -up
for (let i = parseInt(boxValue); rightIterations < squaresAcross; i = i - 9){
    const buck = document.getElementById(`${divName.substring(0,4)}${i}`);
    if(buck === null){

    }
    else{
        right.push(buck);
    }
    rightIterations++;  
}

// right -down
for (let i = parseInt(boxValue); upIterations <= sqaresDown; i = i + 9){
    const buck = document.getElementById(`${divName.substring(0,4)}${i}`);
    if(buck === null){

    }
    else{
        right.push(buck);
    }
    upIterations++;
}

console.log(left);
console.log(right);
// final arrays from the cross arrays; using the spread operator to return an array out of the set. 
// using the set operator to eliminate duplicates. 
    const rightCheck = [...new Set(right)];
    const leftCheck = [...new Set(left)];
  
    // function calls to check if captured arrays contain any wins. 
    checkWins(vert, color, matchBoxCount);
    checkWins(diag, color, matchBoxCount);
    checkWins(rightCheck, color, matchBoxCount);
    checkWins(leftCheck, color, matchBoxCount);

}
// // iterates over the passed array after sorting it, and determines if a connect 4 scenario exists.
// // returs the alert if a winner exists.
const checkWins = (array, color, matchBoxCount)=>{
    let check = 0;
    array.sort(function(a,b){
        return a - b;
    });
    console.log(array);
    for (let elements = 0; elements < array.length; elements++){
        if (array[elements].style.backgroundColor === color){
            check++;
           }
        else {
            check = 0;
        }
        if (check === matchBoxCount){
            setTimeout(()=>{
                alert(color + ' wins');
            }, 300);

        }
    }
}
