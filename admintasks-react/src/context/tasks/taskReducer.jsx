import {
  GET_TASKS,
  VALIDATE_FORM_TASK,
  ADD_TASK,
  GET_TASK,
  EDIT_TASK,
  DELETE_TASK
} from '../../types';

export default (state, action) => {
  switch(action.type) {
    case GET_TASKS:
      return {
        ...state,
        projecttasks: action.payload
      }
    case VALIDATE_FORM_TASK:
      return {
        ...state,
        istaskalert: true,
        alertmessage: action.payload
      }
    case GET_TASK:
      return {
        ...state,
        actualtask: action.payload
      }
    case ADD_TASK:
      return {
        ...state,
        projecttasks: [
          ...state.projecttasks,
          action.payload
        ],
        istaskalert: false,
        alertmessage: null,
        actualtask: null
      }
    case EDIT_TASK:
      return {
        ...state,
        projecttasks: state.projecttasks.map( task => task._id === action.payload._id ? action.payload : task ),
        istaskalert: false,
        alertmessage: null,
        actualtask: null
      }
    case DELETE_TASK:
      return {
        ...state,
        projecttasks: state.projecttasks.filter( task => task._id !== action.payload),
        actualtask: null
      }
    default:
      return state;
  }
}