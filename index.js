const http = require("http");

const port = process.env.PORT || 5000;

require("./bot.js");
http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify({ name: "Jeff Bot", v: "0.0.1" }));
    response.end();
  })
  .listen(port);
