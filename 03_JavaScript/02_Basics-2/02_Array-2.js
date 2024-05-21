//* ****************************************************
//* Array In JavaScript
//* ****************************************************


//* ****************************** Array Methods ****************************

    //* ****************************************************************************
    //* 8. The concat() method -> Merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
    //* Syntax -> concat(), concat(value1), concat(value1, value2), concat(value1, value2, /* …, */ valueN)

    const array1 = ['a', 'b', 'c'];
    const array2 = ['d', 'e', 'f'];
    const array3 = array1.concat(array2);

    console.log(array3);            // Output -> [ 'a', 'b', 'c', 'd', 'e', 'f' ]

    // Insert array2 in array1, instead of merging these two array
    array1.push(array2);
    console.log(array1);            // Output -> [ 'a', 'b', 'c', [ 'd', 'e', 'f' ] ]
                                    // index ->     0    1     2  3[0]  3[1]  3[2]

    //* ****************************************************************************                    
    //* Can merge array using Spread syntax(technique). This syntax is mostly used to merge arrays.
    //* Syntax -> [...array1, ...array2, ...array3, and so on ];
    //* **************************************************************************** 

    const num1 = [1, 2, 3];
    const num2 = [4, 5, 6];
    const num3 = [...num1, ...num2];
    console.log(num3);              // Output -> [ 1, 2, 3, 4, 5, 6 ]


    //* ****************************************************************************
    //* 9. The flat() method -> Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
    //* Syntax -> flat(), flat(depth)

    const array = [0, 1, 3,  [4, 5, [6, 7, [8, 9]]]];

    console.log(array.flat());              // Output -> [ 0, 1, 3, 4, 5, [ 6, 7, [ 8, 9 ] ] ]
    console.log(array.flat(2));             // Output -> [ 0, 1, 3, 4, 5, 6, 7, [ 8, 9 ] ]
    console.log(array.flat(Infinity));      // Output -> [ 0, 1, 3, 4, 5, 6, 7, 8, 9 ]


    //* ****************************************************************************
    //* 10. The Array.isArray() method -> Determines whether the passed value is an Array.
    //* Syntax -> Array.isArray(value)

    console.log(Array.isArray("Suraj"));                    // Output -> false
    console.log(Array.isArray([1, 3, 5]));                  // Output -> true
    console.log(Array.isArray('[]'));                       // Output -> false
    console.log(Array.isArray(new Array(5)));               // Output -> true
    console.log(Array.isArray(new Int16Array([15, 33])));   // Output -> false


    //* ****************************************************************************
    //* 11. The Array.from() method -> Creates a new, shallow-copied Array instance from an iterable or array-like object.
    //* Syntax -> Array.from(arrayLike), Array.from(arrayLike, mapFn), Array.from(arrayLike, mapFn, thisArg)

    console.log(Array.from("Suraj"));                       // Output -> [ 'S', 'u', 'r', 'a', 'j' ]
    console.log(Array.from([1, 2, 3], (x) => x + x));       // Output -> [ 2, 4, 6 ]

    console.log(Array.from({name : "Suraj"}));              // Output -> [] -> Empty array

    //* Imp for interview
    // Reason behind empty array -> Array.from() returns an empty array because {name: "Suraj"} is not array-like or iterable. Use Object.values(), Object.keys(), or Object.entries() to convert an object's values, keys, or entries to an array.


    //* ****************************************************************************
    //* 12. The Array.of() method -> Creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.
    //* Syntax -> Array.of(), Array.of(element1), Array.of(element1, element2), Array.of(element1, element2, /* …, */ elementN)

    const arr1 = 100;
    const arr2 = 200;
    const arr3 = 300;

    console.log(Array.of(arr1, arr2, arr3));                // Output -> [ 100, 200, 300 ]
    console.log(Array.of('foo', 2, 'bar', true));           // Output -> [ 'foo', 2, 'bar', true ]
    console.log(Array.of());                                // Output -> []
