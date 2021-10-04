import { Link } from "react-router-dom";
export const Pag404 = () => {
    return (
        <>
            <div className="error404">
                Error 404: la pagina que buscas no existe
            </div>
            <small className="error404">
                {" "}
                Eso es que has estado tocando cosas que no debias, no me la lies
                demasiado que no quiero que encuentres los puntos debiles
            </small>
            <small className="error404">
                <Link to="/">Haz Click aquí para voler al inicio </Link>
            </small>
        </>
    );
};
export default Pag404;
