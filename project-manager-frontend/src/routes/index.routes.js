import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import Login from '../pages/Login'
import ProjectsByUsername from '../pages/ProjectsByUsername';
import ProjectsById from '../pages/ProjectsById';
import CreateProject from '../pages/CreateProject';


import Register from '../pages/RegisterUser';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={ <Navigate to="/login" /> } exact path="/" />
        <Route element={ <Login /> } path="/login" />
        <Route element={ <Register /> } path="/register" />
        <Route element={ <ProjectsByUsername /> } path="/projects" />
        <Route element={ <ProjectsById /> } path="/project/:id" />
        <Route element={ <CreateProject /> } path="/project" />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;