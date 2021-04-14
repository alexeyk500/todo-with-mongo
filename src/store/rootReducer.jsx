import {combineReducers} from 'redux';
import LoginReducer from './Login/reducer';
import TodoPageReducer from './TodoPage/reducer';

export default combineReducers({
  login: LoginReducer,
  todoPage: TodoPageReducer,
});
