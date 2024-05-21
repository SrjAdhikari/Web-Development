//* ****************************************************
//* Strings In JavaScript Part - I
//* ****************************************************


//* ******************* String Creation **************************
    //* Strings creation as primitives, from string literals
    const firstName = "Suraj ";
    const lastName = 'Adhikari';
    const country = `Nepal`;

    //* Strings creation as objects, using the String() constructor:
    const fullName = new String('Suraj-Adhikari');
    
    // console.log(firstName + lastName);   String concatination -> Old Way

    //* Modern syntax to concatenate string -> String Interpolation
    console.log(`My name is ${firstName}${lastName}. I am from ${country}`);   

//* *************************************************************


//* ******************* Built-in String Methods *****************

    //* Crerate a string as objects
    const myFullName = new String('Suraj-Adhikari');


    //* 1. Retrieving a specific string character
    console.log(myFullName[0]);             // Output -> S


    //* 2. Retrieving length of string 
    console.log(myFullName.length);         // Output -> 14


    //* 3. Retrieving prototype of string 
    console.log(myFullName.__proto__);      // Output -> {} = Function


    //* 4. The toUpperCase() method -> Convert all the characters to uppercase
    console.log(myFullName.toUpperCase());  // Output -> SURAJ-ADHIKARI


    //* 5. The charAt() method -> Ways to access an individual character in a string
    console.log(myFullName.charAt(6));      // Output -> A


    //* 6. The indexOf() method -> Find the position of a substring/character inside a larger string
    console.log(myFullName.indexOf('A'));   // Output -> 6
    console.log(myFullName.indexOf('hi'));  // Output -> 8

    //* ****************************************************************************    
    //* 7. The substring() method ->  Returns the part of the string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.
    //* Syntax -> substring(indexStart), slice(indexStart, indexEnd)

    console.log(myFullName.substring(0, 4));                    // Output -> Sura
    console.log(myFullName.substring(myFullName.length - 4));   // Output -> kari => Takes 4 last characters of string


    //* ****************************************************************************    
    //* 8. The slice() method -> Extracts a section of the string and returns it as a new string, without modifying the original string.
    //* Syntax -> slice(indexStart), slice(indexStart, indexEnd)
    
    console.log(myFullName.slice(12));     // Output -> ri
    console.log(myFullName.slice(2, 8));   // Output -> raj-Ad
    console.log(myFullName.slice(-5));     // Output -> ikari
    console.log(myFullName.slice(-9, -5)); // Output -> -Adh


    //* ****************************************************************************
    //* 9. The trim() method -> Removes whitespace from both ends of this string and returns a new string, without modifying the original string.

    const str = "   Suraj.   ";
    console.log(str);                   // Output ->   Suraj.   (With whitespace)
    console.log(str.trim());            // Output -> Suraj. (Without whitespace)


    //* ****************************************************************************
    //* 10. The replace() method -> Returns a new string with one, some, or all matches of a pattern replaced by a replacement.
    //* Syntax -> replace(pattern, replacement)

    const url = "https://suraj.com/suraj%20adhikari";
    const paragraph = "I think Ruth's dog is cuter than your dog!";
    const regex = /Dog/i;

    console.log(url.replace('%20', '-'));               // Output -> https://suraj.com/suraj-adhikari
    console.log(paragraph.replace(regex, 'ferret'));    // Output -> I think Ruth's ferret is cuter than your dog!
    
    //* ****************************************************************************