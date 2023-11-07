# 201 Assignment 4
## Sydney Bruce


#### Packages Used

[DayJS](https://day.js.org/en/)

[TailwindCSS](https://tailwindcss.com/)


### trouble shooting dayjs

#### possible issues
- dayjs is not linked / imported properly into main.js - 
*****
import dayjs from 'dayjs'
*****
on line 5 might be to blame. Have tried to change this route to '../node_modules/dayjs' with no luck. deleted it fot now

- insertion of html from main - tried moving div up above the js file - didnt work but will render regular string. Something is wrong with this line on main.js 35
```
const dayjs = require('dayjs');
dayjs().format();

```

- i erased this and used import dayjs from this [stackoverflow](https://stackoverflow.com/questions/70995823/dayjs-not-a-function)

- not able to get dayjs functionality
