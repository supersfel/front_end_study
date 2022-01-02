const a = new Array('red', 'black', 'white');

console.log(a,typeof a); //['red', 'black', 'white'] object
console.log(a instanceof Array); //true
console.log(a instanceof Object); //true

const b = ['red', 'black', 'white']
console.log(b,typeof b); //['red', 'black', 'white'] object
console.log(b instanceof Array); //true
console.log(b instanceof Object); //true

console.log(b.slice(0,1)); //['red']
console.log(Array.prototype.slice,Object.prototype.slice); //ƒ slice() undefined