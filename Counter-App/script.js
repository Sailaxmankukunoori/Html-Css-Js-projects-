// Select DOM elements
const counterDisplay = document.getElementById('counter-display'); // Counter display
const incrementBtn = document.getElementById('increment-btn'); // Increment button
const decrementBtn = document.getElementById('decrement-btn'); // Decrement button
const resetBtn = document.getElementById('reset-btn'); // Reset button

// Initialize counter value
let counter = 0;

// Function to update the counter display
function updateCounterDisplay() {
    counterDisplay.textContent = counter; // Update the displayed counter value

    // Apply color styling for negative values
    if (counter < 0) {
        counterDisplay.classList.add('negative'); // Add 'negative' styling for values below 0
    } else {
        counterDisplay.classList.remove('negative'); // Remove 'negative' styling for values 0 and above
    }
}

// Event listener for increment button
incrementBtn.addEventListener('click', () => {
    counter++; // Increment the counter
    updateCounterDisplay(); // Update the display
});

// Event listener for decrement button
decrementBtn.addEventListener('click', () => {
    counter--; // Decrement the counter
    updateCounterDisplay(); // Update the display
});

// Event listener for reset button
resetBtn.addEventListener('click', () => {
    counter = 0; // Reset the counter to 0
    updateCounterDisplay(); // Update the display
});
