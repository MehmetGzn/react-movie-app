import React from 'react';

const Register = () => {
  return (
    <div>
      <div className="form-background-layer1">
        <div className="form-background-layer2">
          <div className="form">
            <header className="form-header">Register</header>
            <form className="form-body">
              <div className="input-div">
                <label htmlFor="name">Name</label>
                <input type="name" id="name" requerid />
              </div>
              <div className="input-div">
                <label htmlFor="surname">Surname</label>
                <input type="surname" id="surname" requerid />
              </div>
              <div className="input-div">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" requerid />
              </div>
              <div className="input-div">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" requerid />
              </div>
              <div className="input-div">
                <button className="form-button">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
