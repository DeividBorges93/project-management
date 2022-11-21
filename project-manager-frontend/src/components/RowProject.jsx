import React, { useEffect, useRef, useState }from 'react';
import axios from 'axios';

const username = JSON.parse(localStorage.getItem('username'));
const Authorization = JSON.parse(localStorage.getItem('token'));

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

export default function RowProject({ project }) {
  const titleRef = useRef();
  const zipCodeRef = useRef();
  const costRef = useRef();
  const deadlineRef = useRef();

  const { cost, id, done, title, zipCode, deadline } = project;

  const projects_update_url = `http://localhost:3001/projects/${id}`;
  

  const [nameBtn, setNameBtn] = useState('editar');


  useEffect(() => {
    titleRef.current.value = title;
    zipCodeRef.current.value = zipCode;
    costRef.current.value = cost;
    deadlineRef.current.value = deadline;
  }, [])

  const editProject = (project) => {
    if (nameBtn === 'editar') {
      titleRef.current.removeAttribute('readOnly');
      zipCodeRef.current.removeAttribute('readOnly');
      costRef.current.removeAttribute('readOnly');
      deadlineRef.current.removeAttribute('readOnly');

    } else {
      titleRef.current.setAttribute('readOnly', true);
      zipCodeRef.current.setAttribute('readOnly', true);
      costRef.current.setAttribute('readOnly', true);
      deadlineRef.current.setAttribute('readOnly', true);


      const data = {
        title: titleRef.current.value,
        zipCode: zipCodeRef.current.value,
        cost: costRef.current.value,
        deadline: deadlineRef.current.value
      }
      axios.put(projects_update_url, data, { headers: { username, Authorization } })
    }
    setNameBtn((prev) => prev === 'editar' ? 'salvar' : prev)
  }
    return (
      <tr>
        <td>{id}</td>
        <td>{<input readOnly ref={titleRef}/>}</td>
        <td>{<input readOnly ref={zipCodeRef}/>}</td>
        <td>{<input readOnly ref={costRef}/>}</td>
        <td>{<input readOnly ref={deadlineRef}/>}</td>
        <td>{done ? 'Finalizado' : 'Não finalizado'}</td>
        <td>{<button type='button' id={id} onClick={toogleCheckbox}>concluido</button>}</td>
        <td>{<button type='button' id={id} onClick={deleteProject}>deletar</button>}</td>
        <td>{<button type='button' id={id} onClick={() => editProject(project)}>{nameBtn}</button>}</td>
      </tr>
)}