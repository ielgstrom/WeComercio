import Pag404 from "./Componentes/Pag404";
import ProductoIndividual from "./Componentes/ProductoIndividual";
import ProductosPrincipales from "./Componentes/ProductosPrincipales";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import NewUser from "./Componentes/NewUser";
import Busqueda from "./Componentes/Busqueda";
import BusquedaCategoria from "./Componentes/BusquedaCategoria";
import { ModeladoContext } from "./ProductosContext";
import ListaCarrito from "./Componentes/ListaCarrito";
function App() {
    const [listaProductos, setListaProductos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const respuesta = await fetch(
                "https://back-wecomerce.herokuapp.com/producto"
            );
            const datos = await respuesta.json();
            setListaProductos(datos);
        };
        fetchData();
    }, []);

    // useEffect(() => {
    //     window.onbeforeunload = function () {
    //         alert("Holi");
    //     };
    // });
    return (
        <ModeladoContext>
            <Router>
                <Switch>
                    <div className="cuerpoCentral">
                        <Route exact path="/">
                            <ProductosPrincipales
                                listaProductos={listaProductos}
                            />
                        </Route>
                        <Route exact path="/producto/:idprod">
                            <ProductoIndividual
                                listaProductos={listaProductos}
                            />
                        </Route>
                        <Route exact path="/newuser" component={NewUser} />
                        <Route exact path="/Carrito" component={ListaCarrito} />
                        <Route exact path="/busqueda">
                            <Busqueda listaProductos={listaProductos} />
                        </Route>
                        <Route exact path="/busquedaCategorias/:idCateg">
                            <BusquedaCategoria
                                listaProductos={listaProductos}
                            />
                        </Route>
                    </div>
                    <Route exact path="*" component={Pag404} />
                </Switch>
            </Router>
        </ModeladoContext>
    );
}

export default App;
