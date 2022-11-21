import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import constants from '../utils/constants.util';
import '../style/createProject.page.css';


const { status_code: { CREATED } } = constants;

export default function Project() {
  const navigate = useNavigate();
  
  const username = JSON.parse(localStorage.getItem('username'));
  const Authorization = JSON.parse(localStorage.getItem('token'));

  const url = 'http://localhost:3001/project';

  const refTitle = useRef();
  const refZipCode = useRef();
  const refCost = useRef();
  const refDeadline = useRef();

  const createProject = async (data) => {
    axios.post(url, data, { headers: { username, Authorization } })
      .then((response) => {
        if (response.status === CREATED) {
          navigate('/projects');
          console.log('Projeto cadastrado com sucesso!');
        };
      })
      .catch((error) => error.message);
  };

  const addProject = async (event) => {
    event.preventDefault();
    
    const data = {
      [refTitle.current.name]: refTitle.current.value,
      [refZipCode.current.name]: refZipCode.current.value,
      [refCost.current.name]: refCost.current.value,
      [refDeadline.current.name]: refDeadline.current.value
    };

    createProject(data);
  };

  return (
    <div className='container-cp'>
      <div className="container-cprojects">
        <div className="wrap-cprojects">
        <form className='form-projects' onSubmit={ addProject }>
          <h1 className='cprojects-title'>Cadastro de projetos</h1>

          <div className="wrap-cprojects-input">
            <input
            className='input-cprojects'
              type="text"
              id="title"
              name="title"
              ref={refTitle}
              placeholder="Titulo"
            />
          </div>
          <div className="wrap-cprojects-input">
            <input
            className='input-cprojects'
              type="text"
              id="zipcode"
              name="zipCode"
              ref={refZipCode}
              placeholder="CEP"
            />
          </div>
          <div className="wrap-cprojects-input">
            <input
            className='input-cprojects'
              type="text"
              id="cost"
              name="cost"
              ref={refCost}
              placeholder="Custo"
            />
          </div>
          <div className="wrap-cprojects-input">
            <input
            className='input-cprojects'
              type="text"
              id="deadline"
              name="deadline"
              ref={refDeadline}
              placeholder="Prazo de entrega"
            />
          </div>
          <div className='container-cprojects-form-btn'>
            <button
              className='cprojects-form-btn'
              type='submit'
            >
              Cadastrar
            </button>
          </div>
        </form>
        </div>
      </div>
    </div>
  )
}