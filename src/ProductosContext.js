import React, { useState, createContext } from "react";
import ProductosPrincipales from "./Componentes/ProductosPrincipales";

export const ProductosContext = createContext();

export const ModeladoContext = (props) => {
    const [listaCarrito, setListaCarrito] = useState([]);
    const [estaLogueado, setEstaLogueado] = useState(false);

    return (
        <ProductosContext.Provider
            value={[
                listaCarrito,
                setListaCarrito,
                setEstaLogueado,
                estaLogueado,
            ]}
        >
            {props.children}
        </ProductosContext.Provider>
    );
};
