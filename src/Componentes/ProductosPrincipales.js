import { Link } from "react-router-dom";
import pandoras_box from "../pandoras_box.jpg";
import Footer from "./Footer";
import Header from "./Header";
export const ProductosPrincipales = ({ listaProductos }) => {
    return (
        <>
            <Header />
            <div className="contenidoCentral">
                <div className="productos row justify-content-between p-0">
                    <p>
                        Bienvenido a mi magina web de compras. Esta pagina no es
                        100% seria y solo está hecha para enseñar y mostrar mis
                        habilidades con HTML, CSS, JS, REACT entre otros. He
                        hecho servir React como framework para el Front-End,
                        MongoDB como base de datos y NODE con la libreria
                        Express como Back-End
                    </p>
                    <div
                        className="categoriasBuscador col-12 col-md-3 "
                        type="button"
                    >
                        Ofertas
                    </div>
                    <div
                        className="categoriasBuscador col-12 col-md-3 "
                        type="button"
                    >
                        Novedades
                    </div>
                    <div
                        className="categoriasBuscador col-12 col-md-3 "
                        type="button"
                    >
                        Más vendido
                    </div>
                    {listaProductos[0] === undefined && (
                        <div className="loading">Cargando Productos...</div>
                    )}

                    {listaProductos.map((producto) => (
                        <>
                            <Link
                                className="productoIndividual col-12 col-md-6 col-lg-4 "
                                type="button"
                                to={`/producto/${producto._id}`}
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
export default ProductosPrincipales;
