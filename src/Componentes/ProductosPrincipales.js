import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { useContext } from "react";
import { ProductosContext } from "../ProductosContext";
import { useTranslation } from "react-i18next";
export const ProductosPrincipales = () => {
    const [t, i18n] = useTranslation("global");
    const { listaProductos } = useContext(ProductosContext);

    return (
        <>
            <Header />
            <div className="contenidoCentral">
                <div className="productos row justify-content-between p-0">
                    <p>{t("header.self-description")}</p>
                    <div
                        className="categoriasBuscador col-12 col-md-3 "
                        type="button"
                    >
                        {t("header.hello-world")}
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
                        <>
                            <div className="productoIndividualLoad col-12 col-md-6 col-lg-4"></div>
                            <div className="productoIndividualLoad col-12 col-md-6 col-lg-4"></div>
                            <div className="productoIndividualLoad col-12 col-md-6 col-lg-4"></div>
                        </>
                    )}

                    {listaProductos.map((producto) => (
                        <>
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
                        </>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};
export default ProductosPrincipales;
