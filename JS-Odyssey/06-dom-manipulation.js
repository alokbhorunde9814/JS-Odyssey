// This file will cover DOM manipulation techniques in JavaScript.

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed"); // Added log statement

    let heading = document.createElement("h1");
    heading.textContent = "Hello, Guys!";
    document.body.appendChild(heading);
});
