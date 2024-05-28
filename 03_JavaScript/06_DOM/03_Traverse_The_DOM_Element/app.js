//* Traverse The DOM


//* Parent Node Traversal

    // Select the first <ul> element on the page and store it in a variable named 'ul'
    let ul = document.querySelector('ul');
    // console.log(ul);

    console.log(ul.parentNode);         // Log the parent node of the <ul> element to the console
    console.log(ul.parentElement);      // Log the parent element of the <ul> element to the console

    console.log(ul.parentNode.parentNode);          // Log the grandparent node (the parent of the parent node) of the <ul> element to the console
    console.log(ul.parentElement.parentElement);    // Log the grandparent element (the parent of the parent element) of the <ul> element to the console


//* Child Node Traversal

    // Select the first <ul> element on the page and store it in a variable named 'unorderList'
    let unorderList = document.querySelector('ul');
    // console.log(unorderList);

    // Log all child nodes of the <ul> element to the console. This includes all types of nodes: elements, text nodes (including whitespace), etc.
    console.log(unorderList.childNodes);

    // Log the first child node of the <ul> element to the console. This could be an element, a text node, or another type of node
    console.log(unorderList.firstChild);

    // Log the last child node of the <ul> element to the console. This could be an element, a text node, or another type of node
    console.log(unorderList.lastChild);


    // Log only the child elements of the <ul> element to the console. This excludes text nodes and only includes element nodes
    console.log(unorderList.children);

    // Log the first child element of the <ul> element to the console
    console.log(unorderList.firstElementChild);

    // Log the last child element of the <ul> element to the console
    console.log(unorderList.lastElementChild);

    // Log the number of child elements in the <ul> element to the console
    console.log(unorderList.childElementCount);

    // Change the background color of the second child node of the <ul> element to orange
    // Note: ul.childNodes[1] targets the second child node, which could be a text node or element
    ul.childNodes[1].style.backgroundColor = 'orange';


//* Sibling Node Traversal

    // Select the first <ul> element on the page and store it in a variable named 'unorderList1'
    let unorderList1 = document.querySelector('ul');

    // Select the first <div> element on the page and store it in a variable named 'div'
    const div = document.querySelector('div')

    // Log all child nodes of the <div> element to the console. This includes all types of nodes: elements, text nodes (including whitespace), etc.
    console.log(div.childNodes);

    // Log the previous sibling node of the <ul> element to the console. This could be a text node, element, or another type of node
    console.log(unorderList1.previousSibling);
    // Log the next sibling node of the <ul> element to the console. This could be a text node, element, or another type of node
    console.log(unorderList1.nextSibling);

    // Log the previous sibling element of the <ul> element to the console. This excludes text nodes and only includes element nodes
    console.log(unorderList1.previousElementSibling);
    // Log the next sibling element of the <ul> element to the console. This excludes text nodes and only includes element nodes
    console.log(unorderList1.nextElementSibling);
