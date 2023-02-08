import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logOut } from '../Auth/firebase';
import { AuthContext } from '../context/AuthContextProvider';

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  const navigate = useNavigate();
  return (
    <div>
      <nav className="nav">
        <Link to={'/'} className="logo-div">
          <h1 className="logo-part1">Mo</h1>
          <h1 className="logo-part2">View</h1>
        </Link>
        <div className="button-div">
          {currentUser ? (
            <>
              <div className="display-name">{currentUser.displayName}</div>
              <button className="nav-button" onClick={() => logOut()}>
                Log out
              </button>
            </>
          ) : (
            <>
              <button
                className="nav-button"
                onClick={() => navigate('/register')}
              >
                Register
              </button>
              <button className="nav-button" onClick={() => navigate('/login')}>
                Log in
              </button>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
