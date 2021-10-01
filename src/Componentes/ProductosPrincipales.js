import pandoras_box from "../pandoras_box.jpg";
export const ProductosPrincipales = () => {
    const productos = [
        {
            nombre: "Caja de Pandora",
            precio: "5€",
            categoria: "objetos malditos",
            descripción: "Caja normal",
            id: "1",
        },
        {
            nombre: "Caja de Pandora",
            precio: "5€",
            categoria: "objetos malditos",
            descripción: "Caja normal",
            id: "1",
        },
        {
            nombre: "Caja de sustos",
            precio: "53€",
            categoria: "objetos malditos",
            descripción: "Caja normal pero da sustos ahora",
            id: "2",
        },
        {
            nombre: "8 magico",
            precio: "52€",
            categoria: "curiosidades de suerte",
            descripción: "Bola que te da la respuesta a tus preguntas",
            id: "3",
        },
        {
            nombre: "Caja de Pandora",
            precio: "5€",
            categoria: "objetos malditos",
            descripción: "Caja normal",
            id: "4",
        },
        {
            nombre: "Bastón de satanás",
            precio: "530€",
            categoria: "pertenencias de satanas",
            descripción: "Bastón con todas los poderes en la mano de satanás",
            id: "5",
        },
        {
            nombre: "Caja de sustos",
            precio: "53€",
            categoria: "objetos malditos",
            descripción: "Caja normal pero da sustos ahora",
            id: "2",
        },
        {
            nombre: "8 magico",
            precio: "52€",
            categoria: "curiosidades de suerte",
            descripción: "Bola que te da la respuesta a tus preguntas",
            id: "3",
        },
        {
            nombre: "Caja de Pandora",
            precio: "5€",
            categoria: "objetos malditos",
            descripción: "Caja normal",
            id: "4",
        },
        {
            nombre: "Bastón de satanás",
            precio: "530€",
            categoria: "pertenencias de satanas",
            descripción: "Bastón con todas los poderes en la mano de satanás",
            id: "5",
        },
    ];
    return (
        <>
            <div className="productos row justify-content-between p-0">
                <p>
                    Bienvenido a mi magina web de compras. Esta pagina no es
                    100% seria y solo está hecha para enseñar y mostrar mis
                    habilidades con HTML, CSS, JS, REACT entre otros. He hecho
                    servir React como framework para el Front-End, MongoDB como
                    base de datos y NODE con la libreria Express como Back-End.
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
                        <div
                            className="productoIndividual col-12 col-md-6 col-lg-4 "
                            type="button"
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
                        </div>
                    </>
                ))}
            </div>
        </>
    );
};
export default ProductosPrincipales;
