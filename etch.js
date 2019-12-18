
const myGrid = document.getElementById("container");
const clearbtn = document.getElementById("clear");
const resizebtn = document.getElementById("resize");
let mousePressed = false;

makeGrid(16);

window.addEventListener("mousedown", function() {
    mousePressed = true;
});

window.addEventListener("mouseup", function() {
    mousePressed = false;
});

clearbtn.addEventListener("click", resetGrid);


function makeGrid(size) {
    myGrid.style.setProperty('--grid-rows',size);
    myGrid.style.setProperty('--grid-cols', size);
    for (c=0; c < (size * size); c++) {
        let cell = document.createElement("div");
        cell.addEventListener('click', changeColorClick);
        cell.addEventListener('mouseenter', changeColorHold);
        myGrid.appendChild(cell).className = "grid-item";
    };
};


resizebtn.addEventListener("click", resizeGrid);

function resetGrid() {
    const cells = document.querySelectorAll(".grid-item");
    cells.forEach(cell => cell.style.backgroundColor = "");
}

function removeoldGrid() {
    const oldGrid = document.querySelectorAll('.grid-item')
    oldGrid.forEach((item) => {
        item.remove();
    })
}

function resizeGrid() {
    let grid = prompt("Enter Your Grid Size (1-100)", 30);
    let regex = /[0-9]/;
    if (!grid || isNaN(grid) || !grid.match(regex) || grid <= 0 || grid > 100) {
        alert("Input must be between 1 and 100!");
        return;
    }
    removeoldGrid();
    const gridNum = Number(grid);
    makeGrid(gridNum);
}

let currentColor = "black";

document.getElementById(currentColor).classList.add("selected");

function changeColorClick(e) {
    this.style.backgroundColor = currentColor;
}

function changeColorHold(e) {
    if (mousePressed) {
        this.style.backgroundColor = currentColor;
    }
};
