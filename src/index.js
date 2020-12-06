import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './list-1/App';
import App2 from './clickCloseOther/App';
import Todos from './TodoList/App';
import TodosRedux from './TodoListRedux/App';
import reportWebVitals from './reportWebVitals';
import store from './TodoListRedux/reduce/index';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <App2 /> */}
    {/* <Todos /> */}
    <Provider store={store}>
      <TodosRedux />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
