import Header from "./Header";
import { useTranslation } from "react-i18next";
export const SettingsUser = () => {
    const [t, i18n] = useTranslation("global");
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
                                >
                                    {t("settings.delete-account")}
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
