

let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})

// Get references to the count display and buttons
const countDisplay = document.getElementById("count-display");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

// Initialize the count variable
let count = 0;

// Function to update the count display
function updateCount() {
    countDisplay.textContent = count;
}

// Event listeners for the buttons
prevButton.addEventListener("click", function() {
    // Decrement the count and update the display
    count--;
    updateCount();
});

nextButton.addEventListener("click", function() {
    // Increment the count and update the display
    count++;
    updateCount();
});
