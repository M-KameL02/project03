
"use strict";

const input = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const list = document.getElementById("taskList");
const counter = document.getElementById("counter");

let total = 0;

function addTask() {
    if (input.value.trim() === "") {
        return;
    }

    const li = document.createElement("li");
    li.textContent = input.value;

    // Complete task by clicking the task text
    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function (event) {
        event.stopPropagation();
        li.remove();
        total--;
        counter.textContent = total;
    });

    li.appendChild(deleteButton);
    list.appendChild(li);

    total++;
    counter.textContent = total;

    input.value = "";
}

// Add task using button
addButton.addEventListener("click", addTask);

// Add task using Enter key
input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
