//Implement a function using arrow funciton(ES6) to reverse a string without using the built in method

const reverseString = (str) => {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
};

// Example usage
const originalString = 'Hello, World!';
const reversedString = reverseString(originalString);
console.log(reversedString); // Output: "!dlroW ,olleH"