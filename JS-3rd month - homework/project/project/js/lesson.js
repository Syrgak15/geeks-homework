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













