//* ****************************************************
//* Array In JavaaScript
//* ****************************************************


//* ******************************** Defination ******************************
    //* The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

    //* JavaScript arrays are resizable and can contain a mix of different data types.
    //* JavaScript arrays are zero-indexed
//* *************************************************************************


//* ****************************** Array Creation ***************************
    const array = [1, 2, 4, 5, 6];
    const myArray = ["Apple", "Banana", "Mango", "Orange"];
    const numbers = new Array(10, 20, 30, 40);


//* ************************* Access Array Element **************************
    const fruits = ["Apple", "Banana", "Mango", "Orange"];
    console.log(fruits[0]);         // Output -> Apple
    console.log(fruits[3]);         // Output -> Orange

    const numeric = [10, 20, 30, 50, 100];
    console.log(numeric[3]);        // Output -> 50
    console.log(numeric[4]);        // Output -> 100


//* ****************************** Array Methods ****************************

    //* ****************************************************************************
    //* 1. The push() method -> Adds the specified elements to the end of an array and returns the new length of the array.
    //* Syntax -> push(), push(element1), push(element1, element2), push(element1, element2, /* …, */ elementN)

    const animals = ['pigs', 'goats', 'sheep'];
    animals.push('cows');
    animals.push('chickens');

    // The count variable contains the new length of the array.
    const count = animals.push('cats', 'dogs')

    console.log(animals);           // Output -> [ 'pigs', 'goats', 'sheep', 'cows', 'chickens', 'cats', 'dogs' ]
    console.log(count);             // Output -> 7


    //* ****************************************************************************
    //* 2. The pop() method -> Removes the last element from an array and returns that element. This method changes the length of the array.
    //* Syntax -> pop()

    const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

    console.log(plants.pop());      // Output -> tomato
    console.log(plants);            // Output -> [ 'broccoli', 'cauliflower', 'cabbage', 'kale' ]

    plants.pop();
    console.log(plants);            // Output -> [ 'broccoli', 'cauliflower', 'cabbage' ]


    //* ****************************************************************************
    //* 3. The unshift() method -> Adds the specified elements to the beginning of an array and returns the new length of the array.
    //* Syntax -> unshift(), unshift(element1), unshift(element1, element2), unshift(element1, element2, /* …, */ elementN)

    const array1 = [1, 2, 3];

    array.unshift(4);
    console.log(array);             // Output -> [ 4, 1, 2, 4, 5, 6 ]

    array.unshift(10, 20);
    console.log(array);             // Output -> [ 10, 20, 4, 1, 2, 4, 5, 6 ]


    //* ****************************************************************************
    //* 4. The shift() method -> Removes the first element from an array and returns that removed element. This method changes the length of the array.
    //* Syntax -> shift()

    const numArray = [1, 2, 3, 4, 5];

    numArray.shift();
    console.log(numArray);          // Output -> [ 2, 3, 4, 5 ]

    numArray.shift();
    console.log(numArray);          // Output -> [ 3, 4, 5 ]


    //* ****************************************************************************
    //* 5. The includes() method -> Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
    //* Syntax -> includes(searchElement), includes(searchElement, fromIndex)

    const arr = [1, 2, 3, 4, 5];
    console.log(array1.includes(2));        // Output -> true
    console.log(array1.includes(0));        // Output -> false

    const pets = ['cat', 'dog', 'bat'];
    console.log(pets.includes('cat'));      // Output -> true
    console.log(pets.includes('at'));       // Output -> false


    //* ****************************************************************************
    //* 5. The indexOf() method -> Returns the first index at which a given element can be found in the array, or -1 if it is not present.
    //* Syntax -> indexOf(searchElement), indexOf(searchElement, fromIndex)

    const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

    console.log(beasts.indexOf('bison'));       // Output -> 1
    // Start from index 2
    console.log(beasts.indexOf('bison', 2));    // Output -> 4
    console.log(beasts.indexOf('giraffe'));     // Output -> -1 (Not present in array)


    //* ****************************************************************************
    //* 6. The join() method -> Creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
    //* Syntax -> join(), join(separator)

    const elements = ['Fire', 'Air', 'Water'];
    const newElements = elements.join(); 

    console.log(elements);                  // Output -> [ 'Fire', 'Air', 'Water' ] -> Array
    console.log(newElements);               // Output -> Fire,Air,Water -> string
    console.log(typeof newElements);        // Output -> string
    console.log(elements.join('-'));        // Output -> Fire-Air-Water -> string


    //* ******************************* IMP ****************************************
    //* 6. The slice() method -> Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
    //* Syntax -> slice(), slice(start), slice(start, end)

    //* 7. The splice() method -> Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
    //* Syntax -> splice(start), splice(start, deleteCount), splice(start, deleteCount, item1), splice(start, deleteCount, item1, item2), splice(start, deleteCount, item1, item2, /* …, */ itemN)

    const numberArray = [0, 1, 2, 3, 4, 5];

    // Print Original array
    console.log("Original array : ", numberArray);      // Output -> Original array :  [ 0, 1, 2, 3, 4, 5 ]

    const applySlice = numberArray.slice(1, 3);
    console.log("Slice : ", applySlice);                // Output -> Slice :  [ 1, 2 ]
    console.log("Array after slice : ", numberArray);   // Output -> Array after slice :  [ 0, 1, 2, 3, 4, 5 ]

    const applySplice = numberArray.splice(1, 3);
    console.log("Splice : ", applySplice);              // Output -> Splice :  [ 1, 2, 3 ]
    console.log("Array after splice : ", numberArray);  // Output -> Array after splice :  [ 0, 4, 5 ]

    //* Interview question : Different between slice() & splice()
    //* slice() : Does not modify the original array. Returns a new array with the selected elements.
    //* splice() : Modifies the original array. Returns an array of the removed elements.