const str = "hello world".split(" ");

const myArr = Array.prototype.map.call(str, (val, ind, arr) => (ele = val + 1));

console.log(myArr);

const person = {
  0: "jamal",
  1: 35,
  2: "food",
  length: 3,
};

const arrPerson = Array.prototype.map.call(person, (val, ind, arr) => {
  return val + "kudu";
});
console.log(arrPerson);

console.log(Object.keys(person));
person[3] = "work";
console.log(person.length);

const arrayLikeObject = { 0: "a", 1: "b", 2: "c", length: 3 };
arrayLikeObject[3] = "d";
console.log(arrayLikeObject.length);
delete arrayLikeObject[2];
console.log(arrayLikeObject.length);
console.log(person.length);

function add() {
  return arguments;
}
console.log(add(2, 3, 5, 6));

var arrayLikeObject1 = {
  length: 3,
  name: "thing",
  1: "hello",
};
var array = Array.from(arrayLikeObject1, (element, index) =>
  element ? element.toUpperCase() : `Item ${index}`
);
console.log(array);

let li_array = Array.prototype.slice.call(arrayLikeObject1);
console.log(li_array);
