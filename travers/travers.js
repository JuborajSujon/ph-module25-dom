//JS parentNode expriment

// find parentNode
const parentChild = document.querySelector(".parent-child");
const parent = parentChild.parentNode;
// console.log(parent);
console.log(parent);

const container = document.querySelector(".container");

//JS child property
const parentdiv = document.querySelector("#parent");
console.log("first child", parentdiv.firstChild);
console.log("first element child", parentdiv.firstElementChild);

console.log("last child", parentdiv.lastChild);
console.log("first element child", parentdiv.lastElementChild);

console.log("child nodes", parentdiv.childNodes);
console.log("children", parentdiv.children);
