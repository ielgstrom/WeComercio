import Footer from "./Footer";
import Header from "./Header";
import pandoras_box from "../pandoras_box.jpg";
import { Link, useParams } from "react-router-dom";

export const BusquedaCategoria = ({ listaProductos }) => {
    let { idCateg } = useParams();
    const idCategFiltrado = idCateg.replaceAll("-", " ");

    console.log(typeof idCateg);
    const productosSeleccionados = listaProductos.filter(
        (element) => element.Categoria === idCategFiltrado
    );
    return (
        <>
            <Header />
            <div className="contenidoCentral">
                <h2>Todos los productos de {idCategFiltrado}</h2>
                {productosSeleccionados.map((productoBuscado) => (
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
                                    {productoBuscado.Precio}
                                </small>
                            </div>
                        </Link>
                    </>
                ))}
            </div>
            <Footer />
        </>
    );
};
export default BusquedaCategoria;
