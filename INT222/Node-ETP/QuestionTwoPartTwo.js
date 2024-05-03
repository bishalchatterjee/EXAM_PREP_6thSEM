//Implement a Node.js application to create a writable steam with a new sample.txt file and compute the prime number up to 100 and write the values to the sample.txt file with writeable stream Dispay the message "Task Completed" at the end in the console window.

const fs = require('fs');

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Create a writable stream to write prime numbers to sample.txt
const writableStream = fs.createWriteStream('/C:/Users/bisha/Desktop/ETP Prep/INT222/Node-ETP/sample.txt');

// Compute prime numbers up to 100 and write them to the stream
for (let i = 2; i <= 100; i++) {
    if (isPrime(i)) {
        writableStream.write(i + '\n');
    }
}

// Close the writable stream and display "Task Completed" in the console
writableStream.end(() => {
    console.log('Task Completed');
});
