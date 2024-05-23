//* ****************************************************
//* While And Do-While Loop In JavaScript
//* ****************************************************


//* **************************** While Loop ***************************
    /*
        while (condition){
            statement
        }
    */
    

    // Counting from 1 ~ 10
    let index = 1;
    while (index <= 10) {
        console.log(index);
        index++;
    }
    console.log(`\n`);


    // Print sum from 1 ~ 10
    let sum = 0;
    let i = 1;
    while (i <= 10) {
            sum += i;     
            i++   
        }
    console.log(`Sum is : ${sum}\n`);         // Output -> Sum is : 55

//* **********************************************************************


//* **************************** Do-While Loop ****************************
    /*
        do{
            statement
        } while (condition);
    */


    // Counting from 1 ~ 10
    let num = 1;
    do {
        console.log(num);
        num += 2;
    } while (num <= 10);
    console.log(`\n`);


    // Print sum from 1 ~ 10
    let total = 0;
    let val = 1;
    do {
        total += val;     
        val++   
    } while (val <= 10);
    console.log(`Sum is : ${sum}\n`);         // Output -> Sum is : 55


    // Print Array Elements
    let myArray = [10, 20, 30, 40, 50];
    console.log(`Array Length : ${myArray.length}`);
    
    let arrIndex = 0;

    do {
        console.log(`Array Elements : ${myArray[arrIndex]}`);
        arrIndex++;
    } while (arrIndex < myArray.length);
    console.log(`\n`);