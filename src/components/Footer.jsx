import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark pt-5 pb-3 mt-auto footer-text">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5 className=" text-warning">À propos</h5>
            <p>
              Développeur front-end passionné, je crée des interfaces modernes
              et réactives, et vise à fournir des expériences utilisateur
              exceptionnelles.
            </p>
          </div>

          <div className="col-md-4 mb-3 d-flex flex-column align-items-center">
            <h5 className="text-warning text-center">Liens utiles</h5>
            <ul className="list-unstyled text-center w-75">
              <div className="d-flex flex-row justify-content-between">
                <li>
                  <Link to="/" className="footer-link">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link to="/projets" className="footer-link">
                    Projets
                  </Link>
                </li>
              </div>
              <div className="d-flex flex-row justify-content-between">
                <li>
                  <Link to="/competences" className="footer-link">
                    Compétences
                  </Link>
                </li>
                <li>
                  <Link to="/cv" className="footer-link">
                    Mon cv
                  </Link>
                </li>
              </div>
              <div className="d-flex  justify-content-center">
                <li>
                  <Link to="/about" className="footer-link">
                    A propos
                  </Link>
                </li>
              </div>
            </ul>
          </div>

          <div className="col-md-4 mb-3">
            <h5 className="text-warning text-end">Contact</h5>
            <p className="mb-1 text-end">
              Email:{" "}
              <a
                href={`mailto:${import.meta.env.VITE_MON_EMAIL}`}
                className="footer-link"
              >
                elobayidoumaima@gmail.com
              </a>
            </p>
            <p className="mb-1 text-end">
              Téléphone:{" "}
              <a href="tel:+212612345678" className="footer-link">
                +212 6 00 00 00 00
              </a>
            </p>
            <p className="text-end">
              Laissez un message:{" "}
              <Link to="/contact" className="footer-link">
                par ici
              </Link>
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-2">
          <a
            href="https://github.com/OumObayid"
            target="_blank"
            className="footer-link me-3 fs-4"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/oumaima-el-obayid-89a70437a"
            target="_blank"
            className="footer-link me-3 fs-4"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/OumaimaElOb"
            target="_blank"
            className="footer-link me-3 fs-4"
          >
            <FaTwitter />
          </a>
          <a
            href="https://web.facebook.com/profile.php?id=61576788474752"
            target="_blank"
            className="footer-link me-3 fs-4"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.youtube.com/@oumaimaelobayid4613"
            target="_blank"
            className="footer-link fs-4"
          >
            <FaYoutube />
          </a>
        </div>

        <hr className="bg-secondary mt-4" />

        <div className="text-center mt-3">
          &copy; {currentYear} Mon Portfolio. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
