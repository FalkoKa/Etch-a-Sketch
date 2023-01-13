const grid = document.querySelector('.grid');

function createSquares(size) {
    for (let i = size; i > 0; i--) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover', changeColor);
        grid.append(square);
    }
}

function changeColor () {

}