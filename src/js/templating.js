import cardTemplate from "../templates/menu-card.hbs";
import menu from "../menu.json";

const galleryRef = document.querySelector('.js-menu');

const markup = cardTemplate(menu);

galleryRef.insertAdjacentHTML('beforeend', markup);

