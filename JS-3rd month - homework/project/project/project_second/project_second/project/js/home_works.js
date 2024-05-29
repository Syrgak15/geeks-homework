// gmail validation

const gmailInput = document.querySelector('#gmail_input');
const gmailButton = document.querySelector('#gmail_button');
const gmailResult = document.querySelector('#gmail_result');
const receiveBtn = document.querySelector("#rcv-btn");
const formWrapper = document.querySelector("#form");


const regExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
receiveBtn.onclick = ()=>{
    if(formWrapper.style.display === 'none') {
        formWrapper.style.display = 'block';
    }else {
        formWrapper.style.display = 'none';
    }
}
gmailButton.onclick = () => {
    if(regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'Congratulations! The brochure will be sent to your email soon.';
        gmailResult.style.color = 'green';
    }else{
        gmailResult.innerHTML = 'Please write your email correctly.';
        gmailResult.style.color = 'red';
    }
};


//block mover
const block = document.querySelector('.child_block');
const blockSecond = document.querySelector('.second');
const blockThird = document.querySelector('.third');
const blockFourth = document.querySelector('.fourth');
const blockFifth = document.querySelector('.fifth');
const blockSixth = document.querySelector('.sixth');
const parentBlock = document.querySelector('.parent_block');
let movePxCountX = 0;
let movePxCountY = 0;
let movePxCountX2 = 0;
let movePxCountY2 = 0;
let movePxCountX3 = 0;
let movePxCountY3 = 0;
let movePxCountX4 = 0;
let movePxCountY4 = 0;
let movePxCountX5 = 0;
let movePxCountY5 = 0;
let movePxCountX6 = 0;
let movePxCountY6 = 0;
const parentWidth = parentBlock.offsetWidth - block.offsetWidth;
const parentHeight = parentBlock.offsetHeight - block.offsetHeight;

const moveFirstBlock = () => {
    if (movePxCountX < parentWidth && movePxCountY <= 0) {
        movePxCountX++;
        block.style.left = `${movePxCountX}px`;

    } else if (movePxCountX >= parentWidth && movePxCountY < parentHeight) {
        movePxCountY++;
        block.style.top = `${movePxCountY}px`;
    } else if (movePxCountX > 0 && movePxCountY >= parentHeight) {
        movePxCountX--;
        block.style.left = `${movePxCountX}px`;
    } else if (movePxCountX === 0) {
        movePxCountY--;
        block.style.top = `${movePxCountY}px`;
    }
    requestAnimationFrame(moveFirstBlock)
}
const moveSecondBlock = () => {
    if (movePxCountX2 < parentWidth && movePxCountY2 <= 0) {
        movePxCountX2++;
        blockSecond.style.left = `${movePxCountX2}px`;

    } else if (movePxCountX2 >= parentWidth && movePxCountY2 < parentHeight) {
        movePxCountY2++;
        blockSecond.style.top = `${movePxCountY2}px`;
    } else if (movePxCountX2 > 0 && movePxCountY2 >= parentHeight) {
        movePxCountX2--;
        blockSecond.style.left = `${movePxCountX2}px`;
    } else if (movePxCountX2 === 0) {
        movePxCountY2--;
        blockSecond.style.top = `${movePxCountY2}px`;
    }
    requestAnimationFrame(moveSecondBlock)
}
const moveThirdBlock = () => {
    if (movePxCountX3 < parentWidth && movePxCountY3 <= 0) {
        movePxCountX3++;
        blockThird.style.left = `${movePxCountX3}px`;
    } else if (movePxCountX3 >= parentWidth && movePxCountY3 < parentHeight) {
        movePxCountY3++;
        blockThird.style.top = `${movePxCountY3}px`;
    } else if (movePxCountX3 > 0 && movePxCountY3 >= parentHeight) {
        movePxCountX3--;
        blockThird.style.left = `${movePxCountX3}px`;
    } else if (movePxCountX3 === 0) {
        movePxCountY3--;
        blockThird.style.top = `${movePxCountY3}px`;
    }
    requestAnimationFrame(moveThirdBlock);
}
const moveFourthBlock = () => {
    if (movePxCountX4 < parentWidth && movePxCountY4 <= 0) {
        movePxCountX4++;
        blockFourth.style.left = `${movePxCountX4}px`;
    } else if (movePxCountX4 >= parentWidth && movePxCountY4 < parentHeight) {
        movePxCountY4++;
        blockFourth.style.top = `${movePxCountY4}px`;
    } else if (movePxCountX4 > 0 && movePxCountY4 >= parentHeight) {
        movePxCountX4--;
        blockFourth.style.left = `${movePxCountX4}px`;
    } else if (movePxCountX4 === 0) {
        movePxCountY4--;
        blockFourth.style.top = `${movePxCountY4}px`;
    }
    requestAnimationFrame(moveFourthBlock);
}
const moveFifthBlock = () => {
    if (movePxCountX5 < parentWidth && movePxCountY5 <= 0) {
        movePxCountX5++;
        blockFifth.style.left = `${movePxCountX5}px`;
    } else if (movePxCountX5 >= parentWidth && movePxCountY5 < parentHeight) {
        movePxCountY5++;
        blockFifth.style.top = `${movePxCountY5}px`;
    } else if (movePxCountX5 > 0 && movePxCountY5 >= parentHeight) {
        movePxCountX5--;
        blockFifth.style.left = `${movePxCountX5}px`;
    } else if (movePxCountX5 === 0) {
        movePxCountY5--;
        blockFifth.style.top = `${movePxCountY5}px`;
    }
    requestAnimationFrame(moveFifthBlock);
}
const moveSixthBlock = () => {
    if (movePxCountX6 < parentWidth && movePxCountY6 <= 0) {
        movePxCountX6++;
        blockSixth.style.left = `${movePxCountX6}px`;
    } else if (movePxCountX6 >= parentWidth && movePxCountY6 < parentHeight) {
        movePxCountY6++;
        blockSixth.style.top = `${movePxCountY6}px`;
    } else if (movePxCountX6 > 0 && movePxCountY6 >= parentHeight) {
        movePxCountX6--;
        blockSixth.style.left = `${movePxCountX6}px`;
    } else if (movePxCountX6 === 0) {
        movePxCountY6--;
        blockSixth.style.top = `${movePxCountY6}px`;
    }
    requestAnimationFrame(moveSixthBlock);
}


setTimeout(moveFirstBlock, 1000);
setTimeout(moveSecondBlock, 3000);
setTimeout(moveThirdBlock, 5000);
setTimeout(moveFourthBlock, 7000);
setTimeout(moveFifthBlock, 9000);
setTimeout(moveSixthBlock, 11000)

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









