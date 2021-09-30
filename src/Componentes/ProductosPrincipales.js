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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi soluta quisquam reprehenderit suscipit dolorum libero
                    incidunt nihil ad quod atque? Vel, et alias! Non rem et
                    asperiores libero soluta quaerat. Possimus, repudiandae
                    incidunt totam nobis dolorum harum dolore neque perspiciatis
                    tenetur quam, nulla voluptate vel sequi tempore. Unde
                    reprehendio sit quae labore perspiciatis minima! Reiciendis
                    delectus impedit odit officia consequatur, quod, harum eos
                    reprehenderit ut iste qui libero quasi aut aspernatur dolore
                    quia nesciunt maiores! Commodi excepturi recusandae placeat
                    obcaecati nostrum. Enim, provident tempore? Culpa cupiditate
                    dolorem delectus quam eos assumenda voluptatum tempora
                    incidunt numquam eligendi libero facere, ipsam dolores
                    itaque quibusdam quidem expedita reiciendis tenetur magni
                    vero sequi laboriosam. Vel illum laudantium consequuntur?
                    Dolore repellat, molestiae nemo saepe maiores commodi et
                    aliquid, provident, sed minima voluptatem sit veritatis
                    libero quidem culpa officia tempora illo distinctio?
                    Accusamus et harum aperiam quis beatae? Accusantium, magni.
                    Perspiciatis porro eum molestiae et blanditiis, ullam sequi
                    voluptates officiis veritatis id magnam, eius ratione
                    aliquid a quod quam vel itaque ab dolor reiciendis animi
                    facere alias? Ut, labore quisquam. Illum perferendis, soluta
                    dignissimos quibusdam qui odit maiores repellat quam
                    placeat, aut vitae atque laborum tempora corporis optio.
                    Maxime aperiam praesentium, consectetur ex sapiente at dicta
                    vel ea facere dignissimos.
                </p>
                {productos.map((producto) => (
                    <>
                        <div
                            className="productoIndividual col-6 col-lg-4 "
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
