//* ****************************************************
//* Operations In JavaScript
//* ****************************************************

let num = 5;
let negNum = -num;
console.log(negNum);


//* *************** Basic Mathematical Oprations ***************
    console.log(5 + 5);
    console.log(5 - 5);
    console.log(5 * 5);
    console.log(2 ** 3);    // 2^3 -> 8
    console.log(5 / 5);
    console.log(6 % 5);

    
//* *************** String Concatination ***************
    let greeting = "Hello ";
    let myName = "suraj";
    let greetName = greeting + myName;
    console.log(greetName);     // Output -> Hello Suraj


//* *************** Tricky Operations ***************
    console.log("1" + 2);       // Output -> 12  (If the first operand is a string, then all are considered as strings and concatenated.)
    console.log(1 + "2");       // Output -> 12
    console.log("1" + 2 + 3);   // Output -> 123
    console.log(1 + 2 + "3");   // Output -> 33 (First : 1 + 2 => 3, Then : 3 + "3" => 33)
                                // (If the last operand is a string, then all the operations before the string are performed and concatenated.)

    console.log(+true);         // Output -> 1  (Bad Practice)
    console.log(+"");           // Output -> 0  (Bad Practice)


//* *************** Prefix & Postfix Increment ***************
    // Postfix -> Returns the value before incrementing.
    let x = 3;
    const y = x++;
    console.log(x, y);          // Output -> 4, 3

    // Prefix -> Returns the value after incrementing.
    let a = 3;
    const b = ++a;
    console.log(a, b);          // Output -> 4, 4

    // ++(++x); SyntaxError : Invalid left-hand side expression in prefix operation.