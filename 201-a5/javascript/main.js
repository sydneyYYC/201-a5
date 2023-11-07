import '../css/style.css'
import javascriptLogo from '../assets/javascript.svg'
import viteLogo from '../assets/vite.svg'
import { setupCounter } from '../javascript/counter.js'
import tailwindcss from '../src/index.css'
import dayjs from "dayjs";



document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'));



let timeSinceSchool = dayjs('2023-09-05');

let now = dayjs();
let days = now.diff(timeSinceSchool, 'days');

document.getElementById("school-start").innerHTML= (`On ${now.format('YYYY-MM-DD')}, ${days} days have passed since I started this program. Ohjeez.`);

// ES 2015
// this code is messed up somehow and breaks website
// const dayjs = require('dayjs');
// dayjs().format();

dayjs().hour() // gets current hour
newDate = dayjs().hour(12)

document.querySelector('#date').innerHTML = newDate;
// // console.log('hi');

// var calendar = require('dayjs/plugin/calendar')
// dayjs.extend(calendar);

// const timeToday = dayjs().calendar(dayjs('2023-11-06')).toString();


// sorry tony i just dont know how to make this work 


