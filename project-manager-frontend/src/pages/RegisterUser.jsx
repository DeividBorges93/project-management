import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import validateUser from '../utils/valiadations';
import axios from 'axios';
import constants from '../utils/constants.util';
import logoPicure from '../assets/projectManagerLogoGif.gif';
import '../style/register.page.css';

const { status_code: { CREATED } } = constants;


export default function Register() {
  const navigate = useNavigate();

  const url = 'http://localhost:3001/users';
  
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const refName = useRef();
  const refUsername = useRef();
  const refPassword = useRef();
  
  const createUser = async (data, options) => {
    axios.post(url, { ...data }, options)
    .then((response) => {
      if (response.status === CREATED) {
        navigate('/login');
        console.log('cadastrado com sucesso!!');
      };
    })
    .catch((error) => {
      console.log(`Erro no cadastro -> ${error.message}`);
      
    })
  };
  
  const addUser = async (event) => {
    
    const data = {
      [refName.current.name]: refName.current.value,
      [refUsername.current.name]: refUsername.current.value,
      [refPassword.current.name]: refPassword.current.value,

    };
  
    const options = {
      headers: {
        [refUsername.current.name]: refUsername.current.value,
      }
    };
    event.preventDefault();
    
    const hasError = await validateUser(data);

    if(hasError) console.log(hasError, 'hasError');

    if(!hasError) {
      createUser(data, options);
    };
  };

  return (
    <div className='container'>
      <div className="container-register">
        <div className="wrap-register">
        <form className='form-register' onSubmit={ addUser }>
          <h1 className='form-register-title'>Cadastro de usuário</h1>
          <span className="form-register-title">
            <img src={logoPicure} alt="logo-projects" />
          </span>

          <div className="wrap-register-input">
            <input
              type="text"
              className={ name !== "" ? 'has-value input' : 'input-register' }
              id="name"
              name="name"
              ref={refName}
              value={name}
              onChange={ e => setName(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Name"></span>
          </div>
          <div className="wrap-register-input">
            <input
              type="text"
              className={ username !== "" ? 'has-value input-register' : 'input-register' }
              id="username"
              name="username"
              ref={refUsername}
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Username"></span>
          </div>
          <div className="wrap-register-input">
            <input
              type="password"
              className={ password !== "" ? 'has-value input-register' : 'input-register' }
              id="password"
              name="password"
              ref={refPassword}
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Password"></span>
          </div>
          <div className='container-register-form-btn'>
            <button
              className='register-form-btn'
              type='submit'
            >
              Finalizar
            </button>
          </div>

          <div className="text-ja-possui-conta">
            <span className="text">Já possui conta?</span>
            <a href="/login" className="link-login-page">Fazer login.</a>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
}