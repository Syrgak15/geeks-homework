// Напишите функцию, которая каждую секунду выводит в консоль сообщение "Прошла секунда".

const counter = ()=>{
    setInterval(()=>{
        console.log('Прошла секунда')

    },1000)
}
counter()

//  Вывести числа от 1 до 10 с интервалом в 1 секунду, затем остановить.

const count = () => {
    let i = 0;
    const interval = setInterval(()=>{
        i++;
        console.log(i)
        if(i === 10){
            clearInterval(interval);
        }
    } ,1000);
}
count()

//Напишите функцию, которая проверяет, содержит ли строка только цифры. Используйте регулярные выражения

const regExp = /^\d+$/
const containsOnlyDigits = (str) => {
    return regExp.test(str)
}
console.log(containsOnlyDigits("12345"));
console.log(containsOnlyDigits("12a45"));

// Создать блок 150 на 150 пикселей и получить его через дом элементы при нажатии на которую будет меняться его задний фон при повторном нажатии будет убираться цвет заднего фона - выполните эту задачу с использованием classList и его методов
const block = document.querySelector('.block')
block.onclick = (event)=>{
    if(event.target.classList.contains('block')) {
        event.target.classList.add('green')
        console.log(block)
    }else if(event.target.classList.contains('green')){
        event.target.classList.remove('green')

    }


    return
}

// отправить GET запрос

const request = new XMLHttpRequest();
request.open('GET','exam.json');
request.setRequestHeader('Content-type', 'application/json');
request.send()
request.onload = ()=>{
    const data = JSON.parse(request.response)
    console.log(data)
}







