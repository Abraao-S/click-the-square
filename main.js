// takes all the div items (in this case the squares) and stores them on the variable squares
const squares = document.querySelectorAll('div');

squares.forEach(square => {
    square.addEventListener('click', clickOutcome)
});


function clickOutcome() {
    alert('I have been clicked!');
}

// testing
// console.log(squares);