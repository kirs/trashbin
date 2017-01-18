const http = require('http');
const handleRequest = (request, response) => {
  console.log('Received request for URL: ' + request.url);
  response.writeHead(200);
  response.end('Hello World!');
};
const www = http.createServer(handleRequest);
const port = 8080;
console.log("Listening on " + port);
www.listen(port);
