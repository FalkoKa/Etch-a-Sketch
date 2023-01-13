const grid = document.querySelector('.grid');
const btnSize = document.querySelector('#grid-size');
const btnClear = document.querySelector('#clear');

btnSize.addEventListener('click', getGridSize);
btnClear.addEventListener('click', clearGrid);

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
    let gridSize = parseInt(prompt('Choose the grid size'))

    if (gridSize < 1) { gridSize = parseInt(prompt('Choose a grid size bigger than 0'))}; 
    if (gridSize > 99) { gridSize = parseInt(prompt('Choose a grid size smaller than 100'))}; 

return gridSize;
}

function clearGrid() {
    // remove all divs
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.remove())
}
