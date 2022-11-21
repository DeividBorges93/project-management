import '../style/login.page.css';
import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import constants from '../utils/constants.util';
import logoPicure from '../assets/projectManagerLogoGif.gif';

const { status_code: { OK } } = constants;

export default function Login() {
  const navigate = useNavigate();
  
  const url = 'http://localhost:3001/login';

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const refUsername = useRef();
  const refPassword = useRef();

  const login = async (user, options) => {
    axios.post(url, user, options)
    .then((response) => {
      if (response.status === OK) {
        localStorage.setItem('username', JSON.stringify(user.username));
        localStorage.setItem('token', JSON.stringify(response.data.token));

        navigate('/projects');
      };
    })
    .catch((error) => console.log(error));
  };

  const getValues = async (event) => {
    event.preventDefault();

    const user = {
      [refUsername.current.name]: refUsername.current.value,
      [refPassword.current.name]: refPassword.current.value,
    };

    const options = {
      headers: {
        [refUsername.current.name]: refUsername.current.value,
      }
    }


    login(user, options);
  }

  return (
    <div className='container'>
      <div className="container-login">
        <div className="wrap-login">
        <form className='form-login' onSubmit={ getValues }>
          <h1 className='form-login-title'>Faça o login</h1>
          <span className="form-login-title">
            <img src={logoPicure} alt="logo-projects" />
          </span>

          <div className="wrap-login-input">
            <input
              type="text"
              className={ username !== "" ? 'has-value input-login' : 'input-login' }
              id="username"
              name="username"
              ref={refUsername}
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Username"></span>
          </div>
          <div className="wrap-login-input">
            <input
              type="password"
              className={ password !== "" ? 'has-value input-login' : 'input-login' }
              id="password"
              name="password"
              ref={refPassword}
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Password"></span>
          </div>
          <div className='container-login-form-btn'>
            <button
              className='login-form-btn'
              type='submit'
            >
              Entrar
            </button>
          </div>
          <div className="text-nao-possui-conta">
            <span className="text">Não possui conta?</span>
            <a href="/register" className="link-register-page">Fazer cadastro.</a>
          </div>
        </form>
        </div>
      </div>
    </div>
  )
};
