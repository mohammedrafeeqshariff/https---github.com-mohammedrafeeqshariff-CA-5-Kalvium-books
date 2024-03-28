import { NavLink } from "react-router-dom"
import some from '../../assets/logo.png'
import './navbar.css'


const Navbar = () => {
    

  return (
    <>
    <div className="nav_container">
        <nav className="navbar">
                <div className="logo">
                    <NavLink to="/" > <img src={some} alt="kalvium books" /> </NavLink> 
                </div>
                <NavLink to='/'><button>Home</button></NavLink>
                <NavLink to='/register'><button>Register</button></NavLink> 
        </nav>
    </div>
    </>
  )
}

export default Navbar
