console.log('javascript is working');

let usersWord = "";

function updateWord(element) {
    usersWord = element.value;
}

// Defining our function in JavaScript
function addToList() {
    // Target the div in HTML by the ID "even"
    let even = document.getElementById('even');
    // Target the div in HTML by the ID "odd"
    let odd = document.getElementById('odd');
    // Create a new div element to create our new list item
    let newListItem = document.createElement('div');
    // Use newListItem variable and set text inside of it
    newListItem.innerText = usersWord;

    if (usersWord.length % 2 === 0) {
        // Target the list div in HTML and put the new list item text inside
        even.appendChild(newListItem);
    } else {
        odd.appendChild(newListItem);
    }
}

function deleteEverything() {
    usersWord = "";
    even.innerText = "";
    odd.innerText = "";
}