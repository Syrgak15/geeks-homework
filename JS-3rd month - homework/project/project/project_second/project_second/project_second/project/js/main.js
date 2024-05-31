// RANDOM COLOR GENERATOR

const buttonsColor = document.querySelectorAll('.btn-color')
const javaScript = document.querySelector('#js-color')

const generateRandomColor = () => {
    const hexCodes = '0123456789ABCDEF'
    let color = ''
    for (let i = 0; i < 6; i++) {
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
    }
    return '#' + color
}

const setRandomColors = () => {
    buttonsColor.forEach((buttonColor) => {
        buttonColor.innerHTML = generateRandomColor()
        buttonColor.onclick = (event) => {
            javaScript.style.color = event.target.innerHTML
        }
    })
}

window.onload = () => setRandomColors()
window.onkeydown = (event) => {
    if (event.code.toLowerCase() === 'space') {
        event.preventDefault()
        setRandomColors()
    }
}

// SLIDER BLOCK

const slides = document.querySelectorAll('.slide_card');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
let index = 0;

const hideSlides = () => {
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });
}

const showSlide = (i = 0) => {
    slides[i].style.display = 'block';
}

hideSlides();
showSlide(index);

const autoSlider = () => {
    setInterval(() => {
        index++;
        if (index > slides.length - 1) {
            index = 0;
        }
        hideSlides();
        showSlide(index);
    }, 5000);
}

autoSlider();

next.addEventListener('click', () => {
    index++;
    if (index > slides.length - 1) {
        index = 0;
    }
    hideSlides();
    showSlide(index);
});

prev.addEventListener('click', () => {
    index--;
    if (index < 0) {
        index = slides.length - 1;
    }
    hideSlides();
    showSlide(index);
});



//async await,try catch

// const url = 'https://jsonplaceholder.typicode.com/todos/'
// const fetchTodo = ()=>{
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(response => response.json())
//         .then(data =>{
//             console.log(data)
//         })
//
// }
// fetchTodo()
//
const fetchAsyncTodo = async ()=>{
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.comm/todos/1`)
        const data =  await response.json()
        console.log(data)
    } catch(error){
        console.log(error)
    }

}
fetchAsyncTodo()