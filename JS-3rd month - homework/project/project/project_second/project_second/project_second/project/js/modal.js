//MODAL


const modal = document.querySelector('.modal');
const modalTwo = document.querySelector('.modal_two');
const modalTrigger = document.querySelector('#btn-get');
const modalCloseBtn = document.querySelector('.modal_close');
const btnSend = document.querySelector('.btn_min');
const lowestBox = document.querySelector('.lowestBox');
const inputs = document.querySelector('.inputs')
const form = document.querySelector('form');


const openModel = () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
};

const openModelTwo = (index) => {
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
