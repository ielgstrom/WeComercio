import pandoras_box from "../pandoras_box.jpg";
import { ProductosContext } from "../ProductosContext";
import { useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
export const Busqueda = () => {
    const { listaProductos } = useContext(ProductosContext);
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const busquedaQuery = query.get("item");

    const productosFiltrados = listaProductos.filter((element) =>
        element.Nombre.includes(busquedaQuery)
    );
    console.log(productosFiltrados.length === 0);
    return (
        <>
            <Header />

            <div className="contenidoCentral">
                {productosFiltrados.length !== 0 && (
                    <div>
                        <h2>Resultados de: {busquedaQuery}</h2>
                        {productosFiltrados.map((productoBuscado) => (
                            <>
                                <Link
                                    className="productoIndividual col-12 col-md-6 col-lg-4 "
                                    type="button"
                                    to={`/producto/${productoBuscado._id}`}
                                >
                                    <img
                                        src={pandoras_box}
                                        className="imagenMostrador"
                                        alt="imagen"
                                    />
                                    <div className="flex-container space-between">
                                        <small className="flex-item">
                                            {productoBuscado.Nombre}
                                        </small>
                                        <small className="flex-item">
                                            {`${productoBuscado.Precio}€`}
                                        </small>
                                    </div>
                                </Link>
                            </>
                        ))}
                    </div>
                )}
                {productosFiltrados.length === 0 && (
                    <h2 className="noBusqueda">
                        Lo sentimos, no hay nada que se llame: {busquedaQuery}
                    </h2>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Busqueda;
