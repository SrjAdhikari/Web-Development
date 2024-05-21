//* ****************************************************
//* Object De-Structure
//* ****************************************************


//* ******************************** Defination ******************************
    //* The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.


//* ******************************** Syntax ******************************
    /*
        const [a, b] = array;
        const [a, , b] = array;

        const { a, b } = obj;
        const { a: a1, b: b1 } = obj;
        const { [key]: a } = obj;
    */


//* ********************************************************************************
    const obj = { a : 10, b : 20 };

    // Object De-Structure
    const { a, b } = obj;   // is equivalent to : const a = obj.a;  const b = obj.b;

    console.log(a);             // Output -> 10
    console.log(b);             // Output -> 20


//* ********************************************************************************
    const course = {
        courseName : "JavaScript",
        coursePrice : "999",
        courseInstructor : "Hitesh"
    }

    // Object De-Structure
    const {courseInstructor} = course;
    const {courseInstructor : instructor} = course;

    console.log(courseInstructor);          // Output -> Hitesh
    console.log(instructor);                // Output -> Hitesh


//* ********************************************************************************
    const number = [1, 2, 3, 4, 5];

    // Array De-Structure
    const [num1, num2] = number;

    console.log(num1);          // Output -> 1
    console.log(num2);          // Output -> 2