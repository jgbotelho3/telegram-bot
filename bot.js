const TelegramBot = require("node-telegram-bot-api");
module.exports = () => {
  const token = "1089784292:AAFF4ilsJRCbE57XGQ1fR3H7U_r41yCZg4Y";
  const bot = new TelegramBot(token, { polling: true });

  // bot.onText(/\/echo (.+)/, (msg, match) => {
  //   console.log(msg);
  //   const chatId = msg.chat.id;
  //   const resp = match[1]; // the captured "whatever"
  //   bot.sendMessage(chatId, resp);
  // });

  bot.on("message", (msg) => {
    const chatId = msg.chat.id;

    bot.sendMessage(
      chatId,
      "Oi, obrigado por falar comigo! Ah antes que eu me esqueça, eu amo você!"
    );
  });
};
