import { useContext, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import pandoras_box from "../pandoras_box.jpg";
import { FaStar, FaRegStar } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { BiGift } from "react-icons/bi";
import Header from "./Header";
import Footer from "./Footer";
import { ProductosContext } from "../ProductosContext";
export const ProductoIndividual = () => {
    const { listaProductos, listaCarrito, setListaCarrito } =
        useContext(ProductosContext);

    const { idprod } = useParams();
    const productoSeleccionado = listaProductos.filter(
        (elemento) => elemento._id.toString() === idprod
    );
    const añadirElementoACarrito = (nuevoElemento) => {
        if (!listaCarrito.includes(nuevoElemento)) {
            nuevoElemento.numerodeCompras = 1;
            setListaCarrito((listaCarrito) => [...listaCarrito, nuevoElemento]);
        } else {
            alert("Ya tienes ese producto en el carrito");
        }
    };
    const [productosParecidos, setProductosParecidos] = useState([]);
    useEffect(() => {
        const nuevosProductosParecidos = [];
        for (let i = 0; i !== 3; i++) {
            nuevosProductosParecidos.push(
                listaProductos[
                    Math.floor(Math.random() * listaProductos.length)
                ]
            );
        }
        setProductosParecidos([...nuevosProductosParecidos]);
    }, [listaProductos]);

    return (
        <>
            <Header listaCarrito={listaCarrito} />
            <div className=" container contenidoCentral">
                <div className="row contenidoProductoIndividual">
                    <div className="col-12 col-md-6">
                        <img
                            src={pandoras_box}
                            alt="imagen"
                            className="imagenProducto"
                        />
                    </div>
                    <div className="nombreProducto col-12 col-md-6">
                        <h2>{productoSeleccionado[0].Nombre}</h2>
                        <h2 className="precioProducto">
                            {`${productoSeleccionado[0].Precio}€`}
                        </h2>
                        <h2 className="categoriaProducto">
                            <Link
                                className="defaultearLink"
                                to={`/busquedaCategorias/${productoSeleccionado[0].Categoria}`}
                            >
                                {productoSeleccionado[0].Categoria}
                            </Link>
                        </h2>
                        <div className="estrellasValoracion">
                            {productoSeleccionado[0].Estrellas >= 1 && (
                                <FaStar />
                            )}
                            {productoSeleccionado[0].Estrellas <= 1 && (
                                <FaRegStar />
                            )}
                            {productoSeleccionado[0].Estrellas >= 2 && (
                                <FaStar />
                            )}
                            {productoSeleccionado[0].Estrellas <= 2 && (
                                <FaRegStar />
                            )}
                            {productoSeleccionado[0].Estrellas >= 3 && (
                                <FaStar />
                            )}
                            {productoSeleccionado[0].Estrellas <= 3 && (
                                <FaRegStar />
                            )}
                            {productoSeleccionado[0].Estrellas >= 4 && (
                                <FaStar />
                            )}
                            {productoSeleccionado[0].Estrellas <= 4 && (
                                <FaRegStar />
                            )}
                            {productoSeleccionado[0].Estrellas >= 5 && (
                                <FaStar />
                            )}
                        </div>
                        <p className="descripcionProducto">
                            {productoSeleccionado[0].Descripción}
                        </p>
                        <div className="row contenedorBotonesCompra">
                            <div
                                className="col-12 col-md-5 botonAñadirCarrito botonHoverAble"
                                type="button"
                                onClick={() =>
                                    añadirElementoACarrito(
                                        productoSeleccionado[0]
                                    )
                                }
                            >
                                <MdAddShoppingCart className="botonHoverAble" />{" "}
                                Añadir al Carrito
                            </div>
                            <Link
                                className="defaultearLink col-12 col-md-5 botonAñadirCarrito"
                                to="/buynow"
                            >
                                <div className="botonHoverAble" type="button">
                                    <BiGift className="botonHoverAble" />{" "}
                                    Comprar Ahora
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <h2 className="col-12">{`Productos Parecidos`}</h2>
                    {productosParecidos.map((producto) => (
                        <>
                            <Link
                                className="productoIndividual col-12 col-md-6 col-lg-4 "
                                type="button"
                                to={`/producto/${producto._id}`}
                                key={producto._id}
                            >
                                <img
                                    src={pandoras_box}
                                    className="imagenMostrador"
                                    alt="imagen"
                                />
                                <div className="flex-container space-between">
                                    <small className="flex-item">
                                        {producto.Nombre}
                                    </small>
                                    <small className="flex-item">
                                        {`${producto.Precio}€`}
                                    </small>
                                </div>
                            </Link>
                        </>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};
export default ProductoIndividual;
