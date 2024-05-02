const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Route to serve the HTML form
app.get('/', (req, res) => {
  res.send(`
    <h1>Find Vowels</h1>
    <form action="/findvowels" method="post">
      <label for="inputString">Enter a string:</label><br>
      <input type="text" id="inputString" name="inputString" required><br>
      <button type="submit">Find Vowels</button>
    </form>
  `);
});

// Route to handle form submission and find vowels in the input string
app.post('/findvowels', (req, res) => {
  const inputString = req.body.inputString;
  const vowels = inputString.match(/[aeiouAEIOU]/g) || []; // Regular expression to find vowels
  const vowelCount = vowels.length;
  res.send(`
    <h1>Result</h1>
    <p>Input String: ${inputString}</p>
    <p>Vowels: ${vowels.join(', ')}</p>
    <p>Total Vowels: ${vowelCount}</p>
    <a href="/">Go back to form</a>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
