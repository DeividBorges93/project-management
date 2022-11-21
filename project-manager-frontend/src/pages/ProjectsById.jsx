import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../style/projectsByUsername.page.css';

export default function ProjectByid() {

  const username = JSON.parse(localStorage.getItem('username'));
  const Authorization = JSON.parse(localStorage.getItem('token'));
  const { id } = useParams();

  const api_url = `http://localhost:3001/project/${id}`;

  const [project, setProject] = useState({});
  
  useEffect( () => {
    
    axios.get(api_url, { headers: { username, Authorization } })
    .then((response) => {
      setProject(response.data);
    })
    .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="container">
      <div className="container-projects">
        <div className="wrap-projects">
          <h1 className='projects-title'>Projetos</h1>
          <table>
            <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Cidade</th>
              <th>Estado</th>
              <th>Custo</th>
              <th>Prazo</th>
              <th>Finalizado</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{project?.id}</td>
                <td>{project?.title}</td>
                <td>{project.address?.cidade}</td>
                <td>{project.address?.estado}</td>
                <td>{project?.cost}</td>
                <td>{project?.deadline}</td>
                <td>{project?.done ? 'Finalizado' : 'Não finalizado'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}