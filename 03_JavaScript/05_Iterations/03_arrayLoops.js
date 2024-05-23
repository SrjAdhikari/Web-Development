//* ****************************************************
//* High Order Array Loop In JavaScript
//* ****************************************************


//* ****************** For...Of Loop *******************
    /*
        for (variable of iterable){
            statement
        }
    */

    // Array
    const number = [1, 2, 3, 4, 5];
    for (const num of number) {
        console.log(num);
    }
    console.log(`\n`);


    // String
    const greetings = "Hello Everyone";
    for (const greet of greetings) {
        // Skip space
        if(greet == " ")
            continue;
        console.log(`Each character is ${greet}`);
    }
    console.log(`\n`); 


//* ****************** For...In Loop *******************
    /*
        for (variable in object){
            statement
        }
    */


    // Array
    const numbers = [10, 20, 30, 40, 50];
    console.log(`Elements of array :`);
    for (const key in numbers) {
        console.log(numbers[key]);            
    }
    console.log(`\n`); 


    // String
    const language = "JavaScript";
    for (const lang in language) {
        console.log(`Character is : ${language[lang]}`);
    }
    console.log(`\n`); 
    

//* ****************** Foreach Method ******************
    //* The forEach() method of Array instances executes a provided function once for each array element.
    //* Syntax : forEach(callbackFn), forEach(callbackFn, thisArg)

    const coding = ["C++", "Java", "JS", "Ruby", "Python"];
    coding.forEach( function (language){    // Normal Function
        console.log(language);
    })
    console.log(`\n`); 


    const value = [10, 11, 12, 13];
    value.forEach( (item) => {              // Arrow Function
        console.log(item);
    })
    console.log(`\n`); 


    // Function that print elements of array
    function printItem(items){
        console.log(items);
    }
    coding.forEach(printItem);
    console.log(`\n`); 


    // Print array items with index
    coding.forEach( (item, index) =>{
        console.log(item, index);
    })