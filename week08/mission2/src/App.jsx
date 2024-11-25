import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import TodoPage from './pages/TodoPage';
import ItemDetailPage from './pages/ItemDetailPage';
import './App.css'

function App() {
  const queryClient = new QueryClient;
  return (
    <QueryClientProvider client={queryClient}>
    <Router>
      <Routes>
        <Route path='/' element={<TodoPage />} />
        <Route path='/detail/:id' element={<ItemDetailPage />} />
      </Routes>
    </Router>
    </QueryClientProvider>
  );
}

export default App;