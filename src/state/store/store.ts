import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/reducers';

const initialState = {
  task: [],
  isLoading: false,
  isTaskAdding: false,
  isTaskRemoving: false,
  errorMessage: ''
};

// Create the store and export it
export const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
// End of file
