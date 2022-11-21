import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/projectsByUsername.page.css';


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

  const toogleCheckbox = (event) => {
    const id = event.target.attributes[1].value
    const doneCheck_url = `http://localhost:3001/projects/${id}/done`;

    const data = {
        done: true,
      };
    axios.patch(doneCheck_url, data, { headers: { username, Authorization } })
      .then((response) => {
        console.log(response.data);
        document.location.reload()
      })
      .catch((err) => err.message)
  }

  const deleteProject = (event) => {
    const id = event.target.attributes[1].value
    const delete_url = `http://localhost:3001/projects/${id}`;

    axios.delete(delete_url, { headers: { username, Authorization } })
    .then((response) => {
      console.log(response.data);
      document.location.reload()
    })
      .catch((err) => err.message);
  }

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
              <th>Finalizado</th>
            </tr>
            </thead>
            <tbody>
              {projects?.map((project, i) => {
                const { cost, id, done, title, zipCode } = project;
                return (
                  <tr key={i}>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>{zipCode}</td>
                    <td>{cost}</td>
                    <td>{done ? 'Finalizado' : 'Não finalizado'}</td>
                    <td>{<button type='button' id={id} onClick={toogleCheckbox}>concluido</button>}</td>
                    <td>{<button type='button' id={id} onClick={deleteProject}>deletar</button>}</td>

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


