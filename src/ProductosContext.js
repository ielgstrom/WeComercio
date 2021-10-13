import React, { useState, createContext } from "react";
import ProductosPrincipales from "./Componentes/ProductosPrincipales";

export const ProductosContext = createContext();

export const ModeladoContext = (props) => {
    const [listaCarrito, setListaCarrito] = useState([]);
    return (
        <ProductosContext.Provider value={[listaCarrito, setListaCarrito]}>
            {props.children}
        </ProductosContext.Provider>
    );
};
