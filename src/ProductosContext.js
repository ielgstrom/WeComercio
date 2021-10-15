import React, { useState, createContext, useEffect } from "react";
import ProductosPrincipales from "./Componentes/ProductosPrincipales";

export const ProductosContext = createContext();

export const ModeladoContext = (props) => {
    const [listaCarrito, setListaCarrito] = useState([]);
    const [estaLogueado, setEstaLogueado] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            if (!!localStorage.getItem("token")) {
                setEstaLogueado(true);
            }
            return;
        };
        fetchData();
    }, []);

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
