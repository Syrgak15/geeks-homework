//PHONE CHECKER

const phoneInput = document.querySelector("#phone_input");
const phoneButton = document.querySelector("#phone_button");
const phoneResult = document.querySelector("#phone_result");

const regExp = /^\+996 [2579]\d{2}\d{2}\d{2}\d{2}$/

phoneButton.onclick = ()=>{
    if(regExp.test(phoneInput.value)){
        phoneResult.innerHTML = "Thanks for giving your number.The message will be sent soon.";
        phoneResult.style.color = "green";
    }else{
        phoneResult.innerHTML = "Please write your number correctly.";
        phoneResult.style.color = "red";

    }
}




//TAB SLIDER

const tabContentBlocks = document.querySelectorAll('.tab_content_block')
const tabContentItems = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')


const hideTabContent = () => {
    tabContentBlocks.forEach(item => {
        item.style.display = 'none';

    })
    tabContentItems.forEach(item => {
        item.classList.remove('tab_content_item_active')
    })


}
//index = 0 - параметр по умолчанию
const showTabContent = (index = 0) => {
    tabContentBlocks[index].style.display = 'block'
    tabContentItems[index].classList.add('tab_content_item_active')

}
hideTabContent()
showTabContent()

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabContentItems.forEach((item, index) => {
            if (event.target === item) {
                hideTabContent()
                showTabContent(index)
            }
        })
    }

const autoSlider = (index = 0) => {
    setInterval(() => {
        index++;
        if (index > tabContentBlocks.length - 1) {
            index = 0;
        }
        hideTabContent()
        showTabContent(index)
    }, 3000)

}
autoSlider()

// CONVERTER
const somInput = document.querySelector('#som')
const usdInput = document.querySelector('#usd')
const liraInput = document.querySelector('#lira')

// somInput.oninput = ()=>{
//     const request = new XMLHttpRequest();
//     request.open('GET','../data/converter.json')
//     request.setRequestHeader('Content-type','application/json')
//     request.send()
//     request.onload = () =>{
//         const data = JSON.parse(request.response)
//         usdInput.value = (somInput.value / data.usd).toFixed(2)
//     }
// }
// usdInput.oninput = ()=>{
//     const request = new XMLHttpRequest();
//     request.open('GET','../data/converter.json')
//     request.setRequestHeader('Content-type','application/json')
//     request.send()
//     request.onload = () =>{
//         const data = JSON.parse(request.response)
//         somInput.value = (usdInput.value * data.usd).toFixed(2)
//
//     }
// }

//DRY - don't repeat yourself
// KISS - keep it simple stupid
// SOLID -

const converter = (element,targetElement,secondTargetElement)=>{
    element.oninput = () => {
        const request = new XMLHttpRequest();
        request.open('GET','../data/converter.json')
        request.setRequestHeader('Content-type','application/json')
        request.send()

        request.onload = () =>{
            const data = JSON.parse(request.response)
            if(element.id === 'som'){
                targetElement.value = (element.value / data.usd).toFixed(2)
                secondTargetElement.value = (element.value*data.somToLira).toFixed(2)
            }
            if(element.id === 'usd'){
                targetElement.value = (element.value * data.usd).toFixed(2)
                secondTargetElement.value = (element.value*data.usdToLira).toFixed(2)
            }
            if(element.id === 'lira'){
                targetElement.value = (element.value/data.usdToLira).toFixed(2)
                secondTargetElement.value = (element.value*data.liraToSom).toFixed(2)
            }
            if(element.value === ''){
                targetElement.value = ''
                secondTargetElement.value = ''
            }


        }
    }


}
converter(somInput,usdInput,liraInput)
converter(usdInput,somInput,liraInput)
converter(liraInput,usdInput,somInput)

// CARD SWITCHER

