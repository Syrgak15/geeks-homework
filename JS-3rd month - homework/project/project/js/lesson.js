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
















