// Import stylesheets
import './style.css';

import { Security } from './Security';
let obj = new Security('vinoth', 55);
console.log(obj);
obj.idCheck();
obj.toSayRoute();

let objvinoth = new Security('manoj', 58);
console.log(objvinoth);
objvinoth.idCheck();
objvinoth.toSayRoute();


// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
