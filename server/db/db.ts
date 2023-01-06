import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI ?? '');
    console.log('connected to DB');
  } catch (error) {
    if (error instanceof Error) {
      console.log(`error: ${error.message}`);
      //End the process
      process.exit(1);
    }
  }
};

export default connectDB;
