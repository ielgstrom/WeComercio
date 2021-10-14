import { BiWorld, BiLogIn } from "react-icons/bi";
import { FiShoppingCart, FiUserPlus } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import { useState, useContext } from "react";
import { ProductosContext } from "../ProductosContext";
export const Header = () => {
    const [listaCarrito, setListaCarrito] = useContext(ProductosContext);

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
    const [verCategorias, setVerCategorias] = useState(false);
    const viewCategorias = () => {
        setVerCategorias(!verCategorias);
    };

    //intento de que al clickar fuera, se quitara el menu
    // useEffect(() => {
    //     const checkIfClickedOutside = (e) => {
    //         if (
    //             verCategorias &&
    //             ref.current &&
    //             !ref.current.contains(e.target)
    //         ) {
    //             setVerCategorias(true);
    //         }
    //     };
    //     document.addEventListener("mousedown", checkIfClickedOutside);
    //     return () => {
    //         document.removeEventListener("mousedown", checkIfClickedOutside);
    //     };
    // }, [verCategorias]);
    return (
        <header className="container-fluid">
            <div className="row headerPrincipal">
                <h1 className="col-2">
                    <Link className="defaultearLink" to="/">
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
                        <Link to="/newuser" className="defaultearLink col-2">
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
                    <Link to="/Carrito" className="defaultearLink">
                        {listaCarrito.length === 0 && <div></div>}
                        {listaCarrito.length !== 0 && (
                            <div className="numeroCarrito">
                                {listaCarrito.length}
                            </div>
                        )}
                        <FiShoppingCart
                            type="button"
                            className="iconoHeader shoppingCart"
                        />
                    </Link>
                </div>
            </div>
            {verCategorias && (
                <div className="row dropdownMenu">
                    <ul>
                        <Link
                            className="defaultearLink"
                            to="/busquedaCategorias/Objeto-maldito"
                            onClick={() => setVerCategorias(false)}
                        >
                            <li className="tituloMenuDropdown">
                                Objeto maldito
                            </li>
                        </Link>
                        <Link
                            className="defaultearLink"
                            to="/busquedaCategorias/Objeto-bendecido"
                            onClick={() => setVerCategorias(false)}
                        >
                            <li>Objeto bendecido</li>
                        </Link>
                        <Link
                            className="defaultearLink"
                            to="/busquedaCategorias/Fragmentos-del-Universo"
                            onClick={() => setVerCategorias(false)}
                        >
                            <li>Fragmentos del Universo</li>
                        </Link>
                        <Link
                            className="defaultearLink"
                            to="/busquedaCategorias/Resto-de-Dioses"
                            onClick={() => setVerCategorias(false)}
                        >
                            <li>Resto de Dioses</li>
                        </Link>
                        <Link
                            className="defaultearLink"
                            to="/busquedaCategorias/Desconocido"
                            onClick={() => setVerCategorias(false)}
                        >
                            <li>Desconocido</li>
                        </Link>{" "}
                    </ul>
                </div>
            )}
        </header>
    );
};
export default Header;
