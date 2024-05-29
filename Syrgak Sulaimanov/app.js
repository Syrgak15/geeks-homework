//1
const extractNumbers = (str)=>{
    return console.log(parseInt(str))
}
  extractNumbers("a122fg5hj6")


//3. Сделать запрос на API используя async await и try catch
const request = async()=>{
    try{
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        data.forEach((product)=>{
            console.log(product.title)
        })
    }catch(error){
        console.log(error)
    }
    }
request()


//5) Создайте кнопку которая будет отображать блок либо скрывать его
const btn = document.querySelector('#btn')
const block = document.querySelector('.block');

btn.onclick = (event)=>{
    block.classList.toggle('block_off');
    btn.style.width = "100px"
    btn.style.height = "100px"
}

//4) Создайте 5 кнопок внутри которого будут названия цветов на английском
const buttons = document.querySelector('.buttons');
buttons.onclick =(event)=>{
    if(event.target.classList.contains('red')){
        document.body.style.backgroundColor = 'red'
    }else if(event.target.classList.contains('green')){
        document.body.style.backgroundColor = 'green'
    }else if(event.target.classList.contains('blue')){
        document.body.style.backgroundColor = 'blue'
    }else if(event.target.classList.contains('yellow')){
        document.body.style.backgroundColor = 'yellow'
    }else if(event.target.classList.contains('purple')){
        document.body.style.backgroundColor = 'purple'
    }
}

//6) Отобразите на странице цифру ноль
// и начните его увеличивать на +1 каждую мили-секунду  - остановите отсчёт когда счётчик дойдёт до 100
const zero = document.querySelector('.zero')
let index = 0;
const increaseNumber = () => {
    index++;
    zero.innerHTML = index;
    if (index === 100) {
        clearInterval(stopNumbers);
    }
}
const stopNumbers = setInterval(increaseNumber, 100);

//7) Создайте кнопку при нажатии на которую
// будет отправляться GET запрос на JSON и полученные данные от туда выводите в консоль (JSON создавайте на своё усмотрение) используйте async await
const btnJson = document.querySelector('.jsonbtn')
const apiRequest = async()=>{
    btnJson.onclick = async()=>{
        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
            const data = await response.json();
            console.log(data)
        }catch(error){
            console.log(error)
        }
    }
}
apiRequest()