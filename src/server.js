import http from "node:http";

const server = http.createServer(({ method, url }, response) => {
  console.log(method, url);
  return response.end("Hello world");
});

server.listen(3333);
