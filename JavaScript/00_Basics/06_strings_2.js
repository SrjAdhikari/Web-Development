//* ****************************************************
//* Strings In JavaScript Part - II
//* ****************************************************


//* ******************* Built-in String Methods *****************

    //* **************************************************************************** 
    //* 11. The includes() method -> Performs a case-sensitive search to determine whether a given string may be found within this string, returning true or false as appropriate.
    //* Syntax -> includes(searchString), includes(searchString, position)  

    const paragraph = "I think Ruth's dog is cuter than your dog!";
    const regex = /Dog/i;

    console.log(paragraph.includes('dog'));             // Output -> True
    console.log(paragraph.includes('cat'));             // Output -> False
    console.log(paragraph.includes("dog", 1));          // Output -> True
    console.log(paragraph.includes(""));                // Output -> True


    //* ****************************************************************************
    //* 12. The split() method -> Takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.
    //* Syntax -> split(separator), split(separator, limit)

    const phrase = 'Suraj-Adhikari-Nepal';
    const strString = 'The quick brown fox jumps over the lazy dog.';
    const words = strString.split(' ');

    console.log(phrase.split('-'));              // Output -> [ 'Suraj', 'Adhikari', 'Nepal' ]
    console.log(words);                         // Output -> [ 'The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy','dog.' ]
    console.log(words[3]);                      // Output -> fox


    //* ****************************************************************************
    //* 13. The at() method -> Takes an integer value and returns a new String consisting of the single UTF-16 code unit located at the specified offset. This method allows for positive and negative integers. Negative integers count back from the last string character.
    //* Syntax -> at(index)

    const sentence = 'The quick brown fox jumps over the lazy dog.';
    let index = -4;

    console.log(`An index of ${'10'} returns the character ${sentence.at(10)}`);
    // Output -> An index of 10 returns the character b

    console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
    // Output -> An index of -4 returns the character d


    //* ****************************************************************************
    //* 14. The concat() method -> Concatenates the string arguments to this string and returns a new string.
    //* Syntax -> concat(), concat(str1), concat(str1, str2), concat(str1, str2, /* …, */ strN)

    const god = "JESUS";
    const word = "God";
    const greet = "Thank you";

    console.log(greet.concat(' ', god));                // Output -> Thank you JESUS
    console.log(greet.concat(' ', word));               // Output -> Thank you God
    console.log(greet.concat(' ', word, ' ', god));     // Output -> Thank you God JESUS


    //* ****************************************************************************
    //* 15. The padStart() method -> Pads this string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of this string.
    //* Syntax -> padStart(targetLength), padStart(targetLength, padString)

    const numString = '5';
    const fullNumber = '2034399002125581';
    const last4Digits = fullNumber.slice(-4);   // Extract the last 4 digits

    // Pads the last 4 digits to the left with asterisks ('*') to match the length of the original fullNumber.
    const maskedNumber = last4Digits.padStart(fullNumber.length, '*');  

    console.log(numString.padStart(2, '0'));            // Output -> 05
    console.log(maskedNumber);                          // Output -> ************5581


    //* ****************************************************************************
    //* 16. The padEnd() method -> Pads the string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of this string.
    //* Syntax -> padEnd(targetLength), padEnd(targetLength, padString)

    const str1 = 'Breaded Mushrooms';
    const str2 = '200';

    console.log(str1.padEnd(25, '.'));              // Output -> Breaded Mushrooms........
    console.log(str2.padEnd(5));                    // Output -> '200  '


    //* ****************************************************************************
    //* 17. The repeat() method -> Constructs and returns a new string which contains the specified number of copies of this string, concatenated together.
    //* Syntax -> repeat(count)

    const mood = 'Happy! ';
    console.log(`I feel ${mood.repeat(3)}`);            // Output -> I feel Happy! Happy! Happy!

    // count will be converted to integer, 4.5 -> 4
    console.log(`I feel ${mood.repeat(4.5)}`);          // Output -> I feel Happy! Happy! Happy! Happy!

    console.log("abc".repeat(5));                       // Output -> abcabcabcabcabc
    //console.log("abc".repeat(1 / 0));                   // Output -> RangeError : Invalid count value
    console.log("abc".repeat(0));                       // Output -> ' ' (Space)
    //console.log("abc".repeat(-1));                      // Output -> RangeError : Invalid count value


    //* ****************************************************************************
    //* 18. The replaceAll() method -> Returns a new string with all matches of a pattern replaced by a replacement
    //* Syntax -> replaceAll(pattern, replacement)

    const charString = "I think Ruth's dog is cuter than your dog!";
    const regex1 = /Dog/gi;

    console.log(charString.replaceAll('dog', 'monkey'));    
    // Output -> I think Ruth's monkey is cuter than your monkey!

    console.log(paragraph.replaceAll(regex1, 'ferret'));    
    // Output -> I think Ruth's ferret is cuter than your ferret!


    //* ****************************************************************************
    //* 19. The startsWith() method -> Determines whether this string begins with the characters of a specified string, returning true or false as appropriate.
    //* Syntax -> startsWith(searchString), startsWith(searchString, position)

    const strWord = 'Saturday night plans';

    console.log(strWord.startsWith('Sat'));        // Output -> True
    console.log(strWord.startsWith('Sat', 3));     // Output -> False
    console.log(strWord.startsWith('Sat', 0));     // Output -> True
    console.log(strWord.startsWith('night', 9));   // Output -> True


    //* ****************************************************************************
    //* 20. The toString() method -> Returns this string value.
    //* Syntax -> toString()

    const stringObj = new String('foo');

    console.log(stringObj);                     // Output -> [String: 'foo']
    console.log(stringObj.toString());          // Output -> foo

    //* 21. The valueOf() method -> Returns this string value.
    console.log(stringObj);                     // Output -> [String: 'foo']
    console.log(stringObj.valueOf());           // Output -> foo