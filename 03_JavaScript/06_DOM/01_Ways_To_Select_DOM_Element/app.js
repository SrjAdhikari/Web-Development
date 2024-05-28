//* ****************************************************
//* 5 Different Ways To Select DOM Element
//* ****************************************************


//* 1. getElementById()
    //* The getElementById() method of the Document interface returns an Element object representing the element whose id property matches the specified string.

    //* Syntax : getElementById(id)

    // Select h1 element by Id.
    const title = document.getElementById('main-heading');
    console.log(title);


//* 2. getElementByClassName()
    //* The getElementsByClassName method of Document interface returns an array-like object of all child elements which have all of the given class name(s).

    //* Syntax : getElementsByClassName(names)

    // Select li element by className.
    const listItems = document.getElementsByClassName('list-items');
    console.log(listItems);


//* 3. getElementsByTagName()
    //* The getElementsByTagName method of Document interface returns an HTMLCollection of elements with the given tag name.
    
    //* Syntax : getElementsByTagName(name)

    // Select li element by TagName.
    const listItem = document.getElementsByTagName('li');
    console.log(listItem);


//* 4. querySelector()
    //* The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.

    //* Syntax : querySelector(selectors)

    // Select the very first 'div' by querySelector.
    const div = document.querySelector('div');
    console.log(div);


//* 5. querySelectorAll()
    //* The Document method querySelectorAll() returns a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors.

    //* Syntax : querySelectorAll(selectors)

    // Select all the 'div' present in html page by querySelectorAll.
    const divs = document.querySelectorAll('div');
    console.log(divs);