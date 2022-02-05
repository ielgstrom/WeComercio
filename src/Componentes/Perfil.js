import { ProductosContext } from "../ProductosContext";
import jwt_decode from "jwt-decode";
import Footer from "./Footer";
import Header from "./Header";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
export const Perfil = () => {
    let history = useHistory();
    const { setEstaLogueado } = useContext(ProductosContext);
    const token = localStorage.getItem("token");
    const { resultadoUsuarioSeguro } = jwt_decode(token);
    const handleLogOut = (e) => {
        setEstaLogueado(false);
        history.push("/");
        localStorage.removeItem("token");
    };
    return (
        <>
            <Header />
            <h1 className="contenidoCentral">
                Este es tu perfil, {resultadoUsuarioSeguro.Nombre}
            </h1>
            <button
                type="submit"
                className="btn btn-primary botonNewUser"
                onClick={handleLogOut}
            >
                Salir de la sesion
            </button>
            <Footer />
        </>
    );
};

export default Perfil;
