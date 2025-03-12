// This file will cover the Fetch API and how to make network requests in JavaScript.

async function fetchData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        let data = await response.json();
        console.log("Fetched Data:", data);
    } catch (error) {
        console.error("Fetch Error:", error);
    }
}
fetchData();
