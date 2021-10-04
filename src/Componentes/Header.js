import { BiWorld, BiLogIn } from "react-icons/bi";
import { FiShoppingCart, FiUserPlus } from "react-icons/fi";
import { Link, Redirect } from "react-router-dom";
import { useState } from "react";
export const Header = () => {
    const [textBuscador, setTextBuscador] = useState({ busqueda: "" });
    const handleSearchChange = (e) => {
        e.preventDefault();
        setTextBuscador({ busqueda: e.target.value });
    };
    const handleSubmit = (e) => {
        // e.preventDefault();
        return <Redirect to="/componentes/0" />;
    };
    return (
        <header className="container-fluid">
            <div className="row headerPrincipal">
                <h1 className="col-2">
                    <Link className="logoWeb" to="/">
                        Mi web
                    </Link>
                </h1>
                <form
                    className="buscador col-8 col-lg-6"
                    onSubmit={handleSubmit}
                >
                    <div className="form-group controlBuscador">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Buscar Producto"
                            value={textBuscador.busqueda}
                            onChange={handleSearchChange}
                            formAction="/producto/0"
                        />
                    </div>
                </form>
                <form className=" col-2 col-lg-4">
                    <div className="row controlLogin">
                        <div className="loginInicioUser col-4">
                            <input
                                type="text"
                                className="form-control "
                                placeholder="Nombre Usuario"
                            />
                        </div>

                        <div className="loginInicioContra col-4">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                            />
                        </div>
                        <BiLogIn className="iconoLogin col-2" type="button" />
                        <Link to="/newuser" className="logoWeb">
                            <FiUserPlus
                                className="iconoLogin col-2"
                                type="button"
                            />
                        </Link>
                    </div>
                </form>
            </div>
            <div className="row headerSecond">
                <nav className="col-4">
                    <small>Categorias</small>
                    {/* <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                        </ul> */}
                </nav>
                <BiWorld className="col-4 iconoHeader" />
                <div className="col-4 iconoHeader">
                    <FiShoppingCart
                        type="button"
                        className="iconoHeader shoppingCart"
                    />
                </div>
            </div>
        </header>
    );
};
export default Header;
