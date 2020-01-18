const { Router } = require('express');

const routes = Router();

routes.get('/', (Request, response) => {
  return response.json({ message: 'hello!' });
});

module.exports = routes;