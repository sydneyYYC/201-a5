import '../css/style.css'
import javascriptLogo from '../assets/javascript.svg'
import viteLogo from '../assets/vite.svg'
import { setupCounter } from '../javascript/counter.js'
import dayjs from 'dayjs'
import tailwindcss from '../src/index.css'



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

 // ES 2015
// this code is messed up somehow and breaks website
// const dayjs = require('dayjs');
dayjs().format();



// // console.log('hi');

var calendar = require('dayjs/plugin/calendar')
dayjs.extend(calendar);

const timeToday = dayjs().calendar(dayjs('2023-11-06')).toString();

document.querySelector('#date').innerHTML = timeToday;

// sorry tony i just dont know how to make this work 


