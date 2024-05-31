const cardsContainer = document.querySelector('.cards_container')
const fetchCards = async()=>{
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        data.forEach((el)=>{
            const card = document.createElement('div')
            card.classList.add('card')
            const image = document.createElement('img')
            image.src = "https://www.svgrepo.com/show/297216/hamburger-burger.svg"
            const title = document.createElement('h2')
            title.innerHTML = el.title;
            const biography = document.createElement('p')
            biography.innerHTML = el.body;
            card.append(image)
            card.append(title)
            card.append(biography)
            cardsContainer.append(card);
        });
    }catch(error){
        alert("Unexpected error:")
    }
}
fetchCards()