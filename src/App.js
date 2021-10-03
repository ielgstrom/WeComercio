import Footer from "./Componentes/Footer";
import Header from "./Componentes/Header";
import Pag404 from "./Componentes/Pag404";
import ProductoIndividual from "./Componentes/ProductoIndividual";
import ProductosPrincipales from "./Componentes/ProductosPrincipales";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import React, { useState } from "react";
function App() {
    const [productos, setProductos] = useState([
        {
            nombre: "Caja de Pandora",
            precio: "5€",
            categoria: "objetos malditos",
            descripción:
                "Caja normal, fue dedicada al señor oscuro de las sombras que se esconde entre nosotros todos los dias. No puedo poner puntos?",
            stock: 1242,
            estrellas: 3,
            id: 0,
        },
        {
            nombre: "Caja de Pandora",
            precio: "5€",
            categoria: "objetos malditos",
            descripción: "lorem*20",
            id: 1,
            stock: 142,
            estrellas: 2,
        },
        {
            nombre: "Caja de sustos",
            precio: "53€",
            categoria: "objetos malditos",
            descripción: "Caja normal pero da sustos ahora",
            id: 2,
            stock: 1244,
            estrellas: 5,
        },
        {
            nombre: "8 magico",
            precio: "52€",
            categoria: "curiosidades de suerte",
            descripción: "Bola que te da la respuesta a tus preguntas",
            id: 3,
            stock: 12,
            estrellas: 4,
        },
        {
            nombre: "Caja de Pandora",
            precio: "5€",
            categoria: "objetos malditos",
            descripción: "Caja normal",
            id: 4,
            stock: 1242,
            estrellas: 4,
        },
        {
            nombre: "Bastón de satanás",
            precio: "530€",
            categoria: "pertenencias de satanas",
            descripción: "Bastón con todas los poderes en la mano de satanás",
            id: 5,
            stock: 162,
            estrellas: 1,
        },
        {
            nombre: "Caja de sustos",
            precio: "53€",
            categoria: "objetos malditos",
            descripción: "Caja normal pero da sustos ahora",
            id: 6,
            stock: 18,
            estrellas: 2,
        },
        {
            nombre: "8 magico",
            precio: "52€",
            categoria: "curiosidades de suerte",
            descripción: "Bola que te da la respuesta a tus preguntas",
            id: 7,
            stock: 3242,
            estrellas: 4,
        },
        {
            nombre: "Caja de Pandora",
            precio: "5€",
            categoria: "objetos malditos",
            descripción: "Caja normal",
            id: 8,
            stock: 1242,
            estrellas: 4,
        },
        {
            nombre: "Bastón de satanás",
            precio: "530€",
            categoria: "pertenencias de satanas",
            descripción: "Bastón con todas los poderes en la mano de satanás",
            id: 9,
            stock: 10,
            estrellas: 3,
        },
    ]);
    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <div className="contenidoCentral">
                            <ProductosPrincipales productos={productos} />
                        </div>
                    </Route>
                    <Route exact path="/producto/:idprod">
                        <ProductoIndividual productos={productos} />
                    </Route>
                    <Route path="*" component={Pag404} />
                </Switch>
                <footer className="container-fluid">
                    <Footer className="row" />
                </footer>
            </Router>
        </>
    );
}

export default App;
