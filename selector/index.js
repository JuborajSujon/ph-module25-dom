function makeRed(element) {
  element.style.backgroundColor = "red";
}

const makeBluebg = document.getElementById("make-blue");
makeBluebg.onclick = makeblue;

function makeblue() {
  makeBluebg.style.backgroundColor = "blue";
  makeBluebg.style.color = "white";
}

const makeTomato = document.getElementById("make-tomato");
makeTomato.onclick = function maketomato() {
  makeTomato.style.backgroundColor = "tomato";
  makeTomato.style.color = "white";
};

const makeOrange = document.getElementById("make-orange");
makeOrange.addEventListener("click", makeorange);

function makeorange() {
  makeOrange.style.backgroundColor = "orange";
  makeOrange.style.color = "white";
}

const fruitsTitle = document.getElementById("fruit-title");
console.log(fruitsTitle.nodeType);

const input = document.getElementsByName("language");
console.log(input);

const input3 = document.createElement("input");
input3.setAttribute("type", "radio");
input3.setAttribute("name", "language");
input3.setAttribute("value", "Python");
document.querySelector("main").appendChild(input3);
console.log(input);

const menu = document.getElementById("menu");
const items = menu.getElementsByClassName("item");

const data = Array.prototype.map.call(items, (item) => item.textContent);
console.log(data);
document.querySelectorAll(".item").forEach((val) => console.log(val));
