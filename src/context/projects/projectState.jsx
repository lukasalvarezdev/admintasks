import React, { useReducer } from 'react';
import projectContext from './projectContext';
import projectReducer from './projectReducer';
import {
  OPEN_LIST_FORM,
  CLOSE_LIST_FORM,
  GET_PROJECTS,
  SHOW_FORM_PROJECT,
  HIDE_FORM_PROJECT,
  VALIDATE_FORM_PROJECT,
  ADD_PROJECT,
  GET_PROJECT,
  DELETE_PROJECT
} from '../../types';
import axiosClient from '../../config/axios';

const ProjectState = props => {
  const initialState = {
    isprojectsmenu: false,
    projects: [],
    isprojectform: false,
    isprojectalert: false,
    alertmessage: null,
    actualproject: null
  }

  const [ state, dispatch ] = useReducer(projectReducer, initialState);

  const openMenu = () => {
    dispatch({
      type: OPEN_LIST_FORM
    });
  }

  const closeMenu = () => {
    dispatch({
      type: CLOSE_LIST_FORM
    });
  }

  const getProjects = async () => {
    try {
      const res = await axiosClient.get('/api/projects');

      dispatch({
        type: GET_PROJECTS,
        payload: res.data.projects
      });
    } catch (error) {
      console.log(error.response);
    }
  }

  const showFormProject = () => {
    dispatch({
      type: SHOW_FORM_PROJECT
    });
  }

  const hideFormProject = () => {
    dispatch({
      type: HIDE_FORM_PROJECT
    });
  }

  const validateFormProject = message => {
    dispatch({
      type: VALIDATE_FORM_PROJECT,
      payload: message
    });
  }

  const addProject = async project => {
    try {
      const res = await axiosClient.post('/api/projects', project);

      dispatch({
        type: ADD_PROJECT,
        payload: res.data.project
      });
    } catch (error) {
      console.log(error.response);
    }
  }

  const getActualProject = async project => {
    dispatch({
      type: GET_PROJECT,
      payload: project
    });
  }

  const deleteProject = async projectID => {
    try {
      await axiosClient.delete(`/api/projects/${projectID}`);

      dispatch({
        type: DELETE_PROJECT,
        payload: projectID
      });
    } catch (error) {
      console.log(error.response);
    }
  }

  return (
    <projectContext.Provider
      value={{
        isprojectsmenu: state.isprojectsmenu,
        projects: state.projects,
        isprojectform: state.isprojectform,
        isprojectalert: state.isprojectalert,
        alertmessage: state.alertmessage,
        actualproject: state.actualproject,
        openMenu,
        closeMenu,
        getProjects,
        showFormProject,
        hideFormProject,
        validateFormProject,
        addProject,
        getActualProject,
        deleteProject
      }}
    >
      {props.children}
    </projectContext.Provider>
  )
}

export default ProjectState;