import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Projects() {
  
  const username = JSON.parse(localStorage.getItem('username'));
  const Authorization = JSON.parse(localStorage.getItem('token'));


  const api_url = 'http://localhost:3001/projects';

  const [projects, setProjects] = useState([]);

  useEffect( () => {
    axios.get(api_url, { headers: { username, Authorization } })
    .then((response) => { 
      setProjects(response.data);
    })
    .catch(() => console.log('Deu errado'))
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
              <th>CEP</th>
              <th>Custo</th>
              <th>Finalizado</th>
            </tr>
            </thead>
            <tbody>
              {projects.map((project, i) => {
                const { cost, done, id, title, zipCode } = project;
                return (
                  <tr key={i}>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>{zipCode}</td>
                    <td>{cost}</td>
                    <td>{done}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}


