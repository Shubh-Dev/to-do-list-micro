// src/index.js
/* eslint-disable */
import _, { divide } from 'lodash';
/* eslint-enable */
import './style.css';
import Icon from './kebab.png';
import Icon1 from './refresh.svg';
import Icon2 from './trash.svg';


const innerContainer2 = document.querySelector('.inner-container2');
const dynamicList = document.querySelector('.dynamic-list');
let notesObj = [];
const inputText = document.querySelector('.field-input');
  inputText.addEventListener("keyup", (event)=> {
      if (event.keyCode === "Enter") { 
        event.preventDefault()
        notesObj.push(inputText.value);
        displayNotes(); 
        localStorage.setItem('notes', JSON.stringify(notesObj));
      }
  const notes = localStorage.getItem('notes');
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  };
  notesObj.push(inputText.value);
  localStorage.setItem('notes', JSON.stringify(notesObj));
  inputText.value = '';
  displayNotes();
});

function displayNotes() {
  const notes = localStorage.getItem('notes');
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  };
  // let html = "";
  
  notesObj.forEach(function (element, index) {
    const taskDivision = document.createElement('div');
    taskDivision.className = 'inner-main-container';
    taskDivision.innerHTML += 
  `<div class="inner-container1"> 
  <input class="check-box" type="checkbox"> <p>${element}</p>
  </div>
  <div class="inner-container2">
  <button id='${index}' class="remove-btn">Remove</button>
  </div>`
  dynamicList.appendChild(taskDivision);
  const removeButton = document.querySelectorAll('.remove-btn');
  removeButton.forEach((button)  => {
    button.addEventListener('click', deleteList())
  });
  });
  
 
  // if (notesObj.length != 0) {
  //   dynamicList.innerHTML = html;
  //   console.log(notesObj.length);
  // } else {
  //   dynamicList.innerHTML = 'Nothing to show! Add a to do item.';
  // };
};



function deleteList() {
  console.log('I am deleting');
};
// displayNotes();
// removeButton.addEventListener('click', () => {
//   console.log('I am deleting');
// });

const refreshImg = new Image();
refreshImg.src = Icon1;
refreshImg.className = 'refresh-image';

const headlineDivision = document.querySelector('.headline');
headlineDivision.appendChild(refreshImg);