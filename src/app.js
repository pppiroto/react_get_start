import { message } from './lib/util.js'
var helloMessage = document.createTextNode(message());
document.body.appendChild(helloMessage);