const express = require('express');
const app = express();

const errorLogger = (err, req, res, next) => {
    console.error(err);
    res.status(500);
    res.json({ error: err.message });
};

app.get('/', (req, res, next) => {
    try {
        res.send('This is a connect application');
    } catch (err) {
        next(err);
    }
});

app.get('/error', (req, res, next) => {
    try {
        throw new Error('This Path is Handled by Error Handler Middleware');
    } catch (err) {
        next(err);
    }
});

app.use(errorLogger);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});