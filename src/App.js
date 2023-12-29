import  React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginOp from './pages/LoginOp';
import Register from './pages/Register';
import Home from './pages/Home';
import Profesionals from './pages/Profesionals';
import 'bootstrap/dist/css/bootstrap.min.css'
import ProtectedRoute from './components/ProtectedRoute';
import { NavBar } from './components/NavBar';
import './App.css';
import NewDoctor from './pages/NewDoctor';
function App() {

  return (
    <>
    <NavBar/>
    <BrowserRouter>
      <Routes>
      <Route path='/' element = {<Home/>}/>
        <Route path='/login' element = {<LoginOp/>}/>
        <Route path='/signup' element = {<Register/>}/>

          <Route  element = { <ProtectedRoute />}>
          <Route path='/doctor' element = {<Profesionals/>}/>
          <Route path='/doctors/new' element = {<NewDoctor/>}/>
          <Route path='/especialidades' element = {''}/>
          <Route path='/turnos' element = {''}/>

          </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
