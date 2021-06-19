const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.header('x-auth-token');

  if ( !token ) {
    return res.status(401).json({ msg:'No estás autorizado' });
  }

  // Validate token

  try {
    const encrypted = jwt.verify(token, process.env.SECRET_WORD);

    req.user = encrypted.user;

    next();
  } catch (error) {
    res.status(401).json({ msg:'Token no válido' });
  }
}