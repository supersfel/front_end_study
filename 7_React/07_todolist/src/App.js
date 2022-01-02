//App.js
import React from 'react'
import {createGlobalStyle} from 'styled-components';
import { TodoProvider } from './components/TodoContext';
import TodoCreate from './components/TodoCreate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

const GlobalStyle = createGlobalStyle`
  body {
    background : #e9ecef;
  }
`;

function App() {
  return (
    <TodoProvider> {/* 감싸주어야 에러가 발생하지 않는다. */}
      <GlobalStyle />
        <TodoTemplate>
          <TodoHead />
          <TodoList />
          <TodoCreate />
        </TodoTemplate>      
    </TodoProvider>
    
  );
}

export default App;
