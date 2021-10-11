import Pag404 from "./Componentes/Pag404";
import ProductoIndividual from "./Componentes/ProductoIndividual";
import ProductosPrincipales from "./Componentes/ProductosPrincipales";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import NewUser from "./Componentes/NewUser";
import Busqueda from "./Componentes/Busqueda";
function App() {
    const [listaProductos, setListaProductos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const respuesta = await fetch(
                "http://back-wecomerce.herokuapp.com/producto"
            );
            const datos = await respuesta.json();
            setListaProductos(datos);
        };
        fetchData();
    }, []);

    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <ProductosPrincipales listaProductos={listaProductos} />
                    </Route>
                    <Route exact path="/producto/:idprod">
                        <ProductoIndividual listaProductos={listaProductos} />
                    </Route>
                    <Route exact path="/newuser" component={NewUser} />
                    <Route exact path="/busqueda">
                        <Busqueda listaProductos={listaProductos} />
                    </Route>
                    <Route path="*" component={Pag404} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
