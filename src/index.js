import dishCardsTpl from "./templates/dish-cards.hbs";
import menu from "./menu.json";

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
    menu: document.querySelector('.js-menu'),
    checkbox: document.querySelector('#theme-switch-toggle'),
    body: document.body,
};

const createDishCards = menu => refs.menu.insertAdjacentHTML('beforeend', dishCardsTpl(menu));

createDishCards(menu);


let savedTheme = localStorage.getItem('theme');

refs.checkbox.addEventListener('change', onSwitchToggleClick);


window.addEventListener('load', currentTheme);

function onSwitchToggleClick(event) {
  event.currentTarget.checked ? enableDarkTheme() : enableLightTheme();
}

function toggleTheme(add, remove) {
  refs.body.classList.remove(remove);
  refs.body.classList.add(add);
  localStorage.setItem('theme', add);
}

function enableDarkTheme() {
  toggleTheme(Theme.DARK, Theme.LIGHT);
  refs.checkbox.checked = true;
}

function enableLightTheme() {
  toggleTheme(Theme.LIGHT, Theme.DARK);
  refs.checkbox.checked = false;
}

function currentTheme() {
  if (savedTheme === Theme.LIGHT || savedTheme === null) {
    enableLightTheme();
    return;
  }

  if (savedTheme === Theme.DARK) {
    enableDarkTheme();
    return;
  }
}