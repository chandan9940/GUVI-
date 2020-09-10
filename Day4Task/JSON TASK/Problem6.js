/*
Parsing a list of lists and convert into a JSON object:
Write a function called “transformGeekData” that transforms some set of data from one format to another.
Input (Array):
var array = [[[“firstName”, “Vasanth”], [“lastName”, “Raja”], [“age”, 24], [“role”, “JSWizard”]], [[“firstName”, “Sri”], [“lastName”, “Devi”], [“age”, 28], [“role”, “Coder”]]];
Output:
[
{firstName: “Vasanth”, lastName: “Raja”, age: 24, role: “JSWizard”},
{firstName: “Sri”, lastName: “Devi”, age: 28, role: “Coder”}
]
*/
var arr =
 [
    [
        ["firstName", "Vasanth"], 
        ["lastName", "Raja"], 
        ["age", 24], 
        ["role", "JSWizard"]
    ], 
    [
        ["firstName", "Sri"], 
        ["lastName", "Devi"], 
        ["age", 28], 
        ["role", "Coder"]
    ]
];
function transformEmployeeData(arr)
 {
    var tranformEmployeeList = [];

    //Your code
    for(i in arr)
    {
        tranformEmployeeList.push(Object.fromEntries(arr[i]));
    }

    return tranformEmployeeList;
}

console.log(transformEmployeeData(arr));