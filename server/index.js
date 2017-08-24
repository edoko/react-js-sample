// Express.js server file (index)

import app from './app';

// listen port 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}\nLaunch your browser!`);
});
