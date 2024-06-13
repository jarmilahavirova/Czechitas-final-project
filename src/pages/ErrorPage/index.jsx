import "./style.css";
import lostDisc from "../../../assets/lost_disc.png";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <>
      <main className="error">
        <h2 className="error__title">404</h2>
        <p className="error__message">
          Tady jsi ztracený jak disk v běchovických křovinách.
        </p>
        <Link className="error__button" to="/">
           PŘEJÍT NA HLAVNÍ STRÁNKU
        </Link>
        <img
          src={lostDisc}
          alt="Ilustrační obrázek ztraceného disku"
          className="error__picture"
        />
      </main>
    </>
  );
};
