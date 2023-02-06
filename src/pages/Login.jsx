import React from 'react';

const Login = () => {
  return (
    <div className="form-background-layer1">
      <div className="form-background-layer2">
        <div className="form">
          <header className="form-header">Login</header>
          <form className="form-body">
            <div className="input-div">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" requerid />
            </div>
            <div className="input-div">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" requerid />
            </div>
            <div className="link">Forgot the pasword?</div>
            <div className="input-div">
              <button className="form-button">Login</button>
              <button className="form-button">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/24px-Google_%22G%22_Logo.svg.png"
                  alt=""
                />{' '}
                Login with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
