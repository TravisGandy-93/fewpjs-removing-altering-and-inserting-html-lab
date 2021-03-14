// Write your code here!
var el = document.getElementById('main');
el.remove();

let element = document.createElement('div');
element.id= "victory";
document.body.appendChild(element);
let newDiv = document.querySelector('div#victory');
newDiv.innerHTML = "<h1>Travis is the champion</h1>"