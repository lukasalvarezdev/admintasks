const User = require('../models/User');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.createUser = async (req, res) => {
  try {
    // Check errors
    const errors = validationResult(req);
    if ( !errors.isEmpty() ) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { mail, password } = req.body;

    // Validate unique email
    let user = await User.findOne({ mail });

    if ( user ) {
      return res.status(400).json({ msg: 'Este usuario ya está registrado' });
    }

    user = new User(req.body);

    // Hash password (salt generates an unique hash)
    const salt = await bcryptjs.genSalt(8);
    user.password = await bcryptjs.hash(password, salt);

    // Insert in DB
    await user.save();

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
    res.status(400).send('Hubo un error al crear el usuario');
  }
}