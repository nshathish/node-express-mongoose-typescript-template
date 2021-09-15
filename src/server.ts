import express, { Request, Response } from 'express';

import blogsController from './controllers/blogs';

const app = express();

app.use(express.json());

app.use('/api/blogs', blogsController);
app.get('*', (req: Request, res: Response) => {
  res.status(404).json({ error: 'not found' });
});

export default app;
