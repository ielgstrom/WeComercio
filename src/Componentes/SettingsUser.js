import Header from "./Header";
import jwt_decode from "jwt-decode";
import { useTranslation } from "react-i18next";
import { useState, useContext } from "react";
import { ProductosContext } from "../ProductosContext";
import { useHistory } from "react-router-dom";
export const SettingsUser = () => {
    const [t] = useTranslation("global");
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
            setValuePass("");
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
                                <div className="custom-control custom-switch m-3">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="customSwitchModoOscuro"
                                    />
                                    <label
                                        className="custom-control-label"
                                        htmlFor="customSwitchModoOscuro"
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
                                        htmlFor="customSwitchRastreo"
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
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="inlineRadioOptions"
                                        id="inlineRadio1"
                                        value="option1"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="inlineRadio1"
                                    >
                                        ES
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="inlineRadioOptions"
                                        id="inlineRadio2"
                                        value="option2"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="inlineRadio2"
                                    >
                                        CAT
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="inlineRadioOptions"
                                        id="inlineRadio3"
                                        value="option3"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="inlineRadio3"
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
                        className="modal fade"
                        id="exampleModal"
                        tabIndex="-1"
                        role="dialog"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5
                                        className="modal-title"
                                        id="exampleModalLabel"
                                    >
                                        Confirmación
                                    </h5>
                                    <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                    >
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
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
                                    <div className="modal-footer">
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            data-dismiss="modal"
                                        >
                                            Cerrar
                                        </button>
                                        <button
                                            type="submit"
                                            className="btn btn-danger"
                                            onClick={delUser}
                                            data-dismiss="modal"
                                        >
                                            {t("settings.delete-account")}
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
