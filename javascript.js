const grid = document.querySelector('.grid');
const btnSize = document.querySelector('#grid-size');

btnSize.addEventListener('click', getGridSize);

function createSquares(size) {
    for (let i = size; i > 0; i--) {
        const square = document.createElement('div');
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

