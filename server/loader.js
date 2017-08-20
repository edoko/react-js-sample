import React from 'react';
import path from 'path';
import fs from 'fs';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from '../src/components/Container/Container';

export default (req, res) => {
    const filePath = path.resolve(__dirname, '../build', 'index.html');

    fs.readFile(filePath, 'utf8', (err, htmlData)=>{
      if (err) {
        console.error('Read Error!', err);
        return res.status(404).end();
      }

      const context = {};
      const markup = renderToString(
      <StaticRouter location={req.url} context={context}>
        <App/>
      </StaticRouter>
      );

      if (context.url) {
        redirect(301, context.url);
      } else {
        // 리로드해도 정상적으로 렌더링
        const render = htmlData.replace('{{SSR}}', markup);
        res.send(render);
      }

    });
};  