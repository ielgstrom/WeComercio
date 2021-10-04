import { useParams } from "react-router-dom";
import pandoras_box from "../pandoras_box.jpg";
import { FaStar, FaRegStar } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { BiGift } from "react-icons/bi";
import Header from "./Header";
import Footer from "./Footer";
export const ProductoIndividual = ({ productos }) => {
    const { idprod } = useParams();
    const productoSeleccionado = productos.filter(
        (elemento) => elemento.id.toString() === idprod
    );
    return (
        <>
            <Header />
            <div className=" container contenidoCentral">
                <div className="row">
                    <div className="col-6">
                        <img
                            src={pandoras_box}
                            alt="imagen"
                            className="imagenProducto"
                        />
                    </div>
                    <div className="col-6">
                        <h2>{productoSeleccionado[0].nombre}</h2>
                        <h2 className="precioProducto">
                            {productoSeleccionado[0].precio}
                        </h2>
                        <h2 className="categoriaProducto">
                            {productoSeleccionado[0].categoria}
                        </h2>
                        <div className="estrellasValoracion">
                            {productoSeleccionado[0].estrellas >= 1 && (
                                <FaStar />
                            )}
                            {productoSeleccionado[0].estrellas <= 1 && (
                                <FaRegStar />
                            )}
                            {productoSeleccionado[0].estrellas >= 2 && (
                                <FaStar />
                            )}
                            {productoSeleccionado[0].estrellas <= 2 && (
                                <FaRegStar />
                            )}
                            {productoSeleccionado[0].estrellas >= 3 && (
                                <FaStar />
                            )}
                            {productoSeleccionado[0].estrellas <= 3 && (
                                <FaRegStar />
                            )}
                            {productoSeleccionado[0].estrellas >= 4 && (
                                <FaStar />
                            )}
                            {productoSeleccionado[0].estrellas <= 4 && (
                                <FaRegStar />
                            )}
                            {productoSeleccionado[0].estrellas >= 5 && (
                                <FaStar />
                            )}
                        </div>
                        <p className="descripcionProducto">
                            {productoSeleccionado[0].descripción}
                        </p>
                        <div className="row">
                            <div
                                className="col-4 botonAñadirCarrito botonHoverAble"
                                type="button"
                            >
                                <MdAddShoppingCart className="botonHoverAble" />{" "}
                                Añadir al Carrito
                            </div>
                            <div
                                className="col-4 botonAñadirCarrito"
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
