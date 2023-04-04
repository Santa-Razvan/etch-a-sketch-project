const container = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const squares = document.createElement('div');
        squares.style.cssText = "height:30px; width:30px; border:1px solid black;";
        container.appendChild(squares);
    }
}