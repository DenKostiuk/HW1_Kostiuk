alert('What’s up John Doe');

let firstName = prompt('First name')
let lastName = prompt('Last name')

function hasAdmin(firstName, lastName) {
    if (firstName === 'John' && lastName === 'Doe') {
        alert('Привет Admin');
    } 
    else {
        alert('Error');
    }
}

hasAdmin(firstName, lastName)
