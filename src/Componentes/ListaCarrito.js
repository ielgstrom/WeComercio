import Footer from "./Footer";
import Header from "./Header";
import { ProductosContext } from "../ProductosContext";
import { useContext } from "react";
import { BiX } from "react-icons/bi";
import { BiGift } from "react-icons/bi";
import { Link } from "react-router-dom";

export const ListaCarrito = () => {
    const { listaCarrito, setListaCarrito } = useContext(ProductosContext);

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
            <div className="container contenidoCentralIndividual">
                <h2 className="tituloListaCompra">Lista de la compra</h2>
                {listaCarrito.length !== 0 && (
                    <div>
                        <div className="row">
                            <h3 className="col-6 descrListaCompraTitle">
                                Producto
                            </h3>
                            <h3 className="col-1  descrListaCompra">Precio</h3>
                            <h3 className="col-2  descrListaCompra">
                                Cantidad
                            </h3>
                            <h3 className="col-1 descrListaCompra">Total</h3>
                            <h3 className="col-2  descrListaCompra">
                                Eliminar
                            </h3>
                        </div>
                        {listaCarrito.map((producto, i) => (
                            <>
                                <div className="row productoIndivCompra align-items-center ">
                                    <div className="col-4 col-md-6 nombreProductoCarrito">
                                        {producto.Nombre}
                                    </div>
                                    <div className="col-2 col-md-1 p-0">{`${producto.Precio}€`}</div>
                                    <div className="col-2 p-0">
                                        <form>
                                            <input
                                                type="button"
                                                value="-"
                                                onClick={() =>
                                                    disminuirCantidad(
                                                        producto,
                                                        i
                                                    )
                                                }
                                                className="botonesMasMenosCarrito"
                                            />
                                            <input
                                                type="number"
                                                min={0}
                                                max={10}
                                                value={
                                                    listaCarrito[i]
                                                        .numerodeCompras
                                                }
                                                className="imputnumber"
                                                // onChange={() =>
                                                //     escribirCantidad(producto, i)
                                                // }
                                            />
                                            <input
                                                type="button"
                                                value="+"
                                                onClick={() =>
                                                    augmentarCantidad(
                                                        producto,
                                                        i
                                                    )
                                                }
                                                className="botonesMasMenosCarrito"
                                            />
                                        </form>
                                    </div>
                                    <div className="col-2 col-md-1 p-0">
                                        {`${
                                            producto.Precio *
                                            listaCarrito[i].numerodeCompras
                                        }€`}
                                    </div>
                                    <div className="col-2">
                                        <BiX
                                            type="button"
                                            className="eliminarDeCarrito"
                                            onClick={() =>
                                                eliminarElemento(producto)
                                            }
                                        />
                                    </div>
                                </div>
                            </>
                        ))}
                        <h2 className="preciofinal">{`Precio: ${precioTotal}€`}</h2>

                        <div className="row justify-content-center">
                            <Link
                                className="col-10 col-md- 5  align-self-center botonAñadirCarrito botonPagarFinal"
                                type="button"
                                to="/buynow"
                            >
                                <BiGift className="botonHoverAble" /> Pagar
                            </Link>
                        </div>
                    </div>
                )}
                {listaCarrito.length === 0 && (
                    <>
                        <h2>No tienes nada en el carrito</h2>
                        <h4>
                            <Link to="/" className="defaultearLink">
                                Volver a la pagina principal
                            </Link>
                        </h4>
                    </>
                )}
            </div>
            <Footer />
        </>
    );
};

export default ListaCarrito;
