import Header from "./Header";
import jwt_decode from "jwt-decode";
import { useTranslation } from "react-i18next";
import { useState, useContext } from "react";
import { ProductosContext } from "../ProductosContext";
import { useHistory, Link } from "react-router-dom";
export const SettingsUser = () => {
    const [t, i18n] = useTranslation("global");
    const { setEstaLogueado } = useContext(ProductosContext);
    const [valuePass, setValuePass] = useState("");
    const token = localStorage.getItem("token");
    const { resultadoUsuarioSeguro } = jwt_decode(token);
    let history = useHistory();
    const handleLastPass = (e) => {
        setValuePass(e.target.value);
    };
    const desloguearse = () => {
        setEstaLogueado(false);
        history.push("/");
        localStorage.removeItem("token");
    };
    const delUser = async (e) => {
        e.preventDefault();
        const respuesta = await fetch(
            `https://back-wecomerce.herokuapp.com/usuario/delete`,
            {
                method: "DELETE",
                body: JSON.stringify({
                    Email: resultadoUsuarioSeguro.Email,
                    Contraseña: valuePass,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        if (respuesta.ok) {
            desloguearse();
        } else {
            alert("Ha ocurrido un error, vuelve a intentar");
        }
    };
    return (
        <>
            <Header />
            <div className="contenidoCentral">
                <h1 className="mb-5">{t("settings.title")}</h1>
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
                                    {t("settings.preferences")}
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
                                        {t("settings.dark-mode")}
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
                                        {t("settings.save-cookies")}
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
                                    {t("settings.prefered-Lang")}
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
                                <h5>{t("settings.avaliable-Lang")} </h5>
                                <div class="form-check form-check-inline">
                                    <input
                                        class="form-check-input"
                                        type="radio"
                                        name="inlineRadioOptions"
                                        id="inlineRadio1"
                                        value="option1"
                                    />
                                    <label
                                        class="form-check-label"
                                        for="inlineRadio1"
                                    >
                                        ES
                                    </label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input
                                        class="form-check-input"
                                        type="radio"
                                        name="inlineRadioOptions"
                                        id="inlineRadio2"
                                        value="option2"
                                    />
                                    <label
                                        class="form-check-label"
                                        for="inlineRadio2"
                                    >
                                        CAT
                                    </label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input
                                        class="form-check-input"
                                        type="radio"
                                        name="inlineRadioOptions"
                                        id="inlineRadio3"
                                        value="option3"
                                    />
                                    <label
                                        class="form-check-label"
                                        for="inlineRadio3"
                                    >
                                        ENG
                                    </label>
                                </div>
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
                                    <h3 className="mt-3">
                                        {t("settings.Who-are-we")}
                                    </h3>
                                    <div className="mb-4">
                                        {t("settings.des-who-are-we")}
                                    </div>
                                    <h3>{t("settings.objective")}</h3>
                                    <div className="mb-4">
                                        {t("settings.des-objective")}
                                    </div>
                                    <h3>{t("settings.work")}</h3>
                                    <div className="mb-4">
                                        {t("settings.des-work")}
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
                                    {t("settings.delete-account")}
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
                                <h5 className="mt-3">
                                    {t("settings.del-question")}
                                </h5>
                                <div className="mb-3">
                                    {t("settings.del-are-you-sure")}
                                </div>

                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                >
                                    {t("settings.delete-account")}
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Modal */}
                    <div
                        class="modal fade"
                        id="exampleModal"
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                    >
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5
                                        class="modal-title"
                                        id="exampleModalLabel"
                                    >
                                        Confirmación
                                    </h5>
                                    <button
                                        type="button"
                                        class="close"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                    >
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    Escribe tu contraseña para confirmar el
                                    proceso
                                </div>
                                <form className="form-group" onSubmit={delUser}>
                                    <input
                                        type="password"
                                        className="form-control inputDeletePass"
                                        placeholder="Contraseña"
                                        value={valuePass}
                                        onChange={handleLastPass}
                                    />
                                    <div class="modal-footer">
                                        <button
                                            type="button"
                                            class="btn btn-secondary"
                                            data-dismiss="modal"
                                        >
                                            Cerrar
                                        </button>
                                        <button
                                            type="submit"
                                            class="btn btn-danger"
                                            onClick={delUser}
                                            data-dismiss="modal"
                                        >
                                            Eliminar cuenta
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default SettingsUser;
