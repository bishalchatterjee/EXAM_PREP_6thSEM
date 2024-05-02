//Write an express Program to accept 2 no. write form to connect it and perform basic arithmetic operation
const express = require('express');
const bodyParser = require('body-parser');

const server = express();
const port = 3001;

//Middleware to parse urlencoded form data
server.use(bodyParser.urlencoded({extended: true}));

//Route to serve HTML Form
server.get('/', (req, res)=>{
    res.send(`
    <html>
    <head>
        <title>Arithmetic Calculator</title>
    </head>
    <body>
        <h1>Arithmetic Calculator</h1>
        <form action="/calculate" method="post">
            <label for="num1">Enter number 1:</label>
            <input type="text" name="num1">
            <br>
            <br>
            <label for="num2">Enter number 2:</label>
            <input type="text" name="num2">
            <br>
            <br>
            <button type="submit">Calculate</button>
        </form>
    </body>
    </html>
    `);
});

// Route to handle form submission and perform calculations
server.post('/calculate', (req, res) => {
    const num1 = parseFloat(req.body.num1);
    const num2 = parseFloat(req.body.num2);
  
    if (isNaN(num1) || isNaN(num2)) {
      res.send('Please enter valid numbers.');
      return;
    }
  
    const sum = num1 + num2;
    const difference = num1 - num2;
    const product = num1 * num2;
    let division = 'Cannot divide by zero';
    if (num2 !== 0) {
      division = num1 / num2;
    }
  
    res.send(`
      <html>
      <head>
        <title>Arithmetic Calculator - Result</title>
      </head>
      <body>
        <h1>Result</h1>
        <p>Sum: ${sum}</p>
        <p>Difference: ${difference}</p>
        <p>Product: ${product}</p>
        <p>Division: ${division}</p>
        <a href="/">Back to Calculator</a>
      </body>
      </html>
    `);
  });
  
  // Start the server
  server.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
  });
