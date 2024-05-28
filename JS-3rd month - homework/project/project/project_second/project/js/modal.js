//MODAL


const modal = document.querySelector('.modal');
const modalTwo = document.querySelector('.modal_two');
const modalTrigger = document.querySelector('#btn-get');
const modalCloseBtn = document.querySelector('.modal_close');
const btnSend = document.querySelector('.btn_min');
const lowestBox = document.querySelector('.lowestBox');

let isFormSubmitted = false;


const openModel = () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
};

const openModelTwo = () => {
    modalTwo.style.display = 'block';
    document.body.style.overflow = 'hidden';
};

modalTrigger.onclick = () => {
    openModel()
};

const closeModel = () => {
    modal.style.display = 'none';
    modalTwo.style.display = 'none';
    document.body.style.overflow = '';
};

modalCloseBtn.onclick = () => {
    closeModel();
};

modal.onclick = (event) => {
    if (event.target === modal) {
        closeModel();
    }
};

const handleFormSubmit = (event) => {
    event.preventDefault();
    openModelTwo();
    setTimeout(closeModel, 2000);
    isFormSubmitted = true;
};

btnSend.addEventListener('click', handleFormSubmit, { once: true });



const autoOpenModal = () => {
    setTimeout(() => {
        openModel()

    }, 5000)
}

autoOpenModal()

//MODAL WINDOW FOR WHOLE SITE


const openModalByScroll = () => {
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
        openModel()
        window.removeEventListener('scroll', openModalByScroll)
        }

    }
window.addEventListener('scroll', openModalByScroll)
