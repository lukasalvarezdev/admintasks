import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './layout/LoginForm';
import { LoginCont } from './styled/AuthStyled';
import authContext from '../../context/auth/authContext';

const Login = props => {
  const authsContext = useContext(authContext);
  const { isauth } = authsContext;

  useEffect( () => {
    if (isauth) {
      props.history.push('/projects');
    }
  }, [isauth, props.history]);

  return ( 
      <LoginCont>
        <div className="white-part">
          <div className="white-part-cont">
            <h1>Administrador de tareas</h1>
            <LoginForm />
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
        <div className="blue-part">
          <div className="blue-part-cont">
            <h1>¿Todavía no tienes una cuenta?</h1>

            <Link to="/register">Registrarme ahora</Link>
          </div>
        </div>
      </LoginCont>
  )
}
export default Login;