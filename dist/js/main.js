"use strict";var newItem=document.querySelector(".new-item"),addItem=document.querySelector(".add-item"),todo=document.querySelector(".todo"),clear=document.querySelector(".clear-finished"),total=document.querySelector(".total"),done=document.querySelector(".done"),fuckIt=document.querySelector(".fuck-it"),addTheThing=function(){if(newItem.value){var e=document.createElement("li");e.innerText=newItem.value,todo.appendChild(e);var t=document.createElement("button");e.appendChild(t),t.innerText="check-offf",t.addEventListener("click",function(){t.classList.toggle("back"),e.classList.toggle("finished"),doTheCounting()}),clear.addEventListener("click",function(){e.classList.contains("finished")&&(e.remove(),doTheCounting())}),fuckIt.addEventListener("click",function(){e.remove(),doTheCounting()})}};addItem.addEventListener("click",function(){addTheThing(),doTheCounting(),newItem.value=""}),newItem.addEventListener("keyup",function(e){"Enter"===e.code&&(console.log("enter"),addTheThing(),doTheCounting(),newItem.value="")});var doTheCounting=function(){total.innerHTML=document.querySelectorAll("li").length,total.innerHTML=document.querySelectorAll("li:not(.finished)").length,done.innerHTML=document.querySelectorAll("li.finished").length};
//# sourceMappingURL=main.js.map