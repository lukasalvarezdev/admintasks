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

export default (state, action) => {
  switch(action.type) {
    case OPEN_LIST_FORM:
      return {
        ...state,
        isprojectsmenu: true
      }
    case CLOSE_LIST_FORM:
      return {
        ...state,
        isprojectsmenu: false
      }
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload
      }
    case SHOW_FORM_PROJECT:
      return {
        ...state,
        isprojectform: true
      }
    case HIDE_FORM_PROJECT:
      return {
        ...state,
        isprojectform: false,
        isprojectalert: false,
        alertmessage: null
      }
    case VALIDATE_FORM_PROJECT:
      return {
        ...state,
        isprojectalert: true,
        alertmessage: action.payload
      }
    case ADD_PROJECT:
      return {
        ...state,
        projects: [
          ...state.projects,
          action.payload
        ],
        isprojectalert: false,
        alertmessage: null
      }
    case GET_PROJECT:
      return {
        ...state,
        actualproject: action.payload,
        isprojectsmenu: false
      }
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter( project => project._id !== action.payload),
        actualproject: null
      }
    default:
      return state;
  }
}

