// Get the element with the ID 'insert'.
const insert = document.getElementById('insert');

// Add an event listener to the window object for the 'keydown' event.
window.addEventListener('keydown', (e) => {

    // Update the inner HTML of the 'insert' element with a table showing the key, keyCode, and code of the pressed key.
    insert.innerHTML = `
        <div class='color'>
            <table style="border-collapse: collapse; width: 100%;">
                <tr>
                    <th>Key</th>
                    <th>Keycode</th> 
                    <th>Code</th>
                </tr>
                <tr>
                    <td>${e.key === ' ' ? 'Space' : e.key}</td>
                    <td>${e.keyCode}</td> 
                    <td>${e.code}</td>
                </tr>
            </table>
        </div>
    `;
});