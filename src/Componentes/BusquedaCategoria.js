import Footer from "./Footer";
import Header from "./Header";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
export const BusquedaCategoria = () => {
    let { idCateg } = useParams();
    const [prodCategoria, setProdCategoria] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const respuesta = await fetch(
                `https://back-wecomerce.herokuapp.com/producto/busqueda/categoria/${idCateg}`
            );
            const productos = await respuesta.json();
            setProdCategoria(productos);
        };
        fetchData();
    }, [idCateg]);
    return (
        <>
            <Header />
            <div className="contenidoCentral">
                <h2>Todos los productos de {idCateg.replaceAll("-", " ")}</h2>
                <div className="row">
                    {prodCategoria.map((productoBuscado) => (
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
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};
export default BusquedaCategoria;
