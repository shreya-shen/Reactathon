import { click } from "@testing-library/user-event/dist/click";

const Header=()=>{
  //   const navigate = useNavigate();

  // const clickHandler = (e) => {
  //   e.preventDefault();
  //   navigate('/login');
  // }

  return(
    <header className="topNav">
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" to="/">
            <img className="nav__logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" />
          </a>
          
          <div className="navbar">
            <form className="d-flex" role="search">
              <select>
                <option>English</option>
                <option>Hindi</option>
              </select>
              <button className="btn btn-danger">Signin</button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;