import React, { useContext, useState } from 'react';
import projectContext from '../../../context/projects/projectContext';
import ProjectsList from './ProjectsList';
import { ProjectsAsideCont, FormAddProject } from '../styled/ProjectsStyled';

const ProjectsAside = () => {
  // Obtener el state de proyectos
  const projectsContext = useContext(projectContext);
  const { 
    isprojectsmenu,
    isprojectform,
    isprojectalert,
    alertmessage,
    showFormProject,
    hideFormProject,
    validateFormProject,
    addProject
  } = projectsContext;

  const [ project, setProject ] = useState({
    name: ''
  });

  const hideForm = e => {
    e.preventDefault();

    hideFormProject();

    setProject({
      name: ''
    });

    e.stopPropagation();
  }

  const handleChange = e => {
    setProject({
      name: e.target.value
    });
  }

  const handleSubmit = e => {
    e.preventDefault();

    if (project.name.trim() === '') {
      validateFormProject('El proyecto debe tener un nombre');
      return;
    }

    hideFormProject();
    addProject(project);

    setProject({
      name: ''
    });
  }


  return (
    <ProjectsAsideCont isprojectsmenu={isprojectsmenu}>
      <div className="projects-list">
        <div className="projects-title">
          <i className="material-icons-outlined">check_box_outline_blank</i>
          <h4>Tus proyectos</h4>
        </div>
        <ProjectsList />
      </div>
      <div
        className="add-project"
        onClick={ () => showFormProject() }
      >
        <FormAddProject
          onSubmit={handleSubmit}
          isprojectform={isprojectform}
        >
          <input
            type="text"
            placeholder="Nombre de tu proyecto"
            className="input_project-name"
            name="name"
            onChange={handleChange}
            value={project.name}
          />
          <input
            type="submit"
            value="Añadir proyecto"
            className="submit_add-project btn"
          />
          <button
            className="cancel_add-project btn"
            onClick={ hideForm }
          >Cancerlar</button>
          {isprojectalert ? ( <p className="error">{alertmessage}</p> ) : null}
        </FormAddProject>
        <i className="material-icons-outlined">add</i>
      </div>
    </ProjectsAsideCont>
  );
}
 
export default ProjectsAside;