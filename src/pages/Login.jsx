import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { googleSignUpProvider, logIn } from '../Auth/firebase';
import PaswordInput from '../components/PaswordInput';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = e => {
    e.preventDefault();
    logIn(email, password, navigate);
  };

  const navigate = useNavigate();

  const handleGoogleLogIn = () => {
    googleSignUpProvider(navigate);
  };
  return (
    <div className="form-background-layer1">
      <div className="form-background-layer2">
        <div className="form">
          <header className="form-header">Log in</header>
          <form className="form-body">
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
              <PaswordInput password={password} setPassword={setPassword} />
            </div>
            <div className="link">Forgot the pasword?</div>
            <div className="input-div">
              <button className="form-button" onClick={handleLogin}>
                Log in
              </button>
            </div>
            <button className="form-button" onClick={handleGoogleLogIn}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/24px-Google_%22G%22_Logo.svg.png"
                alt=""
              />{' '}
              Login with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
