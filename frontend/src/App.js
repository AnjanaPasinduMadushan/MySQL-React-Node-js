import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/home.jsx';
import AddBook from "./pages/addBook.jsx";
import Update from "./pages/update.jsx";
import './style/style.css'

function App() {
  return (
    <div className="app">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add_Book' element={<AddBook />} />
        <Route path='/:id' element={<Update />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
