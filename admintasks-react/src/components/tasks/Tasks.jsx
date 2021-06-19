import React, { useState, useContext, useEffect } from 'react';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';
import TasksList from './layout/TasksList';
import { TasksListCont } from './styled/TasksStyled';

const Projects = () => {
  const projectsContext = useContext(projectContext);
  const { actualproject, deleteProject } = projectsContext;

  const tasksContext = useContext(taskContext);
  const {
    istaskalert,
    alertmessage,
    actualtask,
    validateFormTask,
    addTask,
    editTask
  } = tasksContext;

  const [ task, setTask ] = useState({
    name: '',
    iscompleted: false
  });

  useEffect( () => {
    if (actualtask !== null) {
      setTask(actualtask);
    } else {
      setTask({
        ...task,
        name: ''
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actualtask]);

  if (!actualproject) return <h2 className="select-project">Selecciona un proyecto</h2>;

  const handleChange = e => {
    setTask({
      ...task,
      name: e.target.value
    });
  }

  const handleSubmit = e => {
    e.preventDefault();

    if (task.name.trim() === '') {
      validateFormTask('La tarea debe tener un nombre');
      return;
    }

    if (actualtask) {
      editTask(task);
    } else {
      task.project = actualproject._id;
      addTask(task);
    }

    setTask({
      name: ''
    });
  }

  return (
    <TasksListCont>
      <div className="tasks-header">
        <h2>{actualproject.name}</h2> 
      </div>
      <div className="tasks-body">
        <TasksList />
      </div>
      <div className="tasks-footer">
        <button
          className="btn_delete-project"
          onClick={() => deleteProject(actualproject._id)}
        >Eliminar proyecto</button>
        
        <form
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="input_add-task"
            placeholder="Escribe el nombre de tu tarea"
            value={task.name}
            onChange={handleChange}
          />
          <input
            type="submit"
            className="submit_add-task"
            value={actualtask ? 'Actualizar tarea' : 'Agregar tarea'}
          />
          {istaskalert ? <p className="error">{alertmessage}</p> : null}
        </form>
      </div>
    </TasksListCont>
  );
}
 
export default Projects;