//* ****************************************************
//* Array Reduce() Method
//* ****************************************************


//* **************************** Reduce() ***************************
    //* The reduce() method is used to reduce an array to a single value. It executes a provided callback function once for each element in the array, resulting in a single output value. 


    const numbers = [1, 2, 3, 4, 5];

    // Calculating the sum of all elements in the array using reduce
    let total = numbers.reduce( function (accumulator, currentValue) {

        // Printing value of accumulator and currentValue
        console.log(`Accumulator : ${accumulator} and CurrentValue : ${currentValue}`);

        return accumulator + currentValue;
    }, 0)
    console.log(total);         // Output -> 15


    //* *************************************************************

    // 1. Arrow Function
    let product = numbers.reduce( (accumulator, currentValue) => {

        // Printing value of accumulator and currentValue
        console.log(`Accumulator : ${accumulator} and CurrentValue : ${currentValue}`);

        return accumulator * currentValue
    }, 5)
    console.log(product);       // Output -> 600


    // 2. Arrow Function
    let sum = numbers.reduce( (accumulator, currentValue) => accumulator + currentValue, 5)
    console.log(sum);       // Output -> 20


    //* *************************************************************

    // Array of objects representing items in the shopping cart
    const shoppingCart = [
        {
            itemName : "Book",
            price : 599
        },
        {
            itemName : "Pen",
            price : 99
        },
        {
            itemName : "Mouse",
            price : 1999
        },
        {
            itemName : "Keyboard",
            price : 2999
        },
        {
            itemName : "Earphone",
            price : 5999
        },
    ]

    // Calculate the total price to pay using reduce method
    let priceTopay = shoppingCart.reduce( (accumulator, item) => accumulator + item.price, 0);

    // Output the total price to pay
    console.log(priceTopay);        // Output -> 11695