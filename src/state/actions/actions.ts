/**
 * Imports
 */
import {
  ADD_TASK,
  CHANGE_STATE,
  FETCH_TASKS_BEGIN,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE,
  REMOVE_TASK_BEGIN,
  REMOVE_TASK_SUCCESS,
  REMOVE_TASK_FAILURE
} from './actionTypes';

// Action Creators
export const addTaskClicked = () => {
  return {
    type: ADD_TASK,
    isSearchButtonClicked: true
  };
};

export const taskStateChanged = (status: string) => {
  return {
    type: CHANGE_STATE,
    status
  };
};

export const fetchTasksBegin = () => {
  return {
    type: FETCH_TASKS_BEGIN,
  };
};

export const fetchTasksSuccess = (tasks: []) => {
  return {
    type: FETCH_TASKS_SUCCESS,
    tasks
  };
};

export const fetchTasksFailure = (errorMessage: string) => {
  return {
    type: FETCH_TASKS_FAILURE,
    errorMessage
  };
};

export const removeTasksBegin = () => {
  return {
    type: REMOVE_TASK_BEGIN,
  };
};

export const removeTasksSuccess = (tasks: []) => {
  return {
    type: REMOVE_TASK_SUCCESS,
    tasks
  };
};

export const removeTasksFailure = (errorMessage: string) => {
  return {
    type: REMOVE_TASK_FAILURE,
    errorMessage
  };
};
// End of action creators
// End of file
