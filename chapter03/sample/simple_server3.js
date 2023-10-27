const http = require('http');

http.createServer((req, res) => {
    console.log(req);
    console.log(res);
})
.listen(3000, () => {
    console.log('3000포트에서 서버 연결')
});