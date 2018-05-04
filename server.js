const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = parseInt(process.env.PORT, 10) || 3000;

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/flashcard/:qid', (req, res) => {
      const actualPage = '/flashcard';
      const queryParams = { qid: req.params.qid };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('/category/:category', (req, res) => {
      const actualPage = '/category';
      const queryParams = { category: req.params.category };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(port, err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
