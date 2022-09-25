import express from 'express'
import todoRoute from './routes/todoRoute.js';

const app = express();
app.use(express.json());


app.use('/api',todoRoute);

console.log('env', process.env.NODE_ENV)

export default app;