const User = require('../models/User');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.validateUser = async (req, res) => {
  try {
    // Check errors
    const errors = validationResult(req);
    if ( !errors.isEmpty() ) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { mail, password } = req.body;

    // Search user
    const user = await User.findOne({ mail });
    if (!user) {
      return res.status(400).json({ msg: 'El usuario no existe' });
    }

    const isPasswordCorrect = await bcryptjs.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ msg: 'La contraseña es incorrecta' });
    }

    // Create JWT
    const payload = {
      user: {
        id: user.id
      }
    };

    // Sign JWT
    jwt.sign(payload, process.env.SECRET_WORD, {
      expiresIn: 7200
    }, (error, token) => {
      if (error) throw error;

      res.json({ token });
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: 'Hubo un error al autenticarse' });
  }
}

exports.getAuthUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');

    res.json({user});
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: 'Hubo un error al obtener el usuario autenticado' });
  }
}