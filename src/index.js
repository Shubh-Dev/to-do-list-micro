// src/index.js
/* eslint-disable */
import _, { divide } from 'lodash';
/* eslint-enable */
import './style.css';
import Icon from './kebab.png';
import Icon1 from './refresh.svg';
import Icon2 from './trash.svg';


const refreshImage = new Image();
refreshImage.src = Icon1;
const headlineSection = document.querySelector('.headline');
headlineSection.appendChild(refreshImage);
refreshImage.className = 'refresh-image';

const inputText = document.querySelector('.field-input');
const dynamicList = document.querySelector('.dynamic-list');
let taskArr = [];
function addTask() {
    const yourData = localStorage.getItem('data');
    if(yourData == null) {
        taskArr = [];
    } else {
        taskArr = JSON.parse(yourData);
    };

    
    inputText.addEventListener("keypress", (e) => {
    if (e.key == "Enter"){
        e.preventDefault();
        taskArr.push(inputText.value);
        displayTask(inputText.value);
        localStorage.setItem('data', JSON.stringify(taskArr));
    };
});
};
addTask();


function displayTask(element) {
    dynamicList.innerHTML += `<div class = inner-main-container>
    <div class="section-1">
        <input type="checkbox" class="check-box">
          <p>${element}</p>
    </div> 
    <div class="section-2"> 
    <i class="fa-regular fa-trash"></i>
    </div>
 </div>`
//  appendItems();
};

displayTask()

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






