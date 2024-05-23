//* ****************************************************
//* For Loop In JavaScript
//* ****************************************************


//* **************************** For Loop ***************************
    /*
        for (initialization; condition; updation){
            statement
        }
    */
    

    // Counting from 1 ~ 10
    for (let index = 1; index <= 10; index++) {
        console.log(index);
    }
    console.log(`\n`);


    // Print sum from 1 ~ 10
    let sum = 0;
    for (let index = 1; index <= 10; index++) {
        sum += index;        
    }
    console.log(`Sum is : ${sum}\n`);         // Output -> Sum is : 55


    // Print table from 1 ~ 10 using nested for loop
    for (let i = 1; i <= 10; i++) {
        console.log(`Table of : ${i}`);

        for (let j = 1; j <= 10; j++) {
            console.log(`${i} * ${j} = ${i * j}`);
        }
        console.log(`\n`);                  // \n -> Next Line
    }


    // Print Array Elements
    let myArray = [10, 20, 30, 40, 50];
    console.log(`Array Length : ${myArray.length}`);
    
    for (let index = 0; index < myArray.length; index++) {
        console.log(`Array Elements : ${myArray[index]}`);
    }
    console.log(`\n`);

//* **********************************************************************


//* ****************************************************
//* Break And Continue Keyword
//* ****************************************************


//* **************************** Break ***************************
    //* The break statement terminates the current loop or switch statement and transfers program control to the statement following the terminated statement.

    //* Syntax : break;
//* **************************************************************

    for (let index = 1; index <= 10; index++) {
        if(index == 5){
            break; 
        }   
        console.log(`Value of index is : ${index}`);   
    }
    console.log(`\n`);



//* **************************** Continue ***************************
    //* The continue statement terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.

    //* Syntax : continue;
//* *****************************************************************

    for (let index = 1; index <= 10; index++) {
        if(index == 5){
            continue; 
        }
        console.log(`Value of index is : ${index}`);      
    }