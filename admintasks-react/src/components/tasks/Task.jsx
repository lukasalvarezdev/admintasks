import React, { useContext } from 'react';
import taskContext from '../../context/tasks/taskContext';
import { TaskCont } from './styled/TasksStyled';

const Task = ({task}) => {
  const tasksContext = useContext(taskContext);
  const {
    getActualTask,
    editTask,
    deleteTask
  } = tasksContext;

  const handleTaskStatus = () => {
    if (task.status) {
      task.status = false;
    } else {
      task.status = true;
    }
    editTask(task);
  }

  return (
    <TaskCont>
      <div className="check">
        { task.status ?
        (
          <i
            className="material-icons"
            onClick={handleTaskStatus}
          >check_box</i>
        )  :
        (
          <i
            className="material-icons-outlined"
            onClick={handleTaskStatus}
          >check_box_outline_blank</i>
        )
      }
      </div>
      <div className="task">
        <span>{task.name}</span>
        <div className="edit-icons">
          <i
            className="material-icons-outlined"
            onClick={ () => getActualTask(task)}
          >edit</i>
          <i
            className="material-icons-outlined"
            onClick={ () => deleteTask(task._id, task.project)}  
          >delete</i>
        </div>
      </div>
    </TaskCont>
  );
}
 
export default Task;