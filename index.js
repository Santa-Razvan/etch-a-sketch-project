const container = document.querySelector('.container');
const squaresButton = document.createElement('button');
const clearButton = document.createElement('button');
const buttonContainer = document.createElement('div');
const body = document.querySelector('body');

buttonContainer.style.cssText = "height:50px;width:500px;display:flex;justify-content:center;align-items:center;";
body.insertBefore(buttonContainer, container);

squaresButton.textContent = "Number of squares";
squaresButton.style.cssText = "padding:6px 30px; border:1px solid black; border-radius:6px;background-color:rgb(200,124,50); margin-right:10px;";
buttonContainer.appendChild(squaresButton);

clearButton.textContent = "Clear";
clearButton.style.cssText = "padding:6px 30px; border:1px solid black; border-radius:6px; background-color:rgb(200,124,50);";
buttonContainer.appendChild(clearButton);

let numberSquares;

squaresButton.addEventListener('mouseenter', () => {
    squaresButton.style.backgroundColor = 'rgb(180,104,30)';
});
squaresButton.addEventListener('mouseleave', () => {
    squaresButton.style.backgroundColor = 'rgb(200,124,50)';
});

clearButton.addEventListener('mouseenter', () => {
    clearButton.style.backgroundColor = 'rgb(180,104,30)';
});
clearButton.addEventListener('mouseleave', () => {
    clearButton.style.backgroundColor = 'rgb(200,124,50)';
});

squaresButton.addEventListener('click', (e) => {
    do {
        numberSquares = prompt("Pick a number of squares between 1-100 to set your drawing space: ");
        if (numberSquares === null) {
            break;
        }
    } while (!((numberSquares > 0) && (numberSquares < 101)));

    for (let i = 0; i < numberSquares; i++) {
        for (let j = 0; j < numberSquares; j++) {
            const squares = document.createElement('div');
            squares.style.cssText = "height:10px; width:10px; border:0.1px solid black; background-color: white;";
            container.style.cssText = "height:700px;width:1650px;";
            squares.addEventListener("mouseenter", (e) => {
                e.target.style.backgroundColor = "blue";
            });
            container.appendChild(squares);
        }

    }
});

clearButton.addEventListener('click', () => {
    for (let i = 0; i < numberSquares; i++) {
        for (let j = 0; j < numberSquares; j++) {
            squares.style.backgroundColor = "white";
        }
    }
});

