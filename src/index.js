// src/index.js

import './style.css';
import Icon1 from './refresh.svg';
import setLocalStorage from './modules/setLocalStorage.js';
import handleToDo from './modules/handleToDo.js';

const dynamicDivision = document.querySelector('.dynamic-list');
const mainForm = document.querySelector('.main-form');
const mainInput = document.querySelector('.field-input');
let taskArr = [];

document.addEventListener('DOMContentLoaded', () => {
  mainForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const textValue = mainInput.value;
    const itemObj = {
      ID: taskArr.length + 1,
      Description: textValue,
      Completed: false,
    };
    taskArr.push(itemObj);
    setLocalStorage(taskArr);
    /* eslint-disable no-use-before-define */
    getList(taskArr);
    /* eslint-enable */
    mainForm.reset();
  });
  /* eslint-disable no-use-before-define */
  getLocalStorage();
  /* eslint-enable */
});

const getLocalStorage = () => {
  const todoStorage = localStorage.getItem('Todos');
  if (todoStorage === null) {
    taskArr = [];
  } else {
    /* eslint-disable no-use-before-define */
    taskArr = JSON.parse(todoStorage);
    /* eslint-enable */
  }
  /* eslint-disable no-use-before-define */
  getList(taskArr);
  /* eslint-enable */
};

function getList(myToDos) {
  dynamicDivision.innerHTML = '';
  if (myToDos.length > 0) {
    myToDos.forEach((todo) => {
      dynamicDivision.insertAdjacentHTML('beforeend', `<div class = "inner-main-container todo">
                 <div class="section-1" data-time="${todo.ID}">
                     <input type="checkbox" class="check-box">
                     <label class="label" contenteditable="true">${todo.Description}</label>

                 </div> 
                <div class="section-2"> 
                 <span class="fa fa-trash trash-image remove-btn"></span>
                </div>
              </div>`);
      handleToDo(todo, taskArr);
    });
  }
}

const refreshImage = new Image();
refreshImage.src = Icon1;
const headlineSection = document.querySelector('.headline');
headlineSection.appendChild(refreshImage);
refreshImage.className = 'refresh-image';
