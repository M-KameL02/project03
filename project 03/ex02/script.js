
const title = document.getElementById("title");
const message = document.querySelector(".message");
const button = document.getElementById("changeBtn");

// Change text content
title.textContent = "My First DOM Exercise";

// Change styling
title.style.color = "blue";

// Add an active class when the button is clicked
button.addEventListener("click", function () {
    message.textContent = "The page has changed successfully!";

    message.classList.add("active");

    title.style.color = "green";
});
