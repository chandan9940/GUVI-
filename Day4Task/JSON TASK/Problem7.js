/*

Parsing two JSON objects and Compare:
Write an “assertObjectsEqual” function from scratch.
Assume that the objects in question contain only scalar values (i.e., simple values like strings or numbers).
It is OK to use JSON.stringify().
Note: The examples below represent different use cases for the same test. In practice, you should never have multiple tests with the same name.

Success Case:
Input:
var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6}
assertObjectsEqual(actual, expected, ‘detects that two objects are equal’);
Output:
Passed

Failure Case:
Input:var expected = {foo: 6, bar: 5};
var actual = {foo: 5, bar: 6}
assertObjectsEqual(actual, expected, ‘detects that two objects are equal’);
Output:
FAILED [my test] Expected {“foo”:6,”bar”:5}, but got {“foo”:5,”bar”:6}

*/
var expected = {foo: 6, bar: 5};
var actual = {foo: 5, bar: 6}
function assertObjectsEqual(actual, expected, testName){
 // your code here
 var obj = JSON.stringify(actual);
 var obj1= JSON.stringify(expected);
if(obj==obj1)
{
    return testName;
}
else
{
    return "FAILED" + "[my test] Expected " + obj1 + ", but got " + obj
}

}
console.log(assertObjectsEqual(actual, expected, "detects that two objects are equal"));
