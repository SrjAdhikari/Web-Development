//* ****************************************************
//* Conditions In JavaScript
//* ****************************************************


//* **************************** If Condition ***************************
    /*
        if (condition){
            statement1
        }
    */

    let num1 = 2;
    let num2 = 2;
    if(num1 == num2){
        console.log(`Both values are equal`);
    }

    let num3 = 2;
    let num4 = "2";
    if(num3 === num4){
        console.log(`Both values are equal`);       // Nothing print because their type is not same
    }

    let score = 100;
    if(score > 50){
        let power = 'Fly';
        console.log(`User Power : ${power}`);       // Output -> User Power : Fly
    }
    //console.log(`User Power : ${power}`);           // Throw an error because the scope of 'power' is only inside the if condition.

//* **********************************************************************


//* ************************** If Else Condition *************************
    /*
        if (condition){
            statement1
        }
        else{
            statement2
        }
    */

    let value = -10;
    if (value > 0) {
        console.log(`Value is positive`);
    } else {
        console.log(`Value is negative`);
    }
    
//* **********************************************************************


//* ************************** If Else If Condition ***********************
    /*
        if (condition1)
            statement1
        else if (condition2)
            statement2
        else if (condition3)
            statement3
        .....
        else
            statementN
    */
  
    let balance = 1000;
    if(balance < 500){
        console.log(`Balance is less than 500`);
    }
    else if(balance < 750){
        console.log(`Balance is less than 750`);
    }
    else if(balance < 950){
        console.log(`Balance is less than 950`);
    }
    else{
        console.log(`Balance is greater than 950`);
    }

//* **********************************************************************


//* **********************************************************************
    const userLoggedIn = true;
    const debitCard = true;

    if(userLoggedIn && debitCard){
        console.log(`Allow to buy.`);
    }


    const loggedInFromGoogle = false;
    const loggedInFromEmail = true;

    if(loggedInFromGoogle || loggedInFromEmail){
        console.log(`User logged in.`);
    }