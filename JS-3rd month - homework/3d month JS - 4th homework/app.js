//Собственный JSON
const request = new XMLHttpRequest();
request.open('GET','any.json')
request.setRequestHeader('Content-type','application/json')
request.send()
request.onload=()=>{
    const data = JSON.parse(request.response)
    console.log(data)
}
//Работа с карточками
const btn = document.querySelector('.entity');
const container = document.querySelector('.container');
btn.addEventListener('click',()=>{
    const newRequest = new XMLHttpRequest();
        newRequest.open('GET', 'person.json')
        newRequest.setRequestHeader('Content-type', 'application/json')
        newRequest.send()
        newRequest.addEventListener('load', () => {
            const persons = JSON.parse(newRequest.responseText);
            for (let i = 0; i < persons.length; i++) {
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `
    <div class="wrapper">
        <img src="${persons[i].person_photo}" alt="monster">
    </div>
    <div class="wrapper_text">
        <h2>Name: ${persons[i].name}</h2>
        <span>Age: ${persons[i].age}</span>
        <p>Bio: ${persons[i].bio}</p>
        <span>Danger level: ${persons[i].dangerLevel}</span>
    </div>
`;
                container.append(card);
            }
        })

},{once:true})










