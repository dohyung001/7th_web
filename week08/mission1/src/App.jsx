import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import TodoPage from './pages/TodoPage';
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<TodoPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;