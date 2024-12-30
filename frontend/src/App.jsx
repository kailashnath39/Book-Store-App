import React from 'react'
import {Routes, Route} from "react-router-dom";
import CreateBook from "./pages/CreateBook.jsx";
import DeleteBook from "./pages/DeleteBook";
import EditBook from "./pages/EditBook.jsx";
import {Home} from "./pages/Home.jsx";
import {ShowBook} from "./pages/ShowBook.jsx";

const App = () => {
  return (
    <Routes>
      <Route path='/' element = {<Home />}/>
      <Route path='/CreateBook/' element = {<CreateBook />}/>
      <Route path='/DeleteBook/:id' element = {<DeleteBook />}/>
      <Route path='/EditBook/:id' element = {<EditBook />}/>
      <Route path='/ShowBook/:id' element = {<ShowBook />}/>
    </Routes>
  );
}

export default App;