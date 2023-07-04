import '@babel/polyfill';
import { login, logout } from './login';
import { displayMap } from './leaflet';
import { updateData } from './udpateSettings';

// DOM ELEMENTS
const map = document.getElementById('map');
const loginForm = document.querySelector('.form--login');
const logOutBtn = document.querySelector('.nav__el--logout');
const updateUserForm = document.querySelector('.form-user-data');

// VALUES

// DELEGATION
if (map) {
  const locations = JSON?.parse(map.dataset.locations);
  displayMap(locations);
}

loginForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email')?.value;
  const password = document.getElementById('password')?.value;
  login(email, password);
});

logOutBtn?.addEventListener('click', logout);

updateUserForm?.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(updateUserForm);
  const name = formData.get('name');
  const email = formData.get('email');

  updateData(name, email);
});
