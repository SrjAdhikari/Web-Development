//* *******************************************************
//* Nullish coalescing operator (??)
//* *******************************************************


//* *******************************************************
    //* The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

    //* Syntax : leftExpr ?? rightExpr
//* *******************************************************


//* *********************** Example ************************
    let value;
    value = 10 ?? 20;
    console.log(value);         // Output -> 10


    let value1;
    value1 = null ?? 20;
    console.log(value1);         // Output -> 20


    let value2;
    value2 = undefined ?? 200;
    console.log(value2);         // Output -> 200


    let value3;
    value3 = null ?? 100 ?? 200;
    console.log(value3);         // Output -> 100


    let str;
    str = null ?? "Srj" ?? 200;
    console.log(str);         // Output -> Srj


    let myName;
    myName = (null || undefined) ?? "Suraj";
    console.log(myName);         // Output -> Suraj


//* *******************************************************
//* Ternary Operator
//* *******************************************************


//* *******************************************************
    //* This operator is frequently used as an alternative to an if...else statement.

    //* Syntax : condition ? exprIfTrue : exprIfFalse
//* *******************************************************


//* *******************************************************
    const age = 26;
    const beverage = age >= 21 ? "Beer" : "Juice";
    console.log(beverage);      // Output -> Beer


    const mark = 80;
    const result = mark >= 40 ? "Pass" : "Fail";
    console.log(result);        // Output -> Pass

    //* *******************************************************