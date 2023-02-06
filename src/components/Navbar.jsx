import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="nav">
        <Link to={'/'} className="logo-div">
          <h1 className="logo-part1">Mo</h1>
          <h1 className="logo-part2">View</h1>
        </Link>
        <div className="button-div">
          <button className="nav-button" onClick={() => navigate('/register')}>
            Register
          </button>
          <button className="nav-button" onClick={() => navigate('/login')}>
            Login
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
