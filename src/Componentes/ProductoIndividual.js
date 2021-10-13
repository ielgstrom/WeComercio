import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import pandoras_box from "../pandoras_box.jpg";
import { FaStar, FaRegStar } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { BiGift } from "react-icons/bi";
import Header from "./Header";
import Footer from "./Footer";
import { ProductosContext } from "../ProductosContext";
export const ProductoIndividual = ({ listaProductos }) => {
    const [listaCarrito, setListaCarrito] = useContext(ProductosContext);
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
                        <div className="row">
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
                            <div
                                className="col-12 col-md-5 botonAñadirCarrito"
                                type="button"
                            >
                                <BiGift className="botonHoverAble" /> Comprar
                                Ahora
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};
export default ProductoIndividual;
