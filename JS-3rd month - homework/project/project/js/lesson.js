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

// const changeTab = (event) => {
//     if (event.target.classList.contains('tab_content_item')) {
//         tabContentItems.forEach((item, index) => {
//             if (event.target === item) {
//                 hideTabContent()
//                 showTabContent(index)
//             }
//         })
//     }
// }
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
const fetchMethod = ()=>{
    fetch(`https://jsonplaceholder.typicode.com/todos/${cardId}`)
        .then(response => response.json())
        .then(data =>{
            const {id,title,completed} = data
                card.style.borderColor = completed ? 'green':'red'
                card.innerHTML = `
                   <p>${title}</p>
                    <p style="color:${completed ? 'green' : 'red'}">${completed}</p>
                    <span>${id}</span>    
                    
                    `
        })

}

btnNext.onclick = ()=>{
    cardId<200? cardId++ : cardId=1;
    fetchMethod()
}

btnPrev.onclick = ()=>{
    cardId>1? cardId--: cardId=200;
    fetchMethod()
}

// fetch post запрос

const postFetch = ()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response =>response.json())
        .then(data =>{
            console.log(data)
        })
}
postFetch()












