const http = require('http');
const querystring = require('querystring');

// Function to parse cookies from the cookie header
const parseCookies = (cookieHeader) => {
    return cookieHeader.split(';').reduce((cookies, cookie) => {
        const [name, value] = cookie.split('=').map(c => c.trim());
        cookies[name] = value;
        return cookies;
    }, {});
};

// Create an HTTP server
const server = http.createServer((req, res) => {
    if (req.url.startsWith('/set-cookie')) {
        const query = req.url.split('?')[1];
        const { name, email } = querystring.parse(query);

        res.writeHead(200, {
            'Set-Cookie': [`name=${name}`, `email=${email}`],
            'Content-Type': 'text/plain'
        });
        res.end('Cookies have been set');
    } else if (req.url === '/get-cookies') {
        const cookies = parseCookies(req.headers.cookie || '');
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(cookies));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page Not Found');
    }
});

// Start the server
server.listen(8080, () => {
    console.log('Server running at http://localhost:8080/');
});
