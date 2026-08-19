import http from 'node:http';
const PORT = 1234;
const server = http.createServer((req, res) => {
    let text = String(req.method && req.url);
    res.write(text);
    res.end(JSON.stringify({
        message: "Hello"
    }));
});
server.listen(PORT, () => [
    console.log(`http://localhost:${PORT}/`)
]);
