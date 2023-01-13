const grid = document.querySelector('.grid');
const btnSize = document.querySelector('#grid-size');
const btnColor = document.querySelector('#color');
const btnRainbow = document.querySelector('#rainbow');
const btnClear = document.querySelector('#clear');
const btnErase = document.querySelector('#eraser');

let gridSize = 16;
let currentMode = 'color';

btnSize.addEventListener('click', getGridSize);
btnClear.addEventListener('click', clearGrid);
btnErase.addEventListener('click', () => setCurrentMode('eraser'));
btnColor.addEventListener('click', () => setCurrentMode('color'));
btnRainbow.addEventListener('click', () => setCurrentMode('rainbow'));



createSquares(gridSize);

function createSquares(size) {
    for (let i = size * size; i > 0; i--) {
        const height = 400 / size;
        const width = 400 / size;
        const squareDiv = document.createElement('div');
        squareDiv.style.cssText=`height: ${height}px; width: ${width}px;`;
        squareDiv.classList.add('square');
        squareDiv.addEventListener('mouseover', changeColor);
        grid.append(squareDiv);
    }
}

function changeColor(e) {
    if (currentMode === 'color') {
        e.target.style.backgroundColor = 'black';
    } else if (currentMode === 'eraser') {
        e.target.style.backgroundColor = 'white';
    } else if (currentMode === 'rainbow') {
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    }
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

function activeButton(newMode) {
    if (currentMode === 'rainbow') {
        btnRainbow.classList.remove('active')
        } else if (currentMode === 'color') {
        btnColor.classList.remove('active')
        } else if (currentMode === 'eraser') {
        btnErase.classList.remove('active')
    }
    
    if (newMode === 'rainbow') {
        btnRainbow.classList.add('active')
      } else if (newMode === 'color') {
        btnColor.classList.add('active')
      } else if (newMode === 'eraser') {
        btnErase.classList.add('active')
    }
}

function setCurrentMode(newMode) {
    activeButton(newMode);
    currentMode = newMode;
  }