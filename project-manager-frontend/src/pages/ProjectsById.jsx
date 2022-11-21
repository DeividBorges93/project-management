import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function ProjectByid() {

  const username = JSON.parse(localStorage.getItem('username'));
  const Authorization = JSON.parse(localStorage.getItem('token'));
  const { id } = useParams();

  const api_url = 'http://localhost:3001/projects';

  const [project, setProject] = useState();

  useEffect( () => {
    axios.get(api_url, { headers: { username, Authorization } })
    .then((response) => {
      console.log(response.data, 'data');

      setProject(response.data);
    })
    .catch((err) => console.log(err.message));
  }, [api_url, username, Authorization]);

  console.log(project, 'project');

  const { title, cost, address: { cidade, estado }, deadline, done } = project;
  
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
                <td>{id}</td>
                <td>{title}</td>
                <td>{cidade}</td>
                <td>{estado}</td>
                <td>{cost}</td>
                <td>{deadline}</td>
                <td>{done ? 'Finalizado' : 'Não finalizado'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}