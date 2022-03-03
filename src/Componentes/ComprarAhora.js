import Footer from "./Footer";
import Header from "./Header";
import { useContext, useState, useEffect } from "react";
import { Link, useHistory, NavLink, useLocation } from "react-router-dom";
import { ProductosContext } from "../ProductosContext";
import pan from "../pandoras_box.jpg";
import { MdAndroid } from "react-icons/md";
import { BiLinkExternal } from "react-icons/bi";
export const ComprarAhora = () => {
    let history = useHistory();
    const { estaLogueado } = useContext(ProductosContext);
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const idprod = query.get("item");
    const [ProductoIndividualYSimilares, setProductoIndividualYSimilares] =
        useState({ productoEncontrado: {}, productosSugeridos: [] });
    const [deliver, setDeliver] = useState({ home: false, deliver: false });
    const handleHomeChange = () => {
        setDeliver({ home: true, deliver: false });
    };
    const handleDeliverChange = () => {
        setDeliver({ home: false, deliver: true });
    };
    const [places, setPlaces] = useState([
        {
            location: "Madrid",
            stock: "4",
            link: "https://goo.gl/maps/Ha1351SDA3QhPZhc6",
        },
        {
            location: "Barcelona",
            stock: "27",
            link: "https://goo.gl/maps/q2ffucWt3rwHCUpQ6",
        },
        {
            location: "Sevilla",
            stock: "13",
            link: "https://goo.gl/maps/FqRcvq3bZ8zB8bJ37",
        },
    ]);
    const [precioFinal, setPrecioFinal] = useState(0);
    useEffect(() => {
        const fetchData = async () => {
            const respuesta = await fetch(
                `https://back-wecomerce.herokuapp.com/producto/${idprod}`
            );
            const productos = await respuesta.json();
            setProductoIndividualYSimilares(productos);

            if ((await estaLogueado) === false) {
                alert("Haz inicio de sesión para comprar");
                history.push("/newuser");
            }
            return;
        };
        fetchData();
    }, [estaLogueado, history, idprod]);
    // useEffect(() => {
    //     const checking = async () => {
    //         if ((await estaLogueado) === false) {
    //             alert("Haz inicio de sesión para comprar");
    //             history.push("/newuser");
    //         }
    //         return;
    //     };
    //     checking();
    // }, [estaLogueado, history]);
    useEffect(() => {
        const precioFinal = async () => {
            const kprice = await ProductoIndividualYSimilares.productoEncontrado
                .Precio;
            if (deliver.deliver) {
                setPrecioFinal(parseInt(kprice + 19));
            } else {
                setPrecioFinal(parseInt(kprice) + 4);
            }
            return;
        };
        precioFinal();
    }, [
        ProductoIndividualYSimilares.productoEncontrado.Precio,
        deliver.deliver,
        deliver.home,
    ]);
    return (
        <>
            <Header />
            <div className="contenidoCentral container-fluid">
                <div
                    className="btn-toolbar mx-5 rounded"
                    role="toolbar"
                    aria-label="Toolbar with button groups"
                >
                    <div
                        className="btn-group mr-2 w-100 "
                        role="group"
                        aria-label="First group"
                    >
                        <button
                            type="button"
                            className="btn btn-secondary"
                            disabled
                        >
                            1
                        </button>
                        <button type="button" className="btn btn-secondary">
                            2
                        </button>
                    </div>
                </div>
                <div className="row mt-3 mx-5 justify-content-between">
                    <div className="col-12 col-lg-7 border contenidoIzquieroCompra p-3 mb-6">
                        <h3>Metodos de pago:</h3>
                        <div class="my-2 form-check">
                            <input
                                className="my-2 form-check-input position-static"
                                name="inlineRadioOptions"
                                type="radio"
                                id="blankRadio0"
                                value="option1"
                                required
                            />
                            <label
                                className="form-check-label ml-2"
                                HtmlFor="blankRadio0"
                            >
                                Tajeta de Credito
                            </label>
                        </div>
                        <div className="my-2 form-check">
                            <input
                                class="my-2 form-check-input position-static"
                                name="inlineRadioOptions"
                                type="radio"
                                id="blankRadio1"
                                value="option2"
                                aria-label="..."
                            />
                            <label
                                className="form-check-label ml-2"
                                HtmlFor="blankRadio1"
                            >
                                Pay-Pal
                            </label>
                        </div>
                        <div className="my-2 form-check">
                            <input
                                className="my-2 form-check-input position-static"
                                name="inlineRadioOptions"
                                type="radio"
                                id="blankRadio2"
                                value="option3"
                                aria-label="..."
                            />
                            <label
                                className="form-check-label ml-2"
                                HtmlFor="blankRadio2"
                            >
                                Descuentos
                            </label>
                        </div>
                        <h3>Recogida de producto</h3>
                        <div class="my-2 form-check">
                            <input
                                class="my-2 form-check-input position-static"
                                name="recogida"
                                type="radio"
                                id="recogida"
                                value={deliver.home}
                                aria-label="..."
                                onChange={handleHomeChange}
                            />
                            <label
                                className="form-check-label ml-2"
                                HtmlFor="recogida"
                            >
                                Recojida en tienda
                            </label>
                        </div>
                        <div className="my-2 form-check">
                            <input
                                className="my-2 form-check-input position-static"
                                name="recogida"
                                type="radio"
                                id="deliver"
                                value={deliver.deliver}
                                aria-label="..."
                                onChange={handleDeliverChange}
                            />
                            <label
                                className="form-check-label ml-2"
                                HtmlFor="deliver"
                            >
                                Deliver a tu casa
                            </label>
                        </div>
                        {deliver.home && (
                            <>
                                <h4 className="mt-3 ml-2">
                                    Centros disponibles:
                                </h4>
                                {places.map((site) => (
                                    <div className="row ml-3 mb-1 mt-1 itemLocation">
                                        <div className="col-9">
                                            <div className="font-weight-bold row">
                                                {site.location}
                                            </div>
                                            <div className="row">
                                                Stock: {site.stock}
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <a
                                                href={site.link}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <BiLinkExternal className="mt-3 w-5 h-5" />
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                        {deliver.deliver && (
                            <>
                                <h4 className="mt-3 ml-2">
                                    Dirección de entrega
                                </h4>
                                <form>
                                    <div className="row">
                                        <div className="form-group col-5">
                                            <label htmlFor="ciudad">
                                                Ciudad
                                            </label>
                                            <input
                                                type="text"
                                                className=" form-control"
                                                placeholder="Ciudad"
                                                id="ciudad"
                                            />
                                            <label htmlFor="calle">Calle</label>
                                            <input
                                                type="text"
                                                className=" form-control"
                                                placeholder="Calle"
                                                id="calle"
                                            />
                                        </div>
                                        <div className="form-group col-2">
                                            <label htmlFor="cp">
                                                Código Postal
                                            </label>
                                            <input
                                                type="text"
                                                className=" form-control"
                                                placeholder="Codigo Postal"
                                                id="cp"
                                            />
                                        </div>
                                        <div className="form-check col-12">
                                            <input
                                                type="checkbox"
                                                class="form-check-input"
                                                id="recordar"
                                            />
                                            <label
                                                class="form-check-label"
                                                htmlFor="recordar"
                                            >
                                                Recordar esta dirección
                                            </label>
                                        </div>
                                    </div>
                                </form>
                            </>
                        )}
                    </div>
                    <div className="mt-3 col-12 col-lg-3 paymentPanel border border-secondary bg-secondary text-white rounded">
                        <h3>Descripción de la compra</h3>
                        <div className="row justify-content-between my-2">
                            <div className="col-8">
                                {
                                    ProductoIndividualYSimilares
                                        .productoEncontrado.Nombre
                                }
                            </div>
                            <div className="col-4 text-right">
                                {`${ProductoIndividualYSimilares.productoEncontrado.Precio} €`}
                            </div>
                        </div>
                        <div className="row justify-content-between my-2">
                            <div className="col-8">Gestion de gastos</div>
                            <div className="col-4 text-right">4 €</div>
                        </div>

                        {!deliver.deliver ? (
                            <del>
                                <div className="row my-2">
                                    <div className="col-8">Gastos de envio</div>
                                    <div className="col-4 text-right">15 €</div>
                                </div>
                            </del>
                        ) : (
                            <div className="row my-2">
                                <div className="col-8">Gastos de envio</div>
                                <div className="col-4 text-right">15 €</div>
                            </div>
                        )}
                        <h4>Precio final: {precioFinal} €</h4>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};
export default ComprarAhora;
