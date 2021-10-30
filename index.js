// кнопка удаления карточек

const buttonsRemove = document.querySelectorAll('.item__button');

function handleClick (e) {
    const currentButton = e.currentTarget;
    currentButton.closest('.item').remove();
}

buttonsRemove.forEach(button => {
    button.addEventListener('click', handleClick)
})

// кнопка добавления карточки

const buttonAdd = document.querySelector('.form__button');
buttonAdd.addEventListener("click", createCard);


function createCard() {

    const cardContainer = document.querySelector('.content');
    const cardItem = document.createElement('div');
    const buttonElement = document.createElement('input');
    const imgElement = document.createElement('img');
    const nameElement = document.createElement('h1');
    const descriptionElement = document.createElement('p');
    const priceElement = document.createElement('p');
    
    cardItem.classList.add('item');
    buttonElement.classList.add('item__button');
    imgElement.classList.add('item__img');
    nameElement.classList.add('item__tittle');
    descriptionElement.classList.add('item__description');
    priceElement.classList.add('item__price');
    
    // imgElement.textContent = imgValue;
    // nameElement.textContent = nameValue;
    // descriptionElement.textContent = descriptionValue;
    // priceElement.textContent = priceValue;
     
    cardContainer.appendChild(cardItem);
    cardItem.appendChild(buttonElement); 
    cardItem.appendChild(imgElement);
    cardItem.appendChild(nameElement);
    cardItem.appendChild(descriptionElement);
    cardItem.appendChild(priceElement);
    
}






