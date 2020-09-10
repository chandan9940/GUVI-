/*
Write a function called “printAllKeys” which returns an newArray of all the input object’s keys.
Example Input:
{name : ‘RajiniKanth’, age : 25, hasPets : true}
Example Output:
[‘name’, ‘age’, ‘hasPets’]
*/
var obj = {name : "RajiniKanth", age : 25, hasPets : true};
function printAllKeys(obj) {
    // your code here
    console.log(Object.keys(obj));
   }
   printAllKeys(obj);