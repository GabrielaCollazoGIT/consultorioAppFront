import  React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginOp from './pages/LoginOp';
import Register from './pages/Register';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';
import { NavBar } from './components/NavBar';
import './pages/style.css'
function App() {

  return (
    <>
    <NavBar/>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element = {
        <PublicRoute>
            <LoginOp/> 
        </PublicRoute>
        }/>
        <Route path='/signup' element = {
        <PublicRoute>
          <Register/>
        </PublicRoute>
        }/>
        <Route path='/' element = {
        <ProtectedRoute>
          <Home/>
        </ProtectedRoute>
        }
        />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
