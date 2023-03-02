import morgan from 'morgan';
import cors from 'cors';
import * as dotenv from 'dotenv';

import express from 'express';
import connectDB from './database/config';

import router from './routes';

const app = express();

const PORT = process.env.PORT || 3000;

dotenv.config({ path: '../.env' });

connectDB();

app.use(cors());
app.options('*', cors);

app.use(morgan('dev'));

app.use(express.json({ limit: 1000000 }));
app.use(express.urlencoded({ limit: 1000000, extended: true }));

app.use('', router);

app.get('/', (_, res) => {
  res.send('OK');
});

const server = app.listen(PORT, () =>
  console.log(`Server listening on http://localhost:${PORT}`),
);

server.timeout = 1000 * 3;
