import React, { useState, useContext, useEffect } from 'react';
import alertContext from '../../../context/alerts/alertContext';
import { Link } from 'react-router-dom';
import { validarRegForm } from '../../../helpers';
import { RegisterFormCont, RegisterInputCont } from '../styled/AuthStyled';
import authContext from '../../../context/auth/authContext';

const RegisterForm = () => {
  const alertsContext = useContext(alertContext);
  const { alert, showAlert } = alertsContext;

  const authsContext = useContext(authContext);
  const { message, registerUser } = authsContext;

  useEffect( () => {
    if (message) {
      showAlert(message);
    }
    //eslint-disable-next-line
  }, [message]);

  const [ user, setUser ] = useState({
    name: '',
    mail: '',
    password: '',
    confirm: ''
  });


  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();

    validarRegForm(user, showAlert);

    // Pass to action
    const { name, mail, password } = user;

    registerUser({ name, mail, password });
  }

  return (
    <RegisterFormCont
      onSubmit={handleSubmit}
    >
      <RegisterInputCont>
        <input
          className="form-field"
          type="text"
          name="name"
          value={user.name}
          required
          onChange={handleChange}
        />
        <label>Tu nombre</label>
      </RegisterInputCont>

      <RegisterInputCont>
        <input
          className="form-field"
          type="text"
          name="mail"
          value={user.mail}
          required
          onChange={handleChange}
        />
        <label>Correo electrónico</label>
      </RegisterInputCont>

      <RegisterInputCont>
        <input
          className="form-field"
          type="password"
          name="password"
          value={user.password}
          required
          onChange={handleChange}
        />
        <label>Tu contraseña</label>
      </RegisterInputCont>

      <RegisterInputCont>
        <input
          className="form-field"
          type="password"
          name="confirm"
          value={user.confirm}
          required
          onChange={handleChange}
        />
        <label>Confirma tu contraseña</label>
      </RegisterInputCont>

      <div className="form-part">
        <span>¿Ya tienes una cuenta? <Link className="other-link-text" to="/" >Iniciar sesión</Link> </span>
      </div>
      <div className="form-part">
        <input type="submit" value="Registrarme" className="form-submit"/>
      </div>
      {alert ? <p className="alert-error">{alert.message}</p> : null}
    </RegisterFormCont>
  );
}
 
export default RegisterForm;