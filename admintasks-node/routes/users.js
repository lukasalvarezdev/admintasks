const express = require('express');
const router = express.Router();
const users = require('../controllers/users');
const { check } = require('express-validator');

// Create user. endpoint = /api/users
router.post('/',
  [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('mail', 'El correo es obligatorio').not().isEmpty(),
    check('mail', 'Ingresa un correo válido').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    check('password', 'La contraseña debe ser de mínimo 6 caracteres').isLength({ min: 6 })
  ],
  users.createUser
);

module.exports = router;