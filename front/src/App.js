import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React from 'react';
import Home from './pages/Home';
import AddPost from './pages/AddPost';
import Header from './components/etc/Header';
import ViewPost from './pages/ViewPost';
import EditPost from './pages/EditPost';
import useGetUserIp from './hooks/etc/useGetUserIp';
import PrivateRoute from './components/etc/PrivateRoute';
import Admin from './pages/Admin';

function App() {
  useGetUserIp();
  const darkMode = useSelector((state) => state.darkMode.value);
  return (
    <div className={`${darkMode ? 'dark' : ''} h-full `}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/view-post/:postId" element={<ViewPost />} />
          <Route path="/edit-post" element={<PrivateRoute />}>
            <Route path="/edit-post/:postId" element={<EditPost />} />
          </Route>
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
