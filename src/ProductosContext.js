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

    return (
        <ProductosContext.Provider
            value={{
                listaCarrito,
                setListaCarrito,
                setEstaLogueado,
                estaLogueado,
                listaProductos,
                setListaProductos,
            }}
        >
            {props.children}
        </ProductosContext.Provider>
    );
};
