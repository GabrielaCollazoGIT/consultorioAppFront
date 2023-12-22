import  React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginOp from './pages/LoginOp';
import Register from './pages/Register';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<LoginOp/> }></Route>
        <Route path='/signup' element = {<Register/> }></Route>
        <Route path='/home' element = {<Home/> }></Route>
        <Route path='*' element = {<LoginOp/> }></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
