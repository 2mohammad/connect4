function winCheck(element, color){

    // this function creates the logic to capture DOM elements required to calculate connect 4s in the vertical, diagnonal, and cross positions.
    // each of the for loops begins at the latest circle and captures into an array the div elements for each of the 4 arrays.

    // DOM value of latest circle
    const boxValue = parseInt(element);

    // arrays to capture DOM divs for diagonal, vertical and cross matches based on boxValue. 
    const diag = [];
    const vert = [];
    const leftEleven = [];
    const rightEleven = [];

    // these variables use modulus operations to capture the start row or column for each of the diagonal and vertical arrays.  
    const diagStart = boxValue - (boxValue % 10);
    const vertStart = (boxValue % 10)+10;

    // this variable captures the column position of the box value within the row. If box value is 63; then 
    // column value is the 4th column.  
    const iterations = parseInt(document.getElementById(boxValue).classList.value[1]);
    let leftIterations = iterations;
    let rightIterations = squaresAcross - iterations;
   
    // these variables establish the counting system for the div elements that make up the grid.
    // in this case, the rows increment down at a base 10, and div elements increment by 1.
    const rowBase = 10;
    const leftIncrement = rowBase - 1;
    const rightIncrement = rowBase + 1;
    const maxDiv = rowBase * squaresAcross + squaresAcross;

    // for loops to capture diagonal and vertical div elements; takes in the diagonal start, captures the DOM element
    // and pushes the element to the array.
    for (let i = 0; i < squaresAcross; i++){
        const values = (diagStart+i);
        const buck = document.getElementById(`${values}`);
        diag.push(buck);
    }

    for (let i = 0; i < sqaresDown; i++){
        const values = vertStart + (i * rowBase);
        const buck = document.getElementById(`${values}`);
        vert.push(buck);
    }

    // for loops to capture cross right and left div elements based on increment and decrement from the most recent circle no longer white.
    // only captures those values that are not null.  
    for (let i = boxValue; leftIterations >= 0; i= i - rightIncrement){
        const buck = document.getElementById(`${i}`);
        if (buck === null){

        }
        else{
            leftEleven.push(buck);
        }
        leftIterations--;
    }
    for (let i = boxValue; i <= maxDiv; i= i + rightIncrement){
        const buck = document.getElementById(`${i}`);
        if (buck === null){

        }
        else{
        leftEleven.push(buck);
        }
    }
    for (let i = boxValue; i <= maxDiv; i= i + leftIncrement){
        const buck = document.getElementById(`${i}`);
        if (buck === null){

        }
        else{
        rightEleven.push(buck); 
        }
        }
    for (let i = boxValue; rightIterations >= 0; i= i - leftIncrement){
        const buck = document.getElementById(`${i}`);
        if (buck === null){

        }
        else{
            rightEleven.push(buck);
        }
        rightIterations--;
    }

// final arrays from the cross arrays; using the spread operator to return an array out of the set. 
// using the set operator to eliminate duplicates. 
    const rightCheck = [...new Set(rightEleven)];
    const leftCheck = [...new Set(leftEleven)];

    // function calls to check if captured arrays contain any wins. 
    checkWins(vert, color, matchBoxCount);
    checkWins(diag, color, matchBoxCount);
    checkWins(rightCheck, color, matchBoxCount);
    checkWins(leftCheck, color, matchBoxCount);

}
// iterates over the passed array after sorting it, and determines if a connect 4 scenario exists.
// returs the alert if a winner exists.
const checkWins = (array, color, matchBoxCount)=>{
    let check = 0;
    array.sort(function(a,b){
        return parseInt(a.id) - parseInt(b.id);
    });
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
