import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../Auth/firebase';

const Register = () => {
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    createUser(email, password, navigate);
    console.log(name, surname, email, password);
  };

  return (
    <div>
      <div className="form-background-layer1">
        <div className="form-background-layer2">
          <div className="form">
            <header className="form-header">Register</header>
            <form className="form-body" onSubmit={handleSubmit}>
              <div className="input-div">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name..."
                  required
                  onChange={e => setName(e.target.value)}
                />
              </div>
              <div className="input-div">
                <label htmlFor="surname">Surname</label>
                <input
                  type="text"
                  id="surname"
                  placeholder="Enter your surname..."
                  required
                  onChange={e => setSurname(e.target.value)}
                />
              </div>
              <div className="input-div">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email..."
                  required
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className="input-div">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password..."
                  required
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              <div className="input-div">
                <input
                  type="submit"
                  className="form-button"
                  id="rgstr-btn"
                  value="Register"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
