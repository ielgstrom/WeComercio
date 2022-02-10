import Header from "./Header";
import { useHistory } from "react-router";
import { useState, useContext } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { ProductosContext } from "../ProductosContext";
export const NewUser = () => {
    const { setEstaLogueado } = useContext(ProductosContext);
    const history = useHistory();
    const [newUsuario, setNewUsuario] = useState({
        Nombre: "",
        Email: "",
        Contraseña: "",
        ContraseñaSegura: "",
    });
    const [loadingInfo, setLoadingInfo] = useState(true);
    const handleNombre = (e) => {
        setNewUsuario({ ...newUsuario, Nombre: e.target.value });
    };
    const handleEmail = (e) => {
        setNewUsuario({ ...newUsuario, Email: e.target.value });
    };
    const handlePass1 = (e) => {
        setNewUsuario({ ...newUsuario, Contraseña: e.target.value });
    };
    const handlePass2 = (e) => {
        setNewUsuario({ ...newUsuario, ContraseñaSegura: e.target.value });
    };
    const Submitearusuario = (e) => {
        e.preventDefault();
        if (newUsuario.Contraseña !== newUsuario.ContraseñaSegura) {
            alert("Las contraseñas no coinciden");
            return;
        }
        if (newUsuario.Contraseña.length < 6) {
            alert("La contraseña ha de ser de minimo 6 caracteres");
            return;
        }

        const añadirUserDB = async () => {
            const respuesta = await fetch(
                "https://back-wecomerce.herokuapp.com/usuario/registro",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        Nombre: newUsuario.Nombre,
                        Email: newUsuario.Email,
                        Contraseña: newUsuario.Contraseña,
                    }),
                }
            );
            const resultado = await respuesta.json();
            let awaitLogin;
            if (respuesta.ok) {
                awaitLogin = await login();
                // history.push("/");
            }
            return awaitLogin;
        };

        const login = async (e) => {
            // e.preventDefault();
            setLoadingInfo(false);
            const datosLogin = {
                Email: newUsuario.Email,
                Contraseña: newUsuario.Contraseña,
            };
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
            setEstaLogueado(true);
        };

        añadirUserDB().then(setLoadingInfo(true));
    };
    return (
        <>
            <Header />
            <div className="contenidoCentral formSignUp">
                <h2>Nuevo Usuario</h2>
                {!loadingInfo && <h3>NoLoad</h3>}
                <form onSubmit={Submitearusuario}>
                    <div className="form-group inputNewUser ">
                        <label htmlFor="exampleInputEmail1">Nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Nombre"
                            value={newUsuario.Nombre}
                            onChange={handleNombre}
                        />
                    </div>
                    <div className="form-group inputNewUser">
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Entra tu Email"
                            value={newUsuario.Email}
                            onChange={handleEmail}
                        />
                    </div>
                    <div className="form-group inputNewUser">
                        <label htmlFor="exampleInputPassword1">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Contraseña"
                            value={newUsuario.Contraseña}
                            onChange={handlePass1}
                        />
                    </div>
                    <div className="form-group inputNewUser">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Repetir Contraseña"
                            value={newUsuario.ContraseñaSegura}
                            onChange={handlePass2}
                        />
                    </div>
                    <button className="btn btn-primary botonYaTengo">
                        <Link to="/login" className="defaultearLink">
                            Ya tengo Cuenta
                        </Link>
                    </button>
                    <button
                        type="submit"
                        className="btn btn-primary botonNewUser"
                    >
                        Crear Cuenta
                    </button>
                </form>
            </div>
            <div className="separadorMalHecho"></div>
            <Footer />
        </>
    );
};
export default NewUser;
