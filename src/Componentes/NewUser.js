import Header from "./Header";
import { useHistory } from "react-router";
import { useState } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
export const NewUser = () => {
    const history = useHistory();
    const [newUsuario, setNewUsuario] = useState({
        Nombre: "",
        Email: "",
        Contraseña: "",
        ContraseñaSegura: "",
    });
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
            // console.log("hola");
            alert("Las contraseñas no coinciden");
            return;
        } else {
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
            };

            history.push("/");
            añadirUserDB();
        }
    };
    return (
        <>
            <Header />
            <div className="contenidoCentral formSignUp">
                <h2>Nuevo Usuario</h2>
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
