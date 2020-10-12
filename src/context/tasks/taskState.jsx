import React, { useReducer } from 'react';
import taskContext from './taskContext';
import taskReducer from './taskReducer';
import {
  GET_TASKS,
  VALIDATE_FORM_TASK,
  ADD_TASK,
  GET_TASK,
  EDIT_TASK,
  DELETE_TASK
} from '../../types';
import axiosClient from '../../config/axios';

const TaskState = props => {
  const initialState = {
    projecttasks: [],
    istaskalert: false,
    alertmessage: null,
    actualtask: null
  }

  const [ state, dispatch ] = useReducer(taskReducer, initialState);

  const getTasks = async project => {
    try {
      const res = await axiosClient.get('/api/tasks', { params: {project} });

      dispatch({
        type: GET_TASKS,
        payload: res.data.tasks
      });
    } catch (error) {
      console.log(error.response);
    }
  }

  const validateFormTask = message => {
    dispatch({
      type: VALIDATE_FORM_TASK,
      payload: message
    });
  }

  const getActualTask = task => {
    dispatch({
      type: GET_TASK,
      payload: task
    })
  }

  const addTask = async task => {
    try {
      const res = await axiosClient.post('/api/tasks', task);

      dispatch({
        type: ADD_TASK,
        payload: res.data.task
      });
    } catch (error) {
      console.log(error.response);
    }
  }

  const editTask = async task => {
    try {
      const res = await axiosClient.put(`/api/tasks/${task._id}`, task);

      dispatch({
        type: EDIT_TASK,
        payload: res.data.task
      });
    } catch (error) {
      console.log(error.response);
    }
  }

  const deleteTask = async (taskID, project) => {
    try {
      await axiosClient.delete(`/api/tasks/${taskID}`, { params: {project} });

      dispatch({
        type: DELETE_TASK,
        payload: taskID
      });
    } catch (error) {
      console.log(error.response);
    }
  }

  return (
    <taskContext.Provider
      value={{
        projecttasks: state.projecttasks,
        istaskalert: state.istaskalert,
        alertmessage: state.alertmessage,
        actualtask: state.actualtask,
        getTasks,
        validateFormTask,
        addTask,
        getActualTask,
        editTask,
        deleteTask
      }}
    >
      {props.children}
    </taskContext.Provider>
  )
}

export default TaskState;