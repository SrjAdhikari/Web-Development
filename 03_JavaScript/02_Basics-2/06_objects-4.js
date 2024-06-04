//* ****************************************************
//* Object Exercise
//* ****************************************************

//* ****************************************************
    const product = {
        name : 'basketball',
        price : 2000
    };
    console.log(product);       // Output -> { name: 'basketball', price: 2000 }

    product.price += 500;
    console.log(product);       // Output -> { name: 'basketball', price: 2500 }

    product['delivery-time'] = '5 days';
    console.log(product);       // Output -> { name: 'basketball', price: 2500, 'delivery-time': '5 days' }

//* *****************************************************

//* ****************************************************
    const product_1 = {
        name: 'basketball',
        price: 2095
    };

    const product_2 = {
        name: 'socks',
        price: 1090
    };    

    function comparePrice(product_1, product_2) {
        if (product_1.price < product_2.price) {
            return product_1;
        } 
        else {
            return product_2;
        }
    }
    console.log(comparePrice(product_1, product_2));      // Output -> { name: 'socks', price: 1090 }

//* ****************************************************

//* ****************************************************
    const product1 = {
        name: 'basketball',
        price: 2095
    };

    const product2 = {
        name: 'socks',
        price: 1090
    };

    const product3 = {
        name: 'basketball',
        price: 2095
    };
    
    function isSameProduct(product1, product2) {
        if (
          product1.name === product2.name &&
          product1.price === product2.price
        ) {
          return true;
        } 
        else {
          return false;
        }
    }

    // Here is an alternative solution that uses less code.
    function isSameProduct(product1, product2) {
        return (
          product1.name === product2.name &&
          product1.price === product2.price
        );
    }

    console.log(isSameProduct(product1, product2));     // Output -> false
    console.log(isSameProduct(product1, product3));     // Output -> true