import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import AddPost from './pages/AddPost';
import Header from './components/Header';
import ViewPost from './pages/ViewPost';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-post" element={<AddPost />} />
        <Route path="/view-post" element={<ViewPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
