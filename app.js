'use strict'

const switcher = document.querySelector('.button');

switcher.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme')
    document.body.classList.toggle('light-theme')
var className = document.body.className;
console.log(className)

if(className == "light-theme") {
    this.textContent = "dark theme";
} else {
   this.textContent = "light theme";
    }

console.log('current class name: ' + className)
});
