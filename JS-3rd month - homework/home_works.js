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
let movePxCount = 0;
const mover = () =>{
    movePxCount++;
    if(movePxCount < 449){
        block.style.left = `${movePxCount}px`;
    }
    requestAnimationFrame(mover);
}
mover();




