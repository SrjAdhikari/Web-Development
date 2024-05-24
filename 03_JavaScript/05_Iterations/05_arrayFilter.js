//* ****************************************************
//* Array Filter() Method
//* ****************************************************


//* **************************** Filter() ***************************
    //* The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

    //* Program that returns the values which are strictly greater than the given value.
    const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // Use the filter() method to create a new array with numbers greater than 4
    let newNums = myNums.filter( (num) => num > 4)
    console.log(newNums);       // Output -> [ 5, 6, 7, 8, 9, 10 ]


    let newNums2 = myNums.filter( (item) => {
        return item > 5;        // If wee don't use 'return' keyword it give empty array as an output.
    })
    console.log(newNums2);      // Output -> [ 6, 7, 8, 9, 10 ]


    //* *************************************************************


    // Array of book objects
    const books = [
        { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
        { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
        { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
        { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
        { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
        { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
        { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
        { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
        { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
      ];
    
    // Filter the books array to get books with the genre 'History'
    let userBooks = books.filter( (bk) => bk.genre === 'History')
    
    // Further filter the userBooks array to include only those published on or after 1995 and have the genre 'History'
    userBooks = books.filter( (bk) => { 
        return bk.publish >= 1995 && bk.genre === "History"
    })

    // Output the filtered array to the console
    console.log(userBooks);


//* **************************** foreach() **************************
    //* Program that returns the values which are strictly greater than the given value.
    const numbers = [10, 20, 30, 40, 50, 60, 70];

    // Create an empty array
    const newNum = [];

    numbers.forEach( (num) => {
        if(num > 45){
            newNum.push(num);
        }
    })
    console.log(newNum);        // Output -> [ 50, 60, 70 ]