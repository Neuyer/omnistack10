const { Router } = require('express');
const DevController = require('./controllers/DevController');

const routes = Router();

// get, post, put, delete

routes.post('/devs', DevController.store );

module.exports = routes;