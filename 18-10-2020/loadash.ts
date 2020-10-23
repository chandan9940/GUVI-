//chunk method using ts
let chunk = (array,size)=>{

    try
    {
        if(size == undefined || size == 0 || size == null)
        {
            console.warn("size should be grater than or equal to 1")
        }
        else
        {
            let result = [];

            for (let i = 0; i < array.length; )
             {
				let temp = [];

                for (let j = i; j < i + size; j++)
                {
					if (array[j] !== undefined) temp.push(array[j]);
				}

				i = i + size;

                if (temp.length !== 0) 
                {
					result.push(temp);
				}
			}

			return result;

        }

    }
    catch(e)
    {
        console.error(e.message);
    }

};

let array = [1, 2, 3, 4, 6, 7, 8];

console.log( chunk(array, 3));

// reduce using ts

let reduce = (array, iterator, intialValue) => 
{

    try
    {
        let sum = 0;

        if (intialValue) sum = intialValue;
    
        for (let a of array) {
            sum = iterator(sum, a);
        }
    
        return sum;

    }
    catch(e)
    {
        console.error(e.message);
    }
}

console.log( reduce(array,(sum, item) => {return sum + item;},100));
// console.log( reduce({ 'a': 1, 'b': 2, 'c': 1 },function(result, value, key) { (result[value] || (result[value] = [])).push(key); return result;},{}));

// Filter using ts 

let filter = (array,iterator) =>{

    try
    {
        let result = [];

	for (let a of array) {
		if (a !== undefined) {
			if (typeof iterator === "function")
				if (iterator(a)) {
					result.push(a);
				}

			if (typeof iterator === "object" && !Array.isArray(iterator)) {
				let flag = 0;
				for (let i in iterator) {
					if (a[i] === iterator[i]) {
						flag = 1;
					} else {
						flag = 0;
					}
				}
				if (flag === 1) result.push(a);
			}

			if (typeof iterator === "object" && Array.isArray(iterator)) {
				if (a[iterator[0]] === iterator[1]) result.push(a);
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
    catch(e)
    {
        console.error(e.message);
    }
}
var users = [
	{ user: "barney", age: 36, active: true },
	{ user: "fred", age: 40, active: false },
	{ user: "pebbles", age: 1, active: true },
];

console.log(filter(users, (user) => {
    return user.active;
}))

//find using ts 
let find = (array, iterator)=>{

    try
    {
        for (let a of array) {
            if (a !== undefined) {
                if (typeof iterator === "function")
                    if (iterator(a)) {
                        return a;
                    }
    
                if (typeof iterator === "object" && !Array.isArray(iterator)) {
                    let flag = 0;
                    for (let i in iterator) {
                        if (a[i] === iterator[i]) flag = 1;
                        else flag = 0;
                    }
                    if (flag === 1) return a;
                }
    
                if (typeof iterator === "object" && Array.isArray(iterator)) {
                    if (a[iterator[0]] === iterator[1]) return a;
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
    catch(e)
    {
        console.warn(e.message);
    }
}

console.log(find(users, function (o) {return o.age < 40;}));

// sum using ts 

let sum = (array)=>{

    try
    {
        let s = 0;
        for (let a of array) {
            s = s +a;
        }
        return s;

    }
    catch(e)
    {
        console.warn(e.message);
    }
}

console.log(sum(array));