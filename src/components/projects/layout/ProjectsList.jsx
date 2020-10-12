import React, { useContext, useEffect } from 'react';
import projectContext from '../../../context/projects/projectContext';
import Project from '../Project';
import { ProjectsListCont } from '../styled/ProjectsStyled';

const ProjectsList = () => {
  const projectsContext = useContext(projectContext);
  const { projects, getProjects } = projectsContext;

  useEffect( () => {
    getProjects();
    //eslint-disable-next-line
  }, []);
  
  if (projects.length === 0) return <p className="no-projects">Todavía no tienes proyectos, comienza agregando uno</p>;

  return (
    <ProjectsListCont>
      {
        projects.map( project => (
          <Project 
            key={project._id}
            project={project}
          />
        ))
      }
    </ProjectsListCont>
  );
}
 
export default ProjectsList;