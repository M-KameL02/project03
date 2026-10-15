let count = 0;

// Select HTML elements
const countDisplay = document.getElementById("count");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");

// Update the counter on the page
function updateCounter() {
    countDisplay.textContent = count;

    if (count > 0) {
        countDisplay.style.color = "green";
    } else if (count < 0) {
        countDisplay.style.color = "red";
    } else {
        countDisplay.style.color = "black";
    }
}

// Increment button
incrementButton.addEventListener("click", function () {
    count++;
    updateCounter();
});

// Decrement button
decrementButton.addEventListener("click", function () {
    count--;
    updateCounter();
});

// Reset button
resetButton.addEventListener("click", function () {
    count = 0;
    updateCounter();
});

// Display the initial value
updateCounter();
