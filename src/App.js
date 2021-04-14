import React from 'react';
import LoginContainer from './components/Login/LoginContainer';
import TodoPageContainer from './components/TodoPage/TodoPageContainer';
import {BrowserRouter, Route} from 'react-router-dom'; //HashRouter,
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './store/rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path='/' component={LoginContainer} />
        <Route path='/todo_page' component={TodoPageContainer} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;



