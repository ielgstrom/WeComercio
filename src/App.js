import Pag404 from "./Componentes/Pag404";
import ProductoIndividual from "./Componentes/ProductoIndividual";
import ProductosPrincipales from "./Componentes/ProductosPrincipales";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import NewUser from "./Componentes/NewUser";
import Busqueda from "./Componentes/Busqueda";
import BusquedaCategoria from "./Componentes/BusquedaCategoria";
import { ModeladoContext } from "./ProductosContext";
import ListaCarrito from "./Componentes/ListaCarrito";
import Perfil from "./Componentes/Perfil";
import { LogInPage } from "./Componentes/LogInPage";
import ScrollToTop from "./ScrollToTop";
function App() {
    return (
        <ModeladoContext>
            <Router>
                <ScrollToTop />
                <Switch>
                    <div className="cuerpoCentral">
                        <Route
                            exact
                            path="/"
                            component={ProductosPrincipales}
                        />
                        <Route
                            exact
                            path="/producto/:idprod"
                            component={ProductoIndividual}
                        />
                        <Route exact path="/newuser" component={NewUser} />
                        <Route exact path="/Carrito" component={ListaCarrito} />
                        <Route exact path="/busqueda" component={Busqueda} />
                        <Route
                            exact
                            path="/busquedaCategorias/:idCateg"
                            component={BusquedaCategoria}
                        />
                        <Route exact path="/perfil" component={Perfil} />
                        <Route exact path="/login" component={LogInPage} />
                    </div>
                    <Route exact path="*" component={Pag404} />
                </Switch>
            </Router>
        </ModeladoContext>
    );
}

export default App;
