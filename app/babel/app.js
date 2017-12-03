import {message} from './modules/message';
import {create} from './modules/create';

const messages = {
	bodyMessage: message('Check the Console! Nah'),
	consoleMessage: message('App Worksaaa!')
}

console.info(messages.consoleMessage);
document.addEventListener("DOMContentLoaded", function(){
	document.body.innerHTML = `<h1>${messages.bodyMessage}</h1>`;
});