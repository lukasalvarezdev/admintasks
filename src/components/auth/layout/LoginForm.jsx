import React, { useState, useContext, useEffect } from 'react';
import alertContext from '../../../context/alerts/alertContext';
import { Link } from 'react-router-dom';
import { validateLoginForm } from '../../../helpers';
import { LoginFormCont, LoginInputCont } from '../styled/AuthStyled';
import authContext from '../../../context/auth/authContext';

const Login = () => {
  const alertsContext = useContext(alertContext);
  const { alert, showAlert } = alertsContext;

  const authsContext = useContext(authContext);
  const { message, logIn } = authsContext;

  useEffect( () => {
    if (message) {
      showAlert(message);
    }
    //eslint-disable-next-line
  }, [message]);

  const [ user, setUser ] = useState({
    mail: '',
    password: ''
  });


  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();

    validateLoginForm(user, showAlert);

    // Pass to action
    logIn(user);
  }

  return (
    <LoginFormCont
      onSubmit={handleSubmit}
    >
      <LoginInputCont>
        <input
          className="form-field"
          type="text"
          name="mail"
          value={user.email}
          required
          onChange={handleChange}
        />
        <label>Correo electrónico</label>
      </LoginInputCont>

      <LoginInputCont>
        <input
          className="form-field"
          type="password"
          name="password"
          value={user.password}
          required
          onChange={handleChange}
        />
        <label>Tu contraseña</label>
      </LoginInputCont>

      <div className="form-part">
        <span>¿No tienes una cuenta? <Link className="other-link-text" to="/register" >Registrarme</Link> </span>
      </div>
      <div className="form-part">
        <input type="submit" value="Iniciar sesión" className="form-submit"/>
      </div>
      {alert ? <p className="alert-error">{alert.message}</p> : null}
    </LoginFormCont>
  );
}
 
export default Login;