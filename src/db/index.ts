import { connect } from 'mongoose';

const { MONGO_URL } = process.env;
if (!MONGO_URL) {
  throw new Error('mongodb url is required');
}

const connectDb = async () => {
  try {
    await connect(MONGO_URL);
  } catch (err) {
    console.error('mongodb connction error', err);
    process.exit(1);
  }
};

export default connectDb;
