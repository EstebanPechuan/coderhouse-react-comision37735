import "./Navbar.css";
import logo from '../../img/logo.JPG';
import { CartWidget } from '../CartWidget/CartWidget';
import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <header>
            <div className="Logo">
                <Link to={'/'}>
                    <img src={logo} />
                </Link>
            </div>
            
            <nav className="Nav">
                <ul className="Menu">
                    <li className="NavItem">
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li className="NavItem DropMenu">
                        <Link to={'/'}>Productos</Link>
                        <ul className="SubMenu">
                            <li className="NavItem">
                                {/* <a href="#">Productos para cocinas industriales</a> */}
                                <Link to={'/categoria/cocina'}>Cocina</Link>
                            </li>
                            <li className="NavItem">
                                {/* <a href="#">Productos para hospitales</a> */}
                                <Link to={'/categoria/hospital'}>Hospital</Link>
                            </li>
                            {/* <li className="NavItem">
                                <a href="#">Limpieza de pisos</a>
                            </li> */}
                        </ul>
                    </li>
                </ul>

                <div className="Login">
                    <CartWidget />
                    <button className="BtnGhost">Login</button>
                    <button className="BtnFill">Registrarse</button>
                </div>
            </nav>
        </header>
      );
}