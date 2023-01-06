import express from 'express';
import dotenv from 'dotenv';
import connectDB from '../db/db';

const app = express();
app.use(express.json());
dotenv.config();
connectDB();

app.get('/decks', (req, res) => {
  res.json({ msg: 'Diego' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`SERVER RUNNING ON PORT ${PORT}`);
});
