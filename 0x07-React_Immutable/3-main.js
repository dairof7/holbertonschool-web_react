import {getListObject, addElementToList} from './3-list';


let list1 = getListObject(['1', '2', '3']);
console.log(list1);
console.log(JSON.stringify(list1));

let list2 = addElementToList(list1, '4');
console.log(list2);
console.log(JSON.stringify(list2));
