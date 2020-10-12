import React from 'react';
import AuthState from './context/auth/authState';
import AlertState from './context/alerts/alertState';
import ProjectState from './context/projects/projectState';
import TaskState from './context/tasks/taskState';

import Login from './components/auth/Login';
import Register from './components/auth/Register';
import PrivateRoute from './components/routes/PrivateRoute';
import Projects from './components/projects/Projects';
import authToken from './config/token';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Get token
const token = localStorage.getItem('token');
if (token) {
  authToken(token);
}

function App() {
  return (
    <AuthState>
      <AlertState>
        <ProjectState>
          <TaskState>
            <Router>
              <Switch>
                <Route exact path='/' component={Login} />
                <Route exact path='/register' component={Register} />
                <PrivateRoute exact path='/projects' component={Projects} />
              </Switch>
            </Router>
          </TaskState>
        </ProjectState>
      </AlertState>
    </AuthState>
  );
}

export default App;
