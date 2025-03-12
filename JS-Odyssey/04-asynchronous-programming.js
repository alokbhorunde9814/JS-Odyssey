// This file will cover concepts related to asynchronous programming in JavaScript.
function fetchDataCallback(callback) {
    setTimeout(() => {
        callback("Data received via callback");
    }, 1000);
}

fetchDataCallback(console.log);

// Promise Example
function fetchDataPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received via Promise");
        }, 1000);
    });
}

fetchDataPromise().then(console.log);

// Async/Await Example
async function fetchDataAsync() {
    let data = await fetchDataPromise();
    console.log(data);
}
fetchDataAsync();