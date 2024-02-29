let colorCircle = document.getElementById("outer-circle");
let innerShape = document.getElementById("square");

let changeColor = document.getElementById("change-color");
let changeShape = document.getElementById("change-shape");

let idx = 0;
let shapeIdArray = ["triangle", "circle", "diamond", "rectangle", "square"];

function getRandomColor() {
    let letters = "0123456789ABCDEFabcdef";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

changeColor.addEventListener("click", () => {
    colorCircle.style.backgroundColor = getRandomColor();
});


changeShape.addEventListener("click", () => {
    if (idx == 5) {
        idx = 0;
    }
    let newId = shapeIdArray[idx];
    innerShape.id = newId;
    idx++;
});



