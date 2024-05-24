//* ****************************************************
//* Array Map() Method
//* ****************************************************


//* **************************** Map() ***************************
    //* The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.

    //* Program that adds 10 to each number and returns the values
    const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // Use the map method to create a new array where each number is increased by 10
    let newNums = myNums.map( (num) => num + 10);
    console.log(newNums);           // Output -> [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]


    // Use the map method to create a new array where each number is increased by 15
    let newNum = myNums.map( (num) => {return num + 15});
    console.log(newNum);           // Output -> [ 16, 17, 18, 19, 20, 21, 22, 23, 24, 25 ] 


//* **************************** foreach() **************************
    //* Program that adds 20 to each number and returns the values
    const numbers = [10, 20, 30, 40, 50, 60, 70];

    // Create an empty array
    const nums = [];

    numbers.forEach( (num) => {
        nums.push(num + 20);
    })
    console.log(nums);              // Output -> [ 30, 40, 50, 60, 70, 80, 90 ]


//* **************************** Chaining ***************************
    //* Chaining in JavaScript refers to the technique of calling multiple methods on the same object or result in a single statement. This is possible because many methods return the object itself or another related object, allowing you to chain additional method calls.

    const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // Chain multiple array methods: map, map, and filter
    let result = numArray
                .map((num) => num * 10)             // Multiply each number by 10
                .map( (num) => num + 5)             // Add 5 to each number
                .filter( (num) => num >= 40)        // Keep only numbers greater than or equal to 40
    
    console.log(result);            // Output -> [ 45, 55,  65, 75, 85, 95, 105 ]