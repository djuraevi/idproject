                    // получение данных с формы

let formCard = document.forms.card;
let nameCard = formCard.elements.name;
let descriptionCard = formCard.elements.description;
let imageCard = formCard.elements.image;
let priceCard = formCard.elements.price;

                    // проверка полей ввода и добавление карточки

let buttonAdd = document.querySelector('.form__button');
let inputName = document.querySelector('.form__name');
let inputImage = document.querySelector('.form__link');
let inputPrice = document.querySelector('.form__price');

const inputError = document.querySelectorAll('.required');

inputError.forEach(input => {
    input.addEventListener('input', inputListener)
})

function inputListener () {
    if (nameCard.value == "") {
        return inputName.classList.add('active');
    } else if (imageCard.value == "") {
        return inputImage.classList.add('active');
    } else if (priceCard.value == "") {
        return inputPrice.classList.add('active');
    } else {
        inputName.classList.remove('active');
        inputImage.classList.remove('active');
        inputPrice.classList.remove('active');
        buttonAdd.classList.remove('form__button');
        buttonAdd.classList.add('form__button-active');
        buttonAdd.addEventListener("click", createCard);  
    }                
}

                    // кнопка удаления карточек

const buttonsRemove = document.querySelectorAll('.item__button');

function handleClick (e) {
    const currentButton = e.currentTarget;
    currentButton.closest('.item').remove();
}

buttonsRemove.forEach(button => {
    button.addEventListener('click', handleClick)
})

                    // создание карточки

function createCard() {

                    //создание элекментов карты, присвоение классов и растановка

    const cardContainer = document.querySelector('.content');
    const buttonElement = document.querySelector('.item__button');
    const buttonDelete = buttonElement.cloneNode(true);
    
    let cardItem = document.createElement('div');
    let cardWrapper = document.createElement('div'); 
    let imgElement = document.createElement('img');
    let nameElement = document.createElement('h1');
    let descriptionElement = document.createElement('p');
    let priceElement = document.createElement('p');

    cardItem.classList.add('item');
    cardWrapper.classList.add('wrapper');
    imgElement.classList.add('item__img');
    nameElement.classList.add('item__tittle');
    descriptionElement.classList.add('item__description');
    priceElement.classList.add('item__price');

    cardContainer.prepend(cardItem);
    cardItem.append(cardWrapper);
    cardWrapper.append(buttonDelete);
    cardWrapper.append(imgElement);
    cardWrapper.append(nameElement);
    cardWrapper.append(descriptionElement);
    cardWrapper.append(priceElement);

                        //передача данных с input в элементы карточки

    imgElement.setAttribute('src', imageCard.value);
    nameElement.append(nameCard.value);
    descriptionElement.append(descriptionCard.value);
    priceElement.append(priceCard.value + " руб.");
}








