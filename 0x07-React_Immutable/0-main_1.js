import getImmutableObject from './0-fromjs.js';


let obj = {
  colors: {c1: "ff0000", c2:"00ff00"}
}

let obj2 = getImmutableObject(obj)
obj2.get('colors').c1="0f0f0f";

console.log(obj2);
console.log(JSON.stringify(obj2))
