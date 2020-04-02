const express = require('express');
const routes = express.Router();
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const PerfilController = require('./controllers/PerfilController');
const SessionController = require('./controllers/SessionController');

routes.post('/session', SessionController.create );

routes.get('/ongs',OngController.listagem);
routes.post( '/ongs' , OngController.create );

routes.get('/casos',IncidentController.listagem);
routes.post('/casos',IncidentController.create);
routes.delete('/casos/:id', IncidentController.delete);


routes.get('/perfil', PerfilController.listagem );
module.exports = routes;