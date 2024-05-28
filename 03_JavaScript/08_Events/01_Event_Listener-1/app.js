//* ****************************************************
//* Event Listeners Part - I
//* ****************************************************


//* ****************************************************
    //* addEventListener() method -> The addEventListener() method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.

    //* The addEventListener() method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.

    //* Syntax : addEventListener(type, listener), addEventListener(type, listener, options), addEventListener(type, listener, useCapture)

//* ****************************************************


//* ***************** Click Event **********************
    const secondBtn = document.querySelector('.btn-2');
    function alertBtn(){
        alert('I also Love JavaScript')
    };

    secondBtn.addEventListener("click", alertBtn);


//* ***************** Mouseover Event ******************
    //* The mouseover event is fired at an Element when a pointing device (such as a mouse or trackpad) is used to move the cursor onto the element or one of its child elements.

    const thirdBox = document.querySelector('.box-3');
    function changeBgColor (){
        thirdBox.style.backgroundColor = 'lightBlue';
    }

    thirdBox.addEventListener("mouseover", changeBgColor);