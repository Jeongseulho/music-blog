import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import AddPost from './pages/AddPost';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<AddPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
