const express = require('express');
const router = express.Router();

router.get('/about', (req, res) =>
  res.send(
    'Hola, bienvenido a la ruta <strong>about</strong> <a href="/">volver</a>'
  )
);
module.exports = router;
