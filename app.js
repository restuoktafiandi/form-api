import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

const { PORT } = process.env;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
