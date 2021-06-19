const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const authController = require('../controllers/auth');
const { check } = require('express-validator');

// Validates user. endpoint = /api/auth
router.post('/',
  [
    check('mail', 'El correo es obligatorio').not().isEmpty(),
    check('mail', 'Ingresa un correo válido').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty()
  ],
  authController.validateUser
);

// Get auth user
router.get('/',
  auth,
  authController.getAuthUser
);

module.exports = router;