const card = document.querySelector('.card')
const btnNext = document.querySelector('#btn-next')
const btnPrev = document.querySelector('#btn-prev')
let cardId = 1;
window.onload = ()=>{
    card.style.borderColor = 'red'
    card.innerHTML = `
     <p>delectus aut autem</p>
     <p style="color:red">false</p>
     <span>1</span>  
    `
}


//async await try catch метод
const fetchMethod = async () => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${cardId}`);
        const data = await response.json();
        const { id, title, completed } = data;
        card.style.borderColor = completed ? 'green' : 'red';
        card.innerHTML = `
      <p>${title}</p>
      <p style="color:${completed ? 'green' : 'red'}">${completed}</p>
      <span>${id}</span>
    `;
    } catch (error) {
        console.log(error);
    }
};

fetchMethod()

// const fetchMethod = ()=>{
//     fetch(`https://jsonplaceholder.typicode.com/todos/${cardId}`)
//         .then(response => response.json())
//         .then(data =>{
//             const {id,title,completed} = data
//             card.style.borderColor = completed ? 'green':'red'
//             card.innerHTML = `
//                    <p>${title}</p>
//                     <p style="color:${completed ? 'green' : 'red'}">${completed}</p>
//                     <span>${id}</span>
//
//                     `
//         })
//
// }
btnNext.onclick = ()=>{
    cardId<200? cardId++ : cardId=1;
    fetchMethod()
}

btnPrev.onclick = ()=>{
    cardId>1? cardId--: cardId=200;
    fetchMethod()
}

// fetch post запрос

// const postFetch = ()=>{
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(response =>response.json())
//         .then(data =>{
//             console.log(data)
//         })
// }
// postFetch()

const postFetch = async()=>{
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const data = await response.json();
        console.log(data)
    }catch(error){
        console.log(error)
    }
}
postFetch()

// WEATHER SEARCH
const citySearchInput = document.querySelector('.cityName');
// const buttonSearch = document.querySelector('.search_btn');
const cityName = document.querySelector('.city');
const cityTemp = document.querySelector('.temp');


const URL = 'http://api.openweathermap.org/data/2.5/weather'
const apiKey = 'e417df62e04d3b1b111abeab19cea714'
//e417df62e04d3b1b111abeab19cea714
// query params - параметры запроса
// const citySearch = ()=>{
//     citySearchInput.oninput = (event)=>{
//         fetch(`${URL}?q=${event.target.value}&appid=${apiKey}`)
//             .then(response => response.json())
//             .then(data =>{
//                 cityName.innerHTML=data.name || 'City is not defined';
//                 cityTemp.innerHTML=data.main?.temp ?Math.round(data.main?.temp - 273) + "&deg;C" : ' ';
//             })
//
//     }
//
// }
// citySearch()

const citySearch = async()=>{
    citySearchInput.oninput = async (event) => {
        try{
            const response = await fetch(`${URL}?q=${event.target.value}&appid=${apiKey}`);
            const data = await response.json();
            cityName.innerHTML=data.name || 'City is not defined';
            cityTemp.innerHTML=data.main?.temp ?Math.round(data.main?.temp - 273) + "&deg;C" : ' ';

        }catch(error){
            console.log(error)

        }
    }}
citySearch()}


//optional chaining - ?.

//CARDS
// document.addEventListener('DOMContentLoaded', () => {
//     const cardContent = document.querySelectorAll('.card-content');
//     const browse = document.querySelector('.browse_classes');
//
//     const showAndHideCards = () => {
//         cardContent.forEach(card => {
//             card.style.display = card.style.display === 'none' ? 'block' : 'none';
//         });
//     };
//
//     browse.addEventListener('click', showAndHideCards);
// });

// const cardContent = document.querySelectorAll('.card-content');
// const browse = document.querySelector('.browse_classes');
// const showAndHideCards = () => {
//     cardContent.forEach(card=>{
//         if(card.style.display === 'none'){
//             card.style.display = 'block'
//         }else{
//             card.style.display = 'none'
//         }
//     })
// }
//
// browse.addEventListener('click', () => {
//         showAndHideCards();
// })







