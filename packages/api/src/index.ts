import 'dotenv/config';

import express from 'express';

const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Express + TypeScript Servers dis lit yo');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
