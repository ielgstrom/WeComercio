import Footer from "./Footer";
import Header from "./Header";
import { Link, useHistory } from "react-router-dom";
import { useState, useContext } from "react";
import { ProductosContext } from "../ProductosContext";
export const LogInPage = () => {
    const [listaCarrito, setListaCarrito, setEstaLogueado, estaLogueado] =
        useContext(ProductosContext);
    let history = useHistory();
    const [datosLogin, setDatosLogin] = useState({
        Email: "",
        Contraseña: "",
    });
    const loguearUsuario = () => {
        setEstaLogueado(true);
    };
    const desloguearse = () => {
        setEstaLogueado(false);
        history.push("/");
        localStorage.removeItem("token");
    };
    const login = async (e) => {
        e.preventDefault();
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
    const handleEmail = (e) => {
        setDatosLogin({ ...datosLogin, Email: e.target.value });
    };
    const handleContraseña = (e) => {
        setDatosLogin({ ...datosLogin, Contraseña: e.target.value });
    };
    return (
        <>
            <Header />
            <div className="contenidoCentral formSignUp">
                <h2>Introduce tus Credenciales</h2>
                <form onSubmit={login}>
                    <div class="form-group inputNewUser "></div>
                    <div class="form-group inputNewUser">
                        <label for="exampleInputEmail1">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Entra tu Email"
                            value={datosLogin.Email}
                            onChange={handleEmail}
                        />
                    </div>
                    <div class="form-group inputNewUser">
                        <label for="exampleInputPassword1">Contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Contraseña"
                            value={datosLogin.Contraseña}
                            onChange={handleContraseña}
                        />
                    </div>

                    <button
                        type="submit"
                        class="btn btn-primary botonNewUser botonLogin"
                        onClick={login}
                    >
                        Iniciar Sesión
                    </button>
                </form>
            </div>
            <Footer />
        </>
    );
};
