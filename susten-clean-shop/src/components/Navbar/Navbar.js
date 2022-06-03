import "./Navbar.css";
import logo from '../../img/logo.JPG';
import { CartWidget } from '../CartWidget/CartWidget';

export function Navbar() {
    return (
        <header>
            <div className="Logo">
                <a href="#">
                    <img src={logo} />
                </a>
            </div>
            
            <nav className="Nav">
                <ul className="Menu">
                    <li className="NavItem">
                        <a href="#">Home</a>
                    </li>
                    <li className="NavItem DropMenu">
                        <a href="#">Productos</a>
                        {/* <ul className="SubMenu">
                            <li className="NavItem">
                                <a href="#">Productos para cocinas industriales</a>
                            </li>
                            <li className="NavItem">
                                <a href="#">Productos para hospitales</a>
                            </li>
                            <li className="NavItem">
                                <a href="#">Limpieza de pisos</a>
                            </li>
                        </ul> */}
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