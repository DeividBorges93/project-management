import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import Login from '../pages/Login'
import Projects from '../pages/ProjectsByUsername';
import Register from '../pages/RegisterUser';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={ <Navigate to="/login" /> } exact path="/" />
        <Route element={ <Login /> } path="/login" />
        <Route element={ <Register /> } path="/register" />
        <Route element={ <Projects /> } path="/projects" />


      </Routes>
    </BrowserRouter>
  )
}

export default Router;