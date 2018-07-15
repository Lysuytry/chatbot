import express from 'express';
import body from 'body-parser';
import logger from 'morgan';
import Bootbot from 'bootbot';
import 'dotenv/config';

const app = express();
const bot = new Bootbot({
  accessToken: 'EAAg9uKlXsmABADLO6EBoELi7c4bpCvmYWk8g6eMc49j3ldMyuGzCo2h86Pmgg1KGpnByIClI4nUcbcaegqxdBAb0f0JnuXRZAmaLjwMW1iGFY3yCZByKw8LA6UTbuwAWNcryg1vz3vtaI2rGYTBDDqbFPFQ9zZCMWhr8UKDJwZDZD',
  verifyToken: 'perter-bot',
  appSecret: 'e4dfe78105cb5af810e9484ef259813c'
});

app.use(logger('dev'));
app.use(body.json());
app.use(body.urlencoded({ extended: false }));

app.use((req, res, next) => {
  next();
});

bot.on('message', (payload, chat) => {
  const text = payload.message.text;
  chat.say(`Echo: ${text}`);
});

bot.start();

export default app;
