//MODAL


const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const modalCloseBtn = document.querySelector('.modal_close')
const lowestBox = document.querySelector('.lowestBox')


const openModel = () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}
modalTrigger.onclick = () => {
    openModel()
}
const closeModel = () => {
    modal.style.display = 'none';
    document.body.style.overflow = '';

}
modalCloseBtn.onclick = () => {
    closeModel()
}

modal.onclick = (event) => {
    if (event.target === modal) {
        closeModel()
    }
}

const autoOpenModal = () => {
    setTimeout(() => {
        openModel()

    }, 10000)
}

autoOpenModal()

// MODAL WINDOW FOR WHOLE SITE

const openModalByScroll = () => {
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
        openModel()
        window.removeEventListener('scroll', openModalByScroll)
        }

    }
window.addEventListener('scroll', openModalByScroll)
