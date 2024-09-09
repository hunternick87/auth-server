import express from 'express';
import middleware from './api/middleware';

const app = express();

app.use(middleware);

app.get('/', (req, res) => {
    res.send('Hello World');
});

export default app;