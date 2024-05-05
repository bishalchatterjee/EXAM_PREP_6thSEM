const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Welcome to the Home Page</h1>');
        res.end();
    } else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Contact Us</h1>');
        res.end();
    } else if (req.url === '/support') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Support</h1>');
        res.write('<button onclick="openChat()">Open Chat</button>');
        res.write('<script>');
        res.write('function openChat() {');
        res.write('  alert("Hi, How can I help you?");');
        res.write('}');
        res.write('</script>');
        res.end();
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h1>Page Not Found</h1>');
        res.end();
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});