import React, { useContext, useEffect } from 'react';
import RegisterForm from './layout/RegisterForm';
import { Link } from 'react-router-dom';
import { RegisterCont } from './styled/AuthStyled';
import authContext from '../../context/auth/authContext';

const Register = props => {
  const authsContext = useContext(authContext);
  const { isauth } = authsContext;

  useEffect( () => {
    if (isauth) {
      props.history.push('/projects');
    }
  }, [isauth, props.history]);

  return (  
    <RegisterCont>
      <div className="primero">
        <div className="primero-cont">
          <h1>Administrador de tareas</h1>
          <RegisterForm />
          <span>
            Diseño y desarrollo por  
            <a
              href="https://lukasalvarez.com"
              className="other-link-text"
              target="_blank"
              rel="noopener noreferrer"
            > Lukas Álvarez</a>
          </span>
        </div>
      </div>
      <div className="segundo">
        <div className="segundo-cont">
          <h1>¿Ya tienes una cuenta?</h1>

          <Link to="/">Iniciar sesión</Link>
        </div>
      </div>
    </RegisterCont>
  )
}
export default Register;