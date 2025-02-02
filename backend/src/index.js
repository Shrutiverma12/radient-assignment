import express from 'express';
import { PORT } from './config/serverConfig.js';
import apiRouter from './router/apiRouter.js';
import connectDB from './config/dbConfig.js';

const app = express();

app.use(express.text());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', apiRouter);

// app.listen(PORT, () => {
//   console.log(`Server is running on ${PORT}`);
//   connectDB();
// });
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
  connectDB();
});
