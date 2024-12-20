import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import TodoPage from './pages/TodoPage';
import ItemDetailPage from './pages/ItemDetailPage';
import './App.css'

function App() {
  return (

    <Router>
      <Routes>
        <Route path='/' element={<TodoPage />} />
        <Route path='/detail/:id' element={<ItemDetailPage />} />
      </Routes>
    </Router>

  );
}

export default App;