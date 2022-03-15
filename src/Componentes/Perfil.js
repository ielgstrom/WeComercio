import { ProductosContext } from "../ProductosContext";
import jwt_decode from "jwt-decode";
import Footer from "./Footer";
import Header from "./Header";
import { FiSettings } from "react-icons/fi";
import { useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import default_profile_foto from "../default_profile_foto.png";
export const Perfil = () => {
    let history = useHistory();
    const { setEstaLogueado, setListaCarrito } = useContext(ProductosContext);
    const token = localStorage.getItem("token");
    const { resultadoUsuarioSeguro } = jwt_decode(token);
    const handleLogOut = (e) => {
        setEstaLogueado(false);
        history.push("/");
        localStorage.removeItem("token");
        setListaCarrito([]);
    };
    // useEffect(() => {
    //     const delUser = async () => {
    //         await fetch(
    //             `https://back-wecomerce.herokuapp.com/usuario/delete`,
    //             {
    //                 method: "DELETE",
    //                 body: {
    //                     Email: resultadoUsuarioSeguro.Email,
    //                     Contraseña: resultadoUsuarioSeguro.Contraseña,
    //                 },
    //             },
    //             history.push("/")
    //         );
    //     };
    //     delUser();
    // }, [resultadoUsuarioSeguro.Contraseña, resultadoUsuarioSeguro.Email]);
    return (
        <>
            <Header />
            <div className="contenidoCentral">
                <h1 className="mb-4">
                    Este es tu perfil, {resultadoUsuarioSeguro.Nombre}
                </h1>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-7 col-12">
                            <h2>Datos:</h2>
                            <div className="row justify-content-between">
                                <img
                                    className="col-4 imgProfile"
                                    src={default_profile_foto}
                                    alt="your foto"
                                />
                                <ul className="col-6 list-group">
                                    <li className="list-group-item align-item-left">
                                        <b> UserName</b> :{" "}
                                        {resultadoUsuarioSeguro.Nombre}
                                    </li>
                                    <li className="list-group-item ">
                                        <b>Mail:</b>{" "}
                                        {resultadoUsuarioSeguro.Email}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-5 col-12">
                            <h2 align="center"> Historial de compras</h2>
                            <div className="HistorialCompras">
                                De momento no has comprado nada
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-between pb-5">
                        <Link
                            type="button"
                            className="btn col-9 col-md-5 botonConfig"
                            to="/settings"
                        >
                            <FiSettings className="botonHoverAble mr-3" />
                            Configuración
                        </Link>

                        <button
                            type="submit"
                            className="btn col-9 col-md-5  btn-primary botonNewUser "
                            onClick={handleLogOut}
                        >
                            Salir de la sesion
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Perfil;
