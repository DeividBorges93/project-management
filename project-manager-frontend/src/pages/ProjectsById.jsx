import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../style/projectsById.page.css';

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
  };

  const deleteProject = (event) => {
    const id = event.target.attributes[1].value
    const delete_url = `http://localhost:3001/projects/${id}`;
  
    axios.delete(delete_url, { headers: { username, Authorization } })
    .then((response) => {
      console.log(response.data);
      document.location.reload()
    })
      .catch((err) => err.message);
  };

  return (
    <div className="container-ip">
      <div className="container-iprojects">
        <div className="wrap-iprojects">
          <h1 className='iprojects-title'>Projetos</h1>
          <table className='iprojects-table'>
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
                <td>{<button type='button' id={id} onClick={toogleCheckbox}>concluido</button>}</td>
                <td>{<button type='button' id={id} onClick={deleteProject}>deletar</button>}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}