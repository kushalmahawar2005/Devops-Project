const http = require("http");

const server = http.createServer((res, req) => {
    res.end("Hello From Devops By Kushal");
});

server.listen(3000, () => {
    console.log("Server Running on port no 3000");
})