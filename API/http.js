const http = require("http");

const dat = require("./dat");

http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "applicationjson" });
    res.write(JSON.stringify(dat));
    res.end();
}).listen(1000);
