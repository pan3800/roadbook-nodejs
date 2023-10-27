const http = require('http');

http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello');
        res.end()
    }
})
.listen(9000, () => {
    console.log('9000포트에서 서버 연결');
});