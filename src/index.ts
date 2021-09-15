import app from './server';
import connectDb from './db';

const main = async () => {
  connectDb().then(() => console.log('mongodb connected'));

  const PORT = process.env.PORT ?? 3000;
  app.listen(PORT, () => console.log('server started successfully'));
};

main().catch(console.error);
