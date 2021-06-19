import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';
import { ProjectCont } from './styled/ProjectsStyled';

const Project = ({project}) => {
  const projectsContext = useContext(projectContext);
  const { getActualProject } = projectsContext;

  const tasksContext = useContext(taskContext);
  const { getTasks } = tasksContext;
  
  return (
    <ProjectCont
      onClick={ () => {
        getActualProject(project);
        getTasks(project._id);
        }
      }
    >
      <h5>{project.name}</h5>
    </ProjectCont>
  );
}
 
export default Project;