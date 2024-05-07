const connect = require('connect');
const http = require('http');
const app = connect();

const errorLogger = (err, req, res, next) => {
    console.error('Error:', err);
    next(err);
};

app.use('/', (req, res, next) => {
    if (req.url === '/') {
        res.end('This is connect application');
    } else {
        next();
    }
});

app.use('/error', (req, res, next) => {
    const error = new Error('Custom Error');
    console.error('Simulated error:', error);
    next(error);
});

app.use((err, req, res, next) => {
    res.statusCode = 500;
    res.end('Custom Error has occured');
});

app.use(errorLogger);

http.createServer(app).listen(3000, () => {
    console.log('Server running on port 3000');
});
