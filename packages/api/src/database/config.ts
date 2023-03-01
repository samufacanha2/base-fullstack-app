import mongoose from 'mongoose';

const uri = `mongodb://localhost:27017/${process.env.MONGO_DB_NAME}`;

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

export default connectDB;
