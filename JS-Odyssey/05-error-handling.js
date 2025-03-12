// This file will cover error handling techniques in JavaScript.

try {
    let result = 10 / 0;
    if (!isFinite(result)) throw new Error("Cannot divide by zero");
} catch (error) {
    console.error("Error:", error.message);
} finally {
    console.log("Execution completed");
}
