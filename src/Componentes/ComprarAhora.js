import Footer from "./Footer";
import Header from "./Header";
import { useContext, useState, useEffect } from "react";
import { Link, useHistory, NavLink } from "react-router-dom";
import { ProductosContext } from "../ProductosContext";
export const ComprarAhora = () => {
    let history = useHistory();
    const { listaCarrito, setListaCarrito, estaLogueado, setEstaLogueado } =
        useContext(ProductosContext);
    useEffect(() => {
        if (estaLogueado === false) {
            alert("Haz inicio de sesión para comprar");
            history.push("/newuser");
        }
        return;
    }, [estaLogueado, history]);
    return (
        <>
            <Header />
            <Footer />
        </>
    );
};
export default ComprarAhora;
