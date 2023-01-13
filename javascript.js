const grid = document.querySelector('.grid');
const btnSize = document.querySelector('#grid-size');
const btnClear = document.querySelector('#clear');
let gridSize = 16;

btnSize.addEventListener('click', getGridSize);
btnClear.addEventListener('click', clearGrid);


createSquares(gridSize);

function createSquares(size) {
    for (let i = size * size; i > 0; i--) {
        const height = 400 / size;
        const width = 400 / size;
        const square = document.createElement('div');
        square.style.cssText=`height: ${height}px; width: ${width}px;`;
        square.classList.add('square');
        square.addEventListener('mouseover', changeColor);
        // square.addEventListener('mousedown', changeColor);
        grid.append(square);
    }
}

function changeColor () {
    this.classList.add('hov')
}

function getGridSize() {
    clearGridNoNewGrid();
    gridSize = parseInt(prompt('Choose the grid size'))

    if (gridSize < 1) { gridSize = parseInt(prompt('Choose a grid size bigger than 0'))}; 
    if (gridSize > 64) { gridSize = parseInt(prompt('Choose a grid between 1 and 64'))}; 
    return createSquares(gridSize);
}

function clearGrid() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.remove());
    createSquares(gridSize);
}

function clearGridNoNewGrid() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.remove());
}
