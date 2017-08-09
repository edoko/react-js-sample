// Express.js server file (app)

import express from 'express';
import morgan from 'morgan';
import path from 'path';

const app = express();

// request logger with morgan
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer"'));

// server static file
app.use(express.static(path.join(__dirname, '../build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

// export module
export default app;