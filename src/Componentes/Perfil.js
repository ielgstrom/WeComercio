import { ProductosContext } from "../ProductosContext";
import jwt_decode from "jwt-decode";
import Footer from "./Footer";
import Header from "./Header";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
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
    return (
        <>
            <Header />
            <div className="contenidoCentral">
                <h1>Este es tu perfil, {resultadoUsuarioSeguro.Nombre}</h1>
                <div className="container-fluid">
                    <div className="row">
                        <h2 className="col-12">Datos:</h2>
                        <ul className="col-12">
                            <li>Mail: {resultadoUsuarioSeguro.Email}</li>
                            <li>
                                Contraseña: {resultadoUsuarioSeguro.Contraseña}
                            </li>
                        </ul>

                        <button
                            type="submit"
                            className="btn btn-primary botonNewUser col-12"
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
