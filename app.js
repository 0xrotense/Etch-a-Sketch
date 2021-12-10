const container = document.querySelector('.container');
const btnBlack = document.createElement('button');
const btnGray = document.createElement('button');
const btnRainbow = document.createElement('button');
// const btnRGB = document.createElement('button');
const btnSize = document.createElement('button');
// const section = document.querySelector('.section')
const buttonsContainer = document.querySelector('.buttons');


function createDivs(col , rows){
    for(let i = 0; i < (col * rows); i++){
        const div = document.createElement('div')
        div.style.border = "1px solid red"
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`
        container.appendChild(div).classList.add('box')
    }
}

createDivs(16,16);

function grayColor() {
    const boxs = container.querySelectorAll('.box');
    btnGray.textContent = 'Gray Cubes';
    btnGray.addEventListener('click', () => {
        boxs.forEach(box => box.addEventListener('mouseover', () => {
            let Rnum = Math.floor(Math.random() * 255);
            box.style.background = `rgb(${Rnum},${Rnum},${Rnum})`;
        }))
    })
    buttonsContainer.appendChild(btnGray).classList.add('.btn');
}


function blackColor() {
    const boxs = container.querySelectorAll('.box');
    btnBlack.textContent = 'Black';
    btnBlack.addEventListener('click', () => {
        boxs.forEach(box => box.addEventListener('mouseover', () => {
            box.style.background = 'black';
        }))
    })
    buttonsContainer.appendChild(btnBlack).classList.add('.btn');
}


function rainbowColor() {
    const boxs = container.querySelectorAll('.box');
    btnRainbow.textContent = 'Rainbow';
    btnRainbow.addEventListener('click', () => {
        boxs.forEach(box => box.addEventListener('mouseover', () => {
            let R = Math.floor(Math.random() * 255);
            let G = Math.floor(Math.random() * 255);
            let B = Math.floor(Math.random() * 255);
            box.style.background = `rgb(${R},${G},${B})`;
        }))
    })
    buttonsContainer.appendChild(btnRainbow).classList.add('.btn');
}


const reSet = () => {
    const boxs = container.querySelectorAll('.box')
    boxs.forEach(box => box.remove());
}

function reSize() {
    btnSize.textContent = 'Change Grid Size';
    btnSize.addEventListener('click', () => {
        let userInput = prompt('What size did you want your grid to be?');
        if(userInput === null || userInput < 1) {
            reSet()
            createDivs(16,16)
            rainbowColor()
            grayColor()
            blackColor()
        } 
        else {
            reSet()
            createDivs(userInput, userInput)
            rainbowColor()
            grayColor()
            blackColor()
        }
    })
    buttonsContainer.appendChild(btnSize).classList.add('.btn');
}

reSize()
rainbowColor();
grayColor();
blackColor();

function backgroundAnim () {
    colors = ['red', 'blue', 'yellow', 'green'];
}