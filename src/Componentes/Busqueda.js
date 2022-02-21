import pandoras_box from "../pandoras_box.jpg";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
export const Busqueda = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const busquedaQuery = query.get("item");

    const [elementosBusqueda, setElementosBusqueda] = useState({
        productoDeBusquedaEncontrado: ["Control"],
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
    }, [busquedaQuery, elementosBusqueda]);
    return (
        <>
            <Header />

            <div className="contenidoCentral">
                {elementosBusqueda.productoDeBusquedaEncontrado[0] !==
                    "Control" && (
                    <>
                        <div>
                            <h2>Resultados de: {busquedaQuery}</h2>
                            <div
                                class="btn-toolbar"
                                role="toolbar"
                                id="lettersToolbar"
                            >
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
                                    )
                                )}
                            </div>
                        </div>
                        <div>
                            <h2>Resultado por categoria </h2>
                            <div className="row"></div>
                        </div>
                    </>
                )}

                {elementosBusqueda.productoDeBusquedaEncontrado[0] ===
                    "Control" && (
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
