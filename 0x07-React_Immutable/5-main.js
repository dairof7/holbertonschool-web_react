import {concatElements, mergeElements} from './5-merge';

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
console.log(JSON.stringify(concatElements(a1, a2)));

const obj1 = { name: 'k' };
const obj2 = { age: '25' };
console.log(JSON.stringify(mergeElements(obj1, obj2)));
