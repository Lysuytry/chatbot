import express from 'express';
import body from 'body-parser';
import logger from 'morgan';
import 'dotenv/config';

const app = express();

app.use(logger('dev'));
app.use(body.json());
app.use(body.urlencoded({ extended: false }));

app.use((req, res, next) => {
  next();
});

export default app;
