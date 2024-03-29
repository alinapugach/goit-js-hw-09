'use strict';
const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';
const textarea = form.elements.message;
const inputEmail = form.elements.email;
const objLocalStorage = JSON.parse(localStorage.getItem(localStorageKey)) ?? {};
inputEmail.value = objLocalStorage.email ?? '';
textarea.value = objLocalStorage.message ?? '';

form.addEventListener('input', evt => {
  let objToWrite = {
    email: '',
    message: '',
  };

  const localStorageItem =
    JSON.parse(localStorage.getItem(localStorageKey)) ?? {};

  if (evt.target.type === 'email') {
    objToWrite.message = localStorageItem.message;
    objToWrite.email = evt.target.value.trim();
    localStorage.setItem(localStorageKey, JSON.stringify(objToWrite));
  } else {
    objToWrite.email = localStorageItem.email;
    objToWrite.message = evt.target.value.trim();
    localStorage.setItem(localStorageKey, JSON.stringify(objToWrite));
  }
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  if (!textarea.value || !inputEmail.value) {
    alert('Please, fill all inputs.');
  } else {
    console.log(objLocalStorage);
    localStorage.removeItem(localStorageKey);
    form.reset();
  }
});
