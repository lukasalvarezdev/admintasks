import React, { useContext } from 'react';
import taskContext from '../../../context/tasks/taskContext';
import Task from '../Task';
import styled from 'styled-components';

const TasksListCont = styled.div`
  width: 95%;
`;

const TasksList = () => {
  const tasksContext = useContext(taskContext);
  const {
    projecttasks
  } = tasksContext;

  return (
    <TasksListCont>
      {
        projecttasks.map( task => (
          <Task
            task={task}
            key={task._id}
          />
        ))
      }
    </TasksListCont>
  );
}
 
export default TasksList;