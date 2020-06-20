const TelegramBot = require("node-telegram-bot-api");
module.exports = () => {
  const token = "1089784292:AAFF4ilsJRCbE57XGQ1fR3H7U_r41yCZg4Y";

  const bot = new TelegramBot(token, { polling: true });

  bot.on("message", (msg) => {
    const chat_id = msg.chat.id;
    const echo = msg.text;
    bot.sendMessage(chat_id, echo);
  });
};
