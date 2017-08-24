// Express.js server file (app)

import express from 'express';
import morgan from 'morgan';
import path from 'path';
import compression from 'compression';
import loader from './loader';

const app = express();

// Support compress gzip format
app.use(compression());

// request logger with morgan
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer"'));

// server static file
app.use(express.static(path.resolve(__dirname, '../build')));

app.use('/', loader);

// export module
export default app;