import Header from "./Header";
export const NewUser = () => {
    return (
        <>
            <Header />
            <div className="contenidoCentral formSignUp">
                <h2>Nuevo Usuario</h2>
                <form>
                    <div class="form-group inputNewUser ">
                        <label for="exampleInputEmail1">Nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Nombre"
                        />
                    </div>
                    <div class="form-group inputNewUser">
                        <label for="exampleInputEmail1">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Entra tu Email"
                        />
                    </div>
                    <div class="form-group inputNewUser">
                        <label for="exampleInputPassword1">Contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Contraseña"
                        />
                    </div>
                    <div class="form-group inputNewUser">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Repetir Contraseña"
                        />
                    </div>

                    <button type="submit" class="btn btn-primary botonNewUser">
                        Crear Cuenta
                    </button>
                </form>
            </div>
        </>
    );
};
export default NewUser;
