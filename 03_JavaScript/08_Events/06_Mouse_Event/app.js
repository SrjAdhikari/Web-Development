const h1 = document.querySelector('h1')
const addCardButton = document.querySelector('.card')
const container = document.querySelector('.container')

let count = 0

//* *********************** Click Event ***********************

// addCardButton.addEventListener('click', () => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

//* ******************* Double Click Event ********************

// addCardButton.addEventListener('dblclick', () => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

//* ********************* Mouse Down Event ********************

// addCardButton.addEventListener('mousedown', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

//* ********************* Mouse Up Event **********************

// addCardButton.addEventListener('mouseup', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

//* ********************* Mouse Enter Event ********************

// addCardButton.addEventListener('mouseenter', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

//* ********************* Mouse Leave Event ********************

// addCardButton.addEventListener('mouseleave', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

//* ********************* Mouse Move Event *********************

// addCardButton.addEventListener('mousemove', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

//* ********************* Mouse Out Event **********************

// addCardButton.addEventListener('mouseout', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

//* ********************* Mouse Over Event ********************

// addCardButton.addEventListener('mouseover', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

//* *********************** Wheel Event ***********************

// document.addEventListener('wheel', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

//* *********************** Scroll Event **********************

// document.addEventListener('scroll', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

//* ********************* Touch Start Event *******************

// addCardButton.addEventListener('touchstart', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

//* ********************* Mouse Hend Event ********************

// addCardButton.addEventListener('touchend', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

//* ************************ Drag Event ***********************

// h1.addEventListener('drag', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

//* ********************* Touch Move Event ********************

// addCardButton.addEventListener('touchmove', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

//* ********************* Pointer Move Event *****************

// addCardButton.addEventListener('pointermove', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

//* ********************* Pointer Enter Event ****************

// addCardButton.addEventListener('pointerenter', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

//* ********************* Pointer Leave Event ****************

addCardButton.addEventListener('pointerleave', (e) => {
    console.log(e);
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})