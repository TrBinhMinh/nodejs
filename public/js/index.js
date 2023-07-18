import '@babel/polyfill';
import { login, logout } from './login';
import { displayMap } from './leaflet';
import { updateSettings } from './udpateSettings';
import { bookTour } from './stripe';

// DOM ELEMENTS
const map = document.getElementById('map');
const loginForm = document.querySelector('.form--login');
const logOutBtn = document.querySelector('.nav__el--logout');
const updateUserForm = document.querySelector('.form-user-data');
const userPasswordForm = document.querySelector('.form-user-password');
const bookBtn = document.getElementById('book-tour');

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

  const form = new FormData(updateUserForm);
  form.append('photo', document.getElementById('photo'));

  updateSettings(form, 'data');
});

userPasswordForm?.addEventListener('submit', async (e) => {
  e.preventDefault();

  document.querySelector('.btn--save-password').textContent = 'Updating...';
  const formData = new FormData(userPasswordForm);
  const currentPassword = formData.get('password-current');
  const newPassword = formData.get('password');
  const confirmNewPassword = formData.get('password-confirm');

  const res = await updateSettings(
    { currentPassword, newPassword, confirmNewPassword },
    'password'
  );

  document.querySelector('.btn--save-password').textContent = 'Save Password';

  if (res?.data.status !== 'success') return;

  userPasswordForm.reset();
});

if (bookBtn)
  bookBtn.addEventListener('click', (e) => {
    e.target.textContent = 'Processing...';
    const { tourId } = e.target.dataset;
    bookTour(tourId);
  });
