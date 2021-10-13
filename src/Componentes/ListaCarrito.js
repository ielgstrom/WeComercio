import Footer from "./Footer";
import Header from "./Header";
import { ProductosContext } from "../ProductosContext";
import { useContext, useState } from "react";
import { BiX } from "react-icons/bi";
import { BiGift } from "react-icons/bi";

export const ListaCarrito = () => {
    const [listaCarrito, setListaCarrito] = useContext(ProductosContext);

    const augmentarCantidad = (producto, index) => {
        if (listaCarrito[index].numerodeCompras <= producto.Stock - 1) {
            const elementoCambiado = producto;

            elementoCambiado.numerodeCompras =
                elementoCambiado.numerodeCompras + 1;

            setListaCarrito((antiguoEstado) => {
                return [
                    ...listaCarrito.slice(0, index),
                    elementoCambiado,
                    ...listaCarrito.slice(index + 1),
                ];
            });
        } else {
            alert(`Ya no hay más en stock de ${producto.Nombre}`);
        }
    };
    const disminuirCantidad = (producto, index) => {
        if (listaCarrito[index].numerodeCompras > 0) {
            const elementoCambiado = producto;

            elementoCambiado.numerodeCompras =
                elementoCambiado.numerodeCompras - 1;
            setListaCarrito((antiguoEstado) => {
                return [
                    ...listaCarrito.slice(0, index),
                    elementoCambiado,
                    ...listaCarrito.slice(index + 1),
                ];
            });
        }
    };

    //Esta seria una funcion que nos permitiria escribir la cantidad que quisieramos
    //---------------------------------------------------------------
    // const escribirCantidad = (e, producto, index) => {
    //     if (
    //         listaCarrito[index].numerodeCompras < producto.Stock &&
    //         listaCarrito[index].numerodeCompras
    //     ) {
    //         console.log("ok");
    //         setListaCarrito((antiguoEstado) => {
    //             return [
    //                 ...listaCarrito.slice(0, index),
    //                 e.target.value,
    //                 ...listaCarrito.slice(index + 1),
    //             ];
    //         });
    //     }
    // };
    const eliminarElemento = (elemento) => {
        if (
            window.confirm(
                `Seguro que quieres eliminar "${elemento.Nombre}" de tu carrito de compra?`
            )
        ) {
            setListaCarrito(listaCarrito.filter((item) => item !== elemento));
        } else {
            return;
        }
    };
    let precioTotal = 0;
    for (let i = 0; i < listaCarrito.length; i++) {
        precioTotal =
            precioTotal +
            listaCarrito[i].Precio * listaCarrito[i].numerodeCompras;
    }
    return (
        <>
            <Header />
            <div className="container contenidoCentral">
                <h2>Lista de la compra</h2>
                <div className="row">
                    <h3 className="col-7">Producto</h3>
                    <h3 className="col-1">Precio</h3>
                    <h3 className="col-2">Cantidad</h3>
                    <h3 className="col-1">Total</h3>
                    <h3 className="col-1">Eliminar</h3>
                </div>
                {listaCarrito.map((producto, i) => (
                    <>
                        <div className="row productoIndivCompra">
                            <div className="col-7">{producto.Nombre}</div>
                            <div className="col-1">{`${producto.Precio}€`}</div>
                            <div className="col-2">
                                <form>
                                    <input
                                        type="button"
                                        value="-"
                                        onClick={() =>
                                            disminuirCantidad(producto, i)
                                        }
                                    />
                                    <input
                                        type="number"
                                        min={0}
                                        max={10}
                                        value={listaCarrito[i].numerodeCompras}
                                        className="imputnumber"
                                        // onChange={() =>
                                        //     escribirCantidad(producto, i)
                                        // }
                                    />
                                    <input
                                        type="button"
                                        value="+"
                                        onClick={() =>
                                            augmentarCantidad(producto, i)
                                        }
                                    />
                                </form>
                            </div>
                            <div className="col-1">
                                {`${
                                    producto.Precio *
                                    listaCarrito[i].numerodeCompras
                                }€`}
                            </div>
                            <BiX
                                type="button"
                                className="col-1 eliminarDeCarrito"
                                onClick={() => eliminarElemento(producto)}
                            />
                        </div>
                    </>
                ))}
                <h2 className="preciofinal">{`Precio: ${precioTotal}€`}</h2>

                <div className="row justify-content-center">
                    <div
                        className="col-5  align-self-center botonAñadirCarrito botonPagarFinal"
                        type="button"
                    >
                        <BiGift className="botonHoverAble" /> Pagar
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ListaCarrito;
