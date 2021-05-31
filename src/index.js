const express = require('express');
const morgan = require('morgan');
const path = require('path');
const router = require('./router/router');

const servidor = express();

//config
servidor.set('port-server', 5000);

//middlewares
servidor.use(morgan('dev'));
servidor.use(router);
servidor.use(express.static(path.join(__dirname, 'public')));

//init
servidor.listen(servidor.get('port-server'), function () {
  console.log('Servidor en el puerto:', servidor.get('port-server'));
});
