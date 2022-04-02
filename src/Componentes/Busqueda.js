import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
export const Busqueda = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const busquedaQuery = query.get("item");

    const [elementosBusqueda, setElementosBusqueda] = useState({
        productoDeBusquedaEncontrado: [],
        categoriaDeBusquedaEncontrado: [],
    });
    useEffect(() => {
        const fetchData = async () => {
            const respuesta = await fetch(
                `https://back-wecomerce.herokuapp.com/producto/busqueda/${busquedaQuery}`
            );
            const querysFiltrados = await respuesta.json();
            setElementosBusqueda(querysFiltrados);
        };
        fetchData();
    }, [busquedaQuery]);
    return (
        <>
            <Header />

            <div className="contenidoCentral">
                <div>
                    <h2>Resultados de: {busquedaQuery}</h2>
                    <div class="btn-toolbar" role="toolbar" id="lettersToolbar">
                        <h4>Filtrar Por:</h4>
                        <div class="btn-group mr-2">
                            <button class="btn btn-default" id="D">
                                Precio
                            </button>
                            <button class="btn btn-default" id="M">
                                Valoración
                            </button>
                            <button class="btn btn-default" id="S">
                                Cantidad
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        {elementosBusqueda.productoDeBusquedaEncontrado[0] ===
                            undefined && (
                            <>
                                <div className="productoIndividualLoad col-12 col-md-6 col-lg-4"></div>
                                <div className="productoIndividualLoad col-12 col-md-6 col-lg-4"></div>
                                <div className="productoIndividualLoad col-12 col-md-6 col-lg-4"></div>
                            </>
                        )}
                        {elementosBusqueda.productoDeBusquedaEncontrado.map(
                            (productoBuscado) => (
                                <>
                                    <Link
                                        className="productoIndividual col-12 col-md-6 col-lg-4 "
                                        type="button"
                                        to={`/producto/${productoBuscado._id}`}
                                        key={productoBuscado._id}
                                    >
                                        <img
                                            src={productoBuscado.urlImage}
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
                            )
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Busqueda;
