import { useContext, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { BiGift } from "react-icons/bi";
import Header from "./Header";
import Footer from "./Footer";
import { ProductosContext } from "../ProductosContext";

export const ProductoIndividual = () => {
    const { listaCarrito, setListaCarrito } = useContext(ProductosContext);
    const { idprod } = useParams();

    const añadirElementoACarrito = (nuevoElemento) => {
        if (!listaCarrito.includes(nuevoElemento)) {
            nuevoElemento.numerodeCompras = 1;
            setListaCarrito((listaCarrito) => [...listaCarrito, nuevoElemento]);
        } else {
            alert("Ya tienes ese producto en el carrito");
        }
    };
    const [ProductoIndividualYSimilares, setProductoIndividualYSimilares] =
        useState({ productoEncontrado: {}, productosSugeridos: [] });

    useEffect(() => {
        const fetchData = async () => {
            const respuesta = await fetch(
                `https://back-wecomerce.herokuapp.com/producto/${idprod}`
            );
            const productos = await respuesta.json();
            setProductoIndividualYSimilares(productos);
        };
        fetchData();
    }, [idprod]);

    return (
        <>
            <Header listaCarrito={listaCarrito} />
            <div className=" container contenidoCentralIndividual">
                {ProductoIndividualYSimilares.productoEncontrado?.Nombre ===
                undefined ? (
                    <div className="row">
                        <div className="productoIndividualLoad col-12 col-md-6 "></div>
                        <div className="col-12 col-md-6">
                            <div className="loadText loadName"></div>
                            <div className="loadText loadPrice"></div>
                            <div className="loadText loadDescription"></div>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="row contenidoProductoIndividual">
                            <div className="col-12 col-md-6">
                                <img
                                    src={
                                        ProductoIndividualYSimilares
                                            .productoEncontrado.urlImage
                                    }
                                    alt="imagen"
                                    className="imagenProducto"
                                />
                            </div>
                            <div className="nombreProducto col-12 col-md-6">
                                <h2>
                                    {
                                        ProductoIndividualYSimilares
                                            .productoEncontrado.Nombre
                                    }
                                </h2>
                                <h2 className="precioProducto">
                                    {`${ProductoIndividualYSimilares.productoEncontrado.Precio}€`}
                                </h2>
                                <h2 className="categoriaProducto">
                                    <Link
                                        className="defaultearLink"
                                        to={`/busquedaCategorias/${ProductoIndividualYSimilares.productoEncontrado.Categoria}`}
                                    >
                                        {
                                            ProductoIndividualYSimilares
                                                .productoEncontrado.Categoria
                                        }
                                    </Link>
                                </h2>
                                <div className="estrellasValoracion">
                                    {ProductoIndividualYSimilares
                                        .productoEncontrado.Estrellas >= 1 && (
                                        <FaStar />
                                    )}
                                    {ProductoIndividualYSimilares
                                        .productoEncontrado.Estrellas <= 1 && (
                                        <FaRegStar />
                                    )}
                                    {ProductoIndividualYSimilares
                                        .productoEncontrado.Estrellas >= 2 && (
                                        <FaStar />
                                    )}
                                    {ProductoIndividualYSimilares
                                        .productoEncontrado.Estrellas <= 2 && (
                                        <FaRegStar />
                                    )}
                                    {ProductoIndividualYSimilares
                                        .productoEncontrado.Estrellas >= 3 && (
                                        <FaStar />
                                    )}
                                    {ProductoIndividualYSimilares
                                        .productoEncontrado.Estrellas <= 3 && (
                                        <FaRegStar />
                                    )}
                                    {ProductoIndividualYSimilares
                                        .productoEncontrado.Estrellas >= 4 && (
                                        <FaStar />
                                    )}
                                    {ProductoIndividualYSimilares
                                        .productoEncontrado.Estrellas <= 4 && (
                                        <FaRegStar />
                                    )}
                                    {ProductoIndividualYSimilares
                                        .productoEncontrado.Estrellas >= 5 && (
                                        <FaStar />
                                    )}
                                </div>
                                <p className="descripcionProducto">
                                    {
                                        ProductoIndividualYSimilares
                                            .productoEncontrado.Descripción
                                    }
                                </p>
                                <div className="row contenedorBotonesCompra">
                                    <div
                                        className="col-12 col-md-5 botonAñadirCarrito botonHoverAble"
                                        type="button"
                                        onClick={() =>
                                            añadirElementoACarrito(
                                                ProductoIndividualYSimilares.productoEncontrado
                                            )
                                        }
                                    >
                                        <MdAddShoppingCart className="botonHoverAble" />{" "}
                                        Añadir al Carrito
                                    </div>
                                    <Link
                                        className="defaultearLink col-12 col-md-5 botonAñadirCarrito"
                                        to={`/buynow?item=${idprod}`}
                                    >
                                        <div
                                            className="botonHoverAble"
                                            type="button"
                                            // onClick={buyElement}
                                        >
                                            <BiGift className="botonHoverAble" />{" "}
                                            Comprar Ahora
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <h2 className="col-12 mt-4">{`Productos Parecidos`}</h2>
                            {ProductoIndividualYSimilares.productosSugeridos.map(
                                (producto) => (
                                    <Link
                                        className="productoIndividual col-12 col-md-6 col-lg-4 "
                                        type="button"
                                        to={`/producto/${producto._id}`}
                                        key={producto._id}
                                    >
                                        <img
                                            src={producto.urlImage}
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
                                )
                            )}
                        </div>
                    </>
                )}
            </div>
            <Footer />
        </>
    );
};
export default ProductoIndividual;
