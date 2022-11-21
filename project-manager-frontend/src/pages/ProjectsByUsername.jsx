import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/projectsByUsername.page.css';
import RowProject from '../components/RowProject';

export default function ProjectsByUsername() {
  
  const username = JSON.parse(localStorage.getItem('username'));
  const Authorization = JSON.parse(localStorage.getItem('token'));

  const projects_url = 'http://localhost:3001/projects';

  const [projects, setProjects] = useState([]);

  useEffect( () => {
    axios.get(projects_url, { headers: { username, Authorization } })
    .then((response) => { 
      setProjects(response.data);
    })
    .catch((err) => console.log(err.message));
    }, []);

  return (
    <div className="container-up">
      <div className="container-uprojects">
        <div className="wrap-uprojects">
          <h1 className='uprojects-title'>Projetos</h1>
          <table className='uprojects-table'>
            <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>CEP</th>
              <th>Custo</th>
              <th>Prazo</th>
              <th>Finalizado</th>
            </tr>
            </thead>
            <tbody>
              {projects?.map((project, i) => (
                <RowProject project={project} key={i} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}


