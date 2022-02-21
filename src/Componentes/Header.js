import { BiWorld, BiLogIn, BiLogOut } from "react-icons/bi";
import { FiShoppingCart, FiUserPlus, FiUser } from "react-icons/fi";
import { Link, useHistory, NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import { ProductosContext } from "../ProductosContext";
import { useTranslation } from "react-i18next";
export const Header = () => {
    const [t, i18n] = useTranslation("global");
    const { listaCarrito, setListaCarrito, setEstaLogueado, estaLogueado } =
        useContext(ProductosContext);
    const [datosLogin, setDatosLogin] = useState({ Email: "", Contraseña: "" });
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
    const loguearUsuario = () => {
        setEstaLogueado(true);
    };
    const desloguearse = () => {
        setEstaLogueado(false);
        history.push("/");
        localStorage.removeItem("token");
        setListaCarrito([]);
    };
    const handleEmail = (e) => {
        setDatosLogin({ ...datosLogin, Email: e.target.value });
    };
    const handleContraseña = (e) => {
        setDatosLogin({ ...datosLogin, Contraseña: e.target.value });
    };
    const login = async (e) => {
        // e.preventDefault();
        if (datosLogin.Email === "" && datosLogin.Contraseña === "") {
            history.push("/newuser");
            return;
        }
        const resp = await fetch(
            "https://back-wecomerce.herokuapp.com/usuario/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(datosLogin),
            }
        );
        if (!resp.ok) {
            alert(
                "Alguna cosa no coincide, revisa que estén bien tus credenciales"
            );
            return;
        }
        const { token } = await resp.json();
        localStorage.setItem("token", token);
        loguearUsuario();
        history.push("/");
    };
    return (
        <header className="container-fluid">
            <div className="row headerPrincipal">
                <h1 className="col-2">
                    <NavLink className="defaultearLink titulo" to="/">
                        We
                    </NavLink>
                </h1>
                {!estaLogueado && (
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
                )}
                {estaLogueado && (
                    <form
                        className="buscador col-8 col-lg-9"
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
                )}
                {!estaLogueado && (
                    <form className=" col-2 col-lg-4" onSubmit={login}>
                        <div className="row controlLogin">
                            <div className="loginInicioUser col-4">
                                <input
                                    type="email"
                                    className="form-control "
                                    placeholder="Email"
                                    value={datosLogin.Email}
                                    onChange={handleEmail}
                                />
                            </div>

                            <div className="loginInicioContra col-4">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Contraseña"
                                    value={datosLogin.Contraseña}
                                    onChange={handleContraseña}
                                    onSubmit={login}
                                />
                            </div>
                            <BiLogIn
                                className="iconoLogin col-2"
                                type="button"
                                onClick={login}
                            />
                            <Link
                                to="/newuser"
                                className="defaultearLink col-2"
                            >
                                <FiUserPlus
                                    className="iconoLogin "
                                    type="button"
                                />
                            </Link>
                            <Link to="/newuser">
                                <FiUserPlus
                                    type="button"
                                    className="NewUserMovile defaultearLink"
                                />
                            </Link>
                        </div>
                    </form>
                )}
                {estaLogueado && (
                    <div type="button" className="col-2 col-lg-1">
                        <div className="row">
                            <Link to="/perfil" className="defaultearLink col-6">
                                <FiUser className="iconoLogin iconotoken" />
                            </Link>
                            <div className="col-6">
                                <BiLogOut
                                    className="iconoLogin iconotoken"
                                    onClick={desloguearse}
                                />
                            </div>
                            <Link to="/perfil" className="col-2 ">
                                <FiUser
                                    type="button"
                                    className="NewUserMovile defaultearLink loginIconoMobil"
                                />
                            </Link>
                        </div>
                    </div>
                )}
            </div>
            <div className="row headerSecond">
                <div className="dropdown col-4">
                    <button
                        className="dropdown-toggle btn col-4"
                        id="dropdownMenuLink"
                        data-toggle="dropdown"
                        type="button"
                        aria-expanded="false"
                    >
                        {t("header.categories")}
                    </button>
                    <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                    >
                        <Link
                            className="defaultearLink dropdown-item"
                            to="/busquedaCategorias/Objeto-maldito"
                        >
                            {" "}
                            Objeto maldito
                        </Link>
                        <Link
                            className="defaultearLink dropdown-item"
                            to="/busquedaCategorias/Objeto-bendecido"
                        >
                            {" "}
                            Objeto bendecido
                        </Link>
                        <Link
                            className="defaultearLink dropdown-item"
                            to="/busquedaCategorias/Fragmentos-del-Universo"
                        >
                            {" "}
                            Fragmentos del Universo
                        </Link>
                        <Link
                            className="defaultearLink dropdown-item"
                            to="/busquedaCategorias/Resto-de-Dioses"
                        >
                            {" "}
                            Resto de Dioses
                        </Link>
                        <Link
                            className="defaultearLink dropdown-item"
                            to="/busquedaCategorias/Desconocido"
                        >
                            {" "}
                            Desconocido
                        </Link>
                    </div>
                </div>
                <div className="dropdown testing">
                    <BiWorld
                        className="col-4 btn btn-secondary iconoHeader dropdown-toggle"
                        type="button"
                        id="dropdownLangButton"
                        data-toggle="dropdown"
                        aria-expanded="false"
                    />
                    <div
                        class="dropdown-menu dropdownLang"
                        aria-labelledby="dropdownLangButton"
                    >
                        <small
                            className="dropdown-item"
                            onClick={() => i18n.changeLanguage("es")}
                        >
                            ES
                        </small>
                        <small
                            className="dropdown-item"
                            onClick={() => i18n.changeLanguage("cat")}
                        >
                            CAT
                        </small>
                        <small
                            className="dropdown-item"
                            onClick={() => i18n.changeLanguage("eng")}
                        >
                            ENG
                        </small>
                    </div>
                </div>

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
        </header>
    );
};
export default Header;
