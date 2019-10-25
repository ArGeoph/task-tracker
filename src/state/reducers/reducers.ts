// Import
import {
  ADD_TASK,
  CHANGE_STATE,
  FETCH_TASKS_BEGIN,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE,
  REMOVE_TASK_BEGIN,
  REMOVE_TASK_SUCCESS,
  REMOVE_TASK_FAILURE
} from '../actions/actionTypes';

// Root Reducer
const rootReducer = (state: any, action: any) => {
  switch (action.type) {
    case ADD_TASK:
      console.log(action);
      return {
        ...state,
      };

    case CHANGE_STATE:
      console.log(action);
      return {
        ...state
      };

    case FETCH_TASKS_BEGIN:
      console.log(action);
      return {
        ...state,
        errorMessage: '',
        isLoading: true
      };

    case FETCH_TASKS_SUCCESS:
      console.log(action);
      return {
        ...state,
        errorMessage: '',
        tasks: action.tasks,
        isLoading: false
      };

    case FETCH_TASKS_FAILURE:
      console.log(action);

      return {
        ...state,
        errorMessage: action.errorMessage,
        tasks: [],
        isLoading: false
      };

    case REMOVE_TASK_SUCCESS:
      console.log(action);

      return {
        ...state,
      };

    case REMOVE_TASK_BEGIN:
      console.log(action);

      return {
        ...state,
      };

    case REMOVE_TASK_FAILURE:
      console.log(action);

      return {
        ...state,
      };

      // Return the state if the action isn't correct
    default:
      return state;
  }
}; // End of the root reducer

export default rootReducer;
// End of file
