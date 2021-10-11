import { BiWorld, BiLogIn } from "react-icons/bi";
import { FiShoppingCart, FiUserPlus } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
export const Header = () => {
    let history = useHistory();
    const [textBuscador, setTextBuscador] = useState({ busqueda: "" });
    const handleSearchChange = (e) => {
        e.preventDefault();
        setTextBuscador({ busqueda: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/busqueda?item=${textBuscador.busqueda}`);
    };
    const [verCategorias, setVerCategorias] = useState(true);
    const viewCategorias = () => {
        setVerCategorias(!verCategorias);
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
                        <Link to="/newuser" className="logoWeb col-2">
                            <FiUserPlus className="iconoLogin " type="button" />
                        </Link>
                    </div>
                </form>
            </div>
            <div className="row headerSecond">
                <nav className="col-4">
                    <small type="button" onClick={viewCategorias}>
                        Categorias
                    </small>
                </nav>
                <BiWorld className="col-4 iconoHeader" />
                <div className="col-4 iconoHeader">
                    <FiShoppingCart
                        type="button"
                        className="iconoHeader shoppingCart"
                    />
                </div>
            </div>
            {verCategorias && (
                <div className="row dropdownMenu">
                    <ul>
                        <li>Objeto maldito</li>
                        <li>Objeto bendecido</li>
                        <li>Fragmentos del Universo</li>
                        <li>Restos de Dioses</li>
                        <li>Desconocido </li>
                    </ul>
                </div>
            )}
        </header>
    );
};
export default Header;
