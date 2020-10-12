import React, { useContext, useEffect} from 'react';
import { Route, Redirect } from 'react-router-dom';
import authContext from '../../context/auth/authContext';

const PrivateRoute = ({ component: Component, ...props }) => {
  const authsContext = useContext(authContext);
  const { isauth, isloading, getUser } = authsContext;

  useEffect( () => {
    getUser();
    //eslint-disable-next-line
  }, []);

  return ( 
    <Route
      {...props}
      render={ props => !isauth && !isloading ?
        (
          <Redirect to="/" />
        ) :
        (
          <Component {...props} />
        )
      }
    />
  );
}
 
export default PrivateRoute;
