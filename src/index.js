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
    // display todos in realtime
    getList(taskArr);
    mainForm.reset();
  });
  getLocalStorage();
});

// get items from local storage
const getLocalStorage = () => {
  const todoStorage = localStorage.getItem('Todos');
  if (todoStorage === null) {
    taskArr = [];
  } else {
    taskArr = JSON.parse(todoStorage);
  }
  getList(taskArr);
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

// const inputText = document.querySelector('.field-input');
// const dynamicList = document.querySelector('.dynamic-list');
// let taskArr = [];
// function addTask() {
//     // const yourData = localStorage.getItem('data');
//     // if (yourData == null) {
//     //     taskArr = [];
//     // } else {
//     //     taskArr = JSON.parse(yourData);
//     // };

//     inputText.addEventListener("keypress", (e) => {
//         if (e.key == "Enter") {
//             e.preventDefault();
//             taskArr.push(inputText.value);
//             displayTask(inputText.value);
//             localStorage.setItem('data', JSON.stringify(taskArr));
//             inputText.value = "";
//         };
//     });
//     localstorage();
// };
// addTask();

// function displayTask(element) {
//     dynamicList.innerHTML += `<div class = inner-main-container>
//     <div class="section-1">
//         <input type="checkbox" class="check-box">
//           <p>${element}</p>
//     </div>
//     <div class="section-2">
//     <span class="fa-regular fa-trash trash-image"></span>
//     </div>
//  </div>`

// };

// function localstorage() {
//     if (localStorage !== null) {
//       const store = JSON.parse(localStorage.getItem('data'));
//       store.forEach((inputText, index) => {
//      displayTask();
//       });
//     };
//   };

//   const todoStorage = localStorage.getItem('Todos');
//   if (todoStorage === null) {
//     todoItems = [];
//   } else {
//     todoItems = JSON.parse(todoStorage);
//   }
//   getList(todoItems);

// displayTask()

// function appendItems() {
// const refreshImage = new Image();
// refreshImage.src = Icon1;
// const headlineSection = document.querySelector('.headline');
// headlineSection.appendChild(refreshImage);
// refreshImage.className = 'refresh-image';
// const trashImage = new Image();
// trashImage.src = Icon2;
// const section2 = document.querySelector('.section-2');
// section2.appendChild(trashImage);
// trashImage.className = 'trash-image';
// localStorage.setItem('data', JSON.stringify(taskArr));
// };

// function removeTask() {
//     const trashImage = document.querySelector('.trash-image');
//     trashImage.addEventListener('click', () => {
//         console.logh('I am working');
//     });
// };
