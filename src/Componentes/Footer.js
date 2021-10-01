import { GrMail, GrGithub } from "react-icons/gr";
import { FaPhoneAlt, FaLinkedin } from "react-icons/fa";
export const Footer = () => {
    return (
        <>
            <ul className="row listaMainFooter">
                <li className="col-4"> Quien somos</li>
                <li className="col-4">Coleciones</li>
                <li className="col-4">
                    Contacte
                    <ul className="contacteFooter">
                        <li>
                            <a
                                href="https://github.com/ielgstrom"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <GrGithub className="iconoFooter" />
                            </a>
                            @ielgstrom
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/ignasi-elgström"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaLinkedin className="iconoFooter" />
                            </a>
                            linkedin.com/in/ignasi-elgström
                        </li>
                        <li>
                            <a
                                href="mailto: i.elgstrom@gmail.com"
                                rel="noreferrer"
                            >
                                <GrMail className="iconoFooter" />
                            </a>
                            i.elgstrom@gmail.com
                        </li>
                        <li>
                            <a href="tel:671408611" rel="noreferrer">
                                <FaPhoneAlt className="iconoFooter" />
                            </a>
                            (+34) 671408611
                        </li>
                    </ul>
                </li>
            </ul>
        </>
    );
};
export default Footer;
