import Header from "./Header";
export const SettingsUser = () => {
    return (
        <>
            <Header />
            <div className="contenidoCentral">
                <h1 className="mb-5">Ajustes de cuenta:</h1>
                <div className="accordion" id="accordionExample">
                    <div className="card">
                        <div className="card-header" id="headingOne">
                            <h2 className="mb-0">
                                <button
                                    className="btn btn-link btn-block text-center defaultearLink"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                >
                                    Preferencias
                                </button>
                            </h2>
                        </div>

                        <div
                            id="collapseOne"
                            className="collapse show"
                            aria-labelledby="headingOne"
                            data-parent="#accordionExample"
                        >
                            <div className="card-body">
                                <div class="custom-control custom-switch m-3">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="customSwitchModoOscuro"
                                    />
                                    <label
                                        className="custom-control-label"
                                        for="customSwitchModoOscuro"
                                    >
                                        Cambiar a modo Oscuro (En desarrollo)
                                    </label>
                                </div>
                                <div className="custom-control custom-switch m-3">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="customSwitchRastreo"
                                    />
                                    <label
                                        className="custom-control-label"
                                        for="customSwitchRastreo"
                                    >
                                        Guardar Cookies (En desarrollo)
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingTwo">
                            <h2 className="mb-0">
                                <button
                                    className="btn btn-link btn-block text-center collapsed defaultearLink"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo"
                                >
                                    Idioma preferentes
                                </button>
                            </h2>
                        </div>
                        <div
                            id="collapseTwo"
                            className="collapse"
                            aria-labelledby="headingTwo"
                            data-parent="#accordionExample"
                        >
                            <div className="card-body">
                                <h5>Idiomas disponibles: </h5>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingFour">
                            <h2 className="mb-0">
                                <button
                                    className="btn btn-link btn-block text-center collapsed defaultearLink"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseFour"
                                    aria-expanded="false"
                                    aria-controls="collapseFour"
                                >
                                    FAQ
                                </button>
                            </h2>
                        </div>
                        <div
                            id="collapseFour"
                            className="collapse"
                            aria-labelledby="headingFour"
                            data-parent="#accordionExample"
                        >
                            <div className="card-body">
                                <div className="mb-3">
                                    <h3 className="mt-3">Quienes somos?</h3>
                                    <div className="mb-4">
                                        Soy un programador que voy haciendo de
                                        las mias
                                    </div>
                                    <h3>
                                        Qual es la finalidad de esta pagina?
                                    </h3>
                                    <div className="mb-4">
                                        Aprender a programar por mi cuenta
                                    </div>
                                    <h3>Estás abierto a trabajar?</h3>
                                    <div className="mb-4">
                                        Claro por supuesto! Tengo muchas ganas
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingThree">
                            <h2 className="mb-0">
                                <button
                                    className="btn btn-link btn-block text-center collapsed defaultearLink"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                >
                                    Eliminar Cuenta
                                </button>
                            </h2>
                        </div>
                        <div
                            id="collapseThree"
                            className="collapse"
                            aria-labelledby="headingThree"
                            data-parent="#accordionExample"
                        >
                            <div className="card-body">
                                <h5 className="mt-3">Estás seguro?</h5>
                                <div className="mb-3">
                                    Una vez eliminada tu cuenta no podrás ver
                                    tus registros de compra ni solicitar
                                    informacion respecto a tus productos
                                    comprados
                                </div>

                                <button
                                    type="button"
                                    className="btn btn-danger"
                                >
                                    Eliminar cuenta
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default SettingsUser;
