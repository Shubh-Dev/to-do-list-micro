// src/index.js
/* eslint-disable */
import _, { divide } from 'lodash';
/* eslint-enable */
import './style.css';
import Icon from './kebab.png';
import Icon1 from './refresh.svg';

const toDoList = [
  { description: 'attend PTM', completed: true, index: 0 },
  { description: 'buy grocery', completed: true, index: 1 },
  { description: 'run pc maintanance', completed: false, index: 2 },
  { description: 'wash car', completed: true, index: 3 },
  { description: 'exercise', completed: false, index: 4 },
];

function createList(toDoList) {
  for (let i = 0; i < toDoList.length; i += 1) {
    const dynamicList = document.querySelector('.dynamic-list');
    const listHolder = document.createElement('div');
    listHolder.className = 'list-holder';
    /* eslint-disable */
    const { description, completed, index } = toDoList[i];
    const mainText = listHolder.innerHTML = [description];
    /* eslint-enable */
    mainText.className = 'myMainText';
    const myIcon = new Image();
    myIcon.src = Icon;
    myIcon.className = 'kebab-icon';
    listHolder.appendChild(myIcon);
    const myCheckBox = document.createElement('input');
    myCheckBox.className = 'my-check-box';
    myCheckBox.type = 'checkbox';
    listHolder.appendChild(myCheckBox);
    dynamicList.appendChild(listHolder);
  }
}
createList(toDoList);

const refreshImg = new Image();
refreshImg.src = Icon1;
refreshImg.className = 'refresh-image';

const headlineDivision = document.querySelector('.headline');
headlineDivision.appendChild(refreshImg);