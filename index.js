const http = require("http");
const TelegramBot = require("node-telegram-bot-api");

const port = process.env.PORT || 5000;

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify({ name: "Jeff Bot", v: "0.0.1" }));
    response.end();
  })
  .listen(port);

const token = "1089784292:AAFF4ilsJRCbE57XGQ1fR3H7U_r41yCZg4Y";

const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg) => {
  console.log(msg);

  const chat_id = msg.chat.id;
  const echo = msg.text;
  bot.sendMessage(chat_id, echo);
});
