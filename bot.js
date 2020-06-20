const TelegramBot = require("node-telegram-bot-api");
module.exports = () => {
  const token = process.env.TOKEN;
  const bot = new TelegramBot(token, { polling: true });

  bot.on("message", (msg) => {
    const chatId = msg.chat.id;

    bot.sendMessage(chatId, "This is a stupid chat bot");
  });
};
