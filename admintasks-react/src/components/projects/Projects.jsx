import React, { useContext, useEffect } from 'react';
import Aside from './layout/Aside';
import ProjectsAside from './layout/ProjectsAside';
import Tasks from '../tasks/Tasks';
import { ProjectsCont } from './styled/ProjectsStyled';
import authContext from '../../context/auth/authContext';

const Projects = () => {
  const authsContext = useContext(authContext);
  const { getUser } = authsContext;

  useEffect( () => {
    getUser();
    //eslint-disable-next-line
  }, []);

  return(
    <ProjectsCont>
      <Aside />
      <ProjectsAside />
      <Tasks />
    </ProjectsCont>
  )
}
 
export default Projects;