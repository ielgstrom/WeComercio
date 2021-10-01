import { BiWorld, BiLogIn } from "react-icons/bi";
import { FiShoppingCart, FiUserPlus } from "react-icons/fi";
import Footer from "./Componentes/Footer";
import ProductosPrincipales from "./Componentes/ProductosPrincipales";
function App() {
    return (
        <>
            <header className="container-fluid">
                <div className="row headerPrincipal">
                    <h1 className="col-2">Mi web</h1>
                    <form className="buscador col-8 col-lg-6">
                        <div className="form-group controlBuscador">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Buscar Producto"
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
                            <BiLogIn
                                className="iconoLogin col-2"
                                type="button"
                            />
                            <FiUserPlus
                                className="iconoLogin col-2"
                                type="button"
                            />
                        </div>
                    </form>
                </div>
                <div className="row headerSecond">
                    <nav className="col-4">
                        <small>Categorias</small>
                        {/* <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                        </ul> */}
                    </nav>
                    <BiWorld className="col-4 iconoHeader" />
                    <div className="col-4 iconoHeader">
                        <FiShoppingCart
                            type="button"
                            className="iconoHeader shoppingCart"
                        />
                    </div>
                </div>
            </header>
            <div className="contenidoCentral">
                <ProductosPrincipales />
            </div>
            <footer className="container-fluid">
                <Footer className="row" />
            </footer>
        </>
    );
}

export default App;
