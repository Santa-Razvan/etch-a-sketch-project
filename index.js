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
clearButton.style.cssText = "padding:6px 30px; border:1px solid black; border-radius:6px; background-color:rgb(200,124,50); margin-right:10px";
buttonContainer.appendChild(clearButton);

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


for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const squares = document.createElement('div');
        squares.style.cssText = "height:10px; width:10px; border:0.1px solid black; background-color: white;";
        container.style.cssText = "height:200px;width:300px;";
        squares.addEventListener("mouseenter", (e) => {
            e.target.style.backgroundColor = "blue";
        });
        container.append(squares);
    }
}

let numberSquares;

squaresButton.addEventListener('click', () => {
    do {
        numberSquares = prompt("Pick a number of squares between 1-100 to set your drawing space: ");
        if (numberSquares === null) {
            break;
        }
    } while (!((numberSquares > 0) && (numberSquares < 101)));

    const allSquares = document.querySelectorAll('.container div');
    allSquares.forEach(square => container.removeChild(square));

    for (let i = 0; i < numberSquares; i++) {
        for (let j = 0; j < numberSquares; j++) {
            const squares = document.createElement('div');
            squares.style.cssText = "height:10px; width:10px; border:0.1px solid black; background-color: white;";
            if (numberSquares <= 5) {
                container.style.cssText = "height:120px; width:120px;";
            } else if (numberSquares <= 10) {
                container.style.cssText = "height:180px; width:180px;";
            } else if (numberSquares <= 15) {
                container.style.cssText = "height:200px; width:240px;";
            } else if (numberSquares <= 20) {
                container.style.cssText = "height:240px; width:300px;";
            } else if (numberSquares <= 25) {
                container.style.cssText = "height:280px; width:360px;";
            } else if (numberSquares <= 30) {
                container.style.cssText = "height:320px; width:420px;";
            } else if (numberSquares <= 35) {
                container.style.cssText = "height:360px; width:480px;";
            } else if (numberSquares <= 40) {
                container.style.cssText = "height:410px; width:540px;";
            } else if (numberSquares <= 45) {
                container.style.cssText = "height:450px; width:600px;";
            } else if (numberSquares <= 50) {
                container.style.cssText = "height:490px; width:660px;";
            } else if (numberSquares <= 55) {
                container.style.cssText = "height:530px; width:720px;";
            } else if (numberSquares <= 60) {
                container.style.cssText = "height:570px; width:780px;";
            } else if (numberSquares <= 65) {
                container.style.cssText = "height:610px; width:840px;";
            } else if (numberSquares <= 70) {
                container.style.cssText = "height:660px; width:900px;";
            } else if (numberSquares <= 75) {
                container.style.cssText = "height:700px; width:960px;";
            } else if (numberSquares <= 80) {
                container.style.cssText = "height:730px; width:1020px;";
            } else if (numberSquares <= 85) {
                container.style.cssText = "height:770px; width:1080px;";
            } else if (numberSquares <= 90) {
                container.style.cssText = "height:630px; width:1500px;";
            } else if (numberSquares <= 95) {
                container.style.cssText = "height:670px; width:1560px;";
            } else if (numberSquares <= 100) {
                container.style.cssText = "height:710px; width:1620px;";
            }

            squares.addEventListener("mouseenter", (e) => {
                e.target.style.backgroundColor = "blue";
            });
            container.appendChild(squares);
        }
    }
});


clearButton.addEventListener('click', () => {
    const allSquares = document.querySelectorAll('.container div');
    for (let i = 0; i < allSquares.length; i++) {
        for (let j = 0; j < allSquares.length; j++) {
            allSquares[i].style.backgroundColor = "white";
        }
    }
});

const colorInput = document.createElement('input');
colorInput.setAttribute('type', 'color');
colorInput.style.cssText = "border:none; background-color:rgb(113, 41, 230);";

colorInput.addEventListener('input', () => {
    const color = colorInput.value;
    const allSquares = document.querySelectorAll('.container div');
    for (let i = 0; i < allSquares.length; i++) {
        for (let j = 0; j < allSquares.length; j++) {
            allSquares[i].addEventListener("mouseenter", (e) => {
                e.target.style.backgroundColor = color;
            });
        }
    }
});

buttonContainer.appendChild(colorInput);



