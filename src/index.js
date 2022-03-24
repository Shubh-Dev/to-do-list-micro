// src/index.js

 import _, { divide } from 'lodash';
 import './style.css';

 let toDoList = [
  {description: "attend PTM", completed: true, index: 0},
  {description: "buy grocery", completed: true, index: 1},
  {description: "run pc maintanance", completed: false, index: 2},
  {description: "wash car", completed: true, index: 3},
  {description: "exercise", completed: false, index: 4},
 ];

function createList(toDoList) {

  
  for(let i = 0; i < toDoList.length; i++) {
    const dynamicList = document.querySelector('.dynamic-list');
    const listHolder = document.createElement('div');
    listHolder.className = 'list-holder';
    let {description, completed, index} = toDoList[i];
    listHolder.innerHTML = [description, completed, index];
    dynamicList.appendChild(listHolder);
    const myCheckBox = document.createElement('input');
    myCheckBox.className = 'my-check-box';
    myCheckBox.type = "checkbox";
    listHolder.appendChild(myCheckBox);
  }
  
  
} 

createList(toDoList);