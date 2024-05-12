//MODAL


const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const modalCloseBtn = document.querySelector('.modal_close')


const openModel = ()=>{
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}
modalTrigger.onclick = () =>{
    openModel()
}
const closeModel = ()=>{
    modal.style.display = 'none';
    document.body.style.overflow = '';

}
modalCloseBtn.onclick = () =>{
    closeModel()
}

modal.onclick = (event)=>{
    if(event.target === modal){
        closeModel()
    }
}
