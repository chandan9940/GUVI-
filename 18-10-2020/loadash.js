//chunk method using ts
var chunk = function (array, size) {
    try {
        if (size == undefined || size == 0 || size == null) {
            console.warn("size should be grater than or equal to 1");
        }
        else {
            var result = [];
            for (var i = 0; i < array.length;) {
                var temp = [];
                for (var j = i; j < i + size; j++) {
                    if (array[j] !== undefined)
                        temp.push(array[j]);
                }
                i = i + size;
                if (temp.length !== 0) {
                    result.push(temp);
                }
            }
            return result;
        }
    }
    catch (e) {
        console.error(e.message);
    }
};
var array = [1, 2, 3, 4, 6, 7, 8];
console.log(chunk(array, 3));
// reduce using ts
var reduce = function (array, iterator, intialValue) {
    try {
        var sum_1 = 0;
        if (intialValue)
            sum_1 = intialValue;
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var a = array_1[_i];
            sum_1 = iterator(sum_1, a);
        }
        return sum_1;
    }
    catch (e) {
        console.error(e.message);
    }
};
console.log(reduce(array, function (sum, item) { return sum + item; }, 100));
// console.log( reduce({ 'a': 1, 'b': 2, 'c': 1 },function(result, value, key) { (result[value] || (result[value] = [])).push(key); return result;},{}));
// Filter using ts 
var filter = function (array, iterator) {
    try {
        var result = [];
        for (var _i = 0, array_2 = array; _i < array_2.length; _i++) {
            var a = array_2[_i];
            if (a !== undefined) {
                if (typeof iterator === "function")
                    if (iterator(a)) {
                        result.push(a);
                    }
                if (typeof iterator === "object" && !Array.isArray(iterator)) {
                    var flag = 0;
                    for (var i in iterator) {
                        if (a[i] === iterator[i]) {
                            flag = 1;
                        }
                        else {
                            flag = 0;
                        }
                    }
                    if (flag === 1)
                        result.push(a);
                }
                if (typeof iterator === "object" && Array.isArray(iterator)) {
                    if (a[iterator[0]] === iterator[1])
                        result.push(a);
                }
                if (typeof iterator === "string") {
                    if (a[iterator]) {
                        result.push(a);
                    }
                }
            }
        }
        return result;
    }
    catch (e) {
        console.error(e.message);
    }
};
var users = [
    { user: "barney", age: 36, active: true },
    { user: "fred", age: 40, active: false },
    { user: "pebbles", age: 1, active: true },
];
console.log(filter(users, function (user) {
    return user.active;
}));
//find using ts 
var find = function (array, iterator) {
    try {
        for (var _i = 0, array_3 = array; _i < array_3.length; _i++) {
            var a = array_3[_i];
            if (a !== undefined) {
                if (typeof iterator === "function")
                    if (iterator(a)) {
                        return a;
                    }
                if (typeof iterator === "object" && !Array.isArray(iterator)) {
                    var flag = 0;
                    for (var i in iterator) {
                        if (a[i] === iterator[i])
                            flag = 1;
                        else
                            flag = 0;
                    }
                    if (flag === 1)
                        return a;
                }
                if (typeof iterator === "object" && Array.isArray(iterator)) {
                    if (a[iterator[0]] === iterator[1])
                        return a;
                }
                if (typeof iterator === "string") {
                    if (a[iterator]) {
                        return a;
                    }
                }
            }
        }
        return undefined;
    }
    catch (e) {
        console.warn(e.message);
    }
};
console.log(find(users, function (o) { return o.age < 40; }));
// sum using ts 
var sum = function (array) {
    try {
        var s = 0;
        for (var _i = 0, array_4 = array; _i < array_4.length; _i++) {
            var a = array_4[_i];
            s = s + a;
        }
        return s;
    }
    catch (e) {
        console.warn(e.message);
    }
};
console.log(sum(array));
