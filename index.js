
const button = document.querySelector('.form__button');
button.addEventListener("click", createCard);


function createCard() {

    const cardContainer = document.querySelector('.content');
    const cardItem = document.createElement('div');
    const imgElement = document.createElement('img');
    const nameElement = document.createElement('h1');
    const descriptionElement = document.createElement('p');
    const priceElement = document.createElement('p');
    const buttonElement = document.createElement('button');
    
    
    cardItem.classList.add('item');
    imgElement.classList.add('item__img');
    nameElement.classList.add('item__tittle');
    descriptionElement.classList.add('item__description');
    priceElement.classList.add('item__price');
    buttonElement.classList.add('item__button');

    // imgElement.textContent = imgValue;
    // nameElement.textContent = nameValue;
    // descriptionElement.textContent = descriptionValue;
    // priceElement.textContent = priceValue;
    
    
    cardContainer.appendChild(cardItem);
    cardItem.appendChild(nameElement);
    cardItem.appendChild(descriptionElement);
    cardItem.appendChild(priceElement);
    cardItem.appendChild(buttonElement); 
}






// window.onload = init;

// function init() {
// 	var button = document.querySelector(".form__button");
//     button.onclick = buttonClickHandler;
// }

// function buttonClickHandler() {
// 	var textInput = document.querySelector(".form__name");
//     var catName = textInput.value;
	
// 	// если строка пустая
// 	if(catName == "") {
// 		alert("Введите имя кота, пожалуйста");
// 	}else {
//         //alert("Добавлен " + catName);
// 		var div = document.createElement("div");
//         tittle.innerHTML = catName;
// 		var cardContent = document.querySelector(".content");
//         cardContent.appendChild(div);
// 		textInput.value = "";
//     }
// }