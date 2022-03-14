import { GrMail, GrGithub } from "react-icons/gr";
import { FaPhoneAlt, FaLinkedin } from "react-icons/fa";
export const Footer = () => {
    return (
        <>
            <footer className="container-fluid ">
                <ul className="row listaMainFooter">
                    <li className="col-12 col-md-4">
                        {" "}
                        Quien somos
                        <ul className="footerSomos">Fundación</ul>
                        <ul className="footerSomos">Ideales</ul>
                        <ul className="footerSomos">Dirección</ul>
                    </li>
                    <li className="col-12 col-md-4">
                        Coleciones
                        <ul className="footerSomos">Verano</ul>
                        <ul className="footerSomos">Invierno</ul>
                        <ul className="footerSomos">Vacio</ul>
                    </li>
                    <li className="col-12 col-md-4">
                        Contacte
                        <ul className="contacteFooter row">
                            <li className="col-3 col-md-12 px-3">
                                <a
                                    href="https://github.com/ielgstrom"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <GrGithub className="iconoFooter" />
                                </a>
                                <small className="footerAdress">
                                    @ielgstrom
                                </small>
                            </li>
                            <li className="col-3 col-md-12 px-3">
                                <a
                                    href="https://www.linkedin.com/in/ignasi-elgström"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FaLinkedin className="iconoFooter" />
                                </a>
                                <small className="footerAdress">
                                    linkedin.com/in/ignasi-elgström
                                </small>
                            </li>
                            <li className="col-3 col-md-12 px-3">
                                <a
                                    href="mailto: i.elgstrom@gmail.com"
                                    rel="noreferrer"
                                >
                                    <GrMail className="iconoFooter" />
                                </a>
                                <small className="footerAdress">
                                    i.elgstrom@gmail.com
                                </small>
                            </li>
                            <li className="col-3 col-md-12 px-3">
                                <a href="tel:671408611" rel="noreferrer">
                                    <FaPhoneAlt className="iconoFooter" />
                                </a>
                                <small className="footerAdress">
                                    (+34) 671408611
                                </small>
                            </li>
                        </ul>
                    </li>
                </ul>
            </footer>
        </>
    );
};
export default Footer;
