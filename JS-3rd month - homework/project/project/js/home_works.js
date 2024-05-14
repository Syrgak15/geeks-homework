// gmail validation

const gmailInput = document.querySelector('#gmail_input');
const gmailButton = document.querySelector('#gmail_button');
const gmailResult = document.querySelector('#gmail_result');

const regExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

gmailButton.onclick = () => {
    if(regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'ok';
        gmailResult.style.color = 'green';
    }else{
        gmailResult.innerHTML = 'not ok';
        gmailResult.style.color = 'red';
    }
};

//block mover
const block = document.querySelector('.child_block');
const parentBlock = document.querySelector('.parent_block');
let movePxCountX = 0;
let movePxCountY = 0;
const parentWidth = parentBlock.offsetWidth - block.offsetWidth;
const parentHeight = parentBlock.offsetHeight - block.offsetHeight;

const mover = () => {
    if (movePxCountX < parentWidth && movePxCountY <= 0) {
        movePxCountX++;
        block.style.left = `${movePxCountX}px`;
    }else if (movePxCountX >= parentWidth && movePxCountY < parentHeight) {
        movePxCountY++;
        block.style.top = `${movePxCountY}px`;
    }else if(movePxCountX > 0 && movePxCountY >= parentHeight) {
        movePxCountX--;
        block.style.left = `${movePxCountX}px`;
    }else if(movePxCountX === 0){
        movePxCountY--;
        block.style.top = `${movePxCountY}px`;
    }

    requestAnimationFrame(mover)

};
mover()


//TIMER
const timer = document.querySelector('.interval')
const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const resetButton = document.querySelector('#reset');

let count = 0;
let interval = 0;
let isStartButtonClicked = false;

startButton.addEventListener('click', () => {
    if (!isStartButtonClicked) {
        isStartButtonClicked = true;
        interval = setInterval(() => {
            count++;
            timer.innerHTML = count;
        }, 1000);
    }
});

stopButton.addEventListener('click', () => {
    isStartButtonClicked = false;
    clearInterval(interval);
});

resetButton.addEventListener('click', () => {
    isStartButtonClicked = false;
    clearInterval(interval);
    count = 0;
    timer.innerHTML = count;
});









