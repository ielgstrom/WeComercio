import { Link } from "react-router-dom";
import pandoras_box from "../pandoras_box.jpg";
export const ProductosPrincipales = ({ productos }) => {
    return (
        <>
            <div className="productos row justify-content-between p-0">
                <p>
                    Bienvenido a mi magina web de compras. Esta pagina no es
                    100% seria y solo está hecha para enseñar y mostrar mis
                    habilidades con HTML, CSS, JS, REACT entre otros. He hecho
                    servir React como framework para el Front-End, MongoDB como
                    base de datos y NODE con la libreria Express como Back-End
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
                {productos.map((producto) => (
                    <>
                        <Link
                            className="productoIndividual col-12 col-md-6 col-lg-4 "
                            type="button"
                            to={`/producto/${producto.id}`}
                        >
                            <img
                                src={pandoras_box}
                                className="imagenMostrador"
                                alt="imagen"
                            />
                            <div className="flex-container space-between">
                                <small className="flex-item">
                                    {producto.nombre}
                                </small>
                                <small className="flex-item">
                                    {producto.precio}
                                </small>
                            </div>
                        </Link>
                    </>
                ))}
            </div>
        </>
    );
};
export default ProductosPrincipales;
