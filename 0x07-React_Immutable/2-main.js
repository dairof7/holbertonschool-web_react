import accessImmutableObject from './2-nested.js';


let firstName = accessImmutableObject({
  name: {
       first: "Guillaume",
       last: "Salva"
  }
}, ['name', 'first']);

console.log(firstName);
