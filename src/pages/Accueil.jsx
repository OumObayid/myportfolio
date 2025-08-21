import React from "react";
import "./Accueil.css";
import { Link } from "react-router-dom";
const Accueil = () => {
  return (
    <div>
      <section className="profile  parallax-wrapper">
        <div className=" content-profile parallax">
          <div className=" content-profile-center mt-3">
            <div className="profile-img mt-5">
              <a href="#">
                <img src="images/photo.png" alt="Image" />
              </a>
            </div>
            <span className="name">Oumaima El Obayid</span>
            <div className="w-100  d-flex justify-content-center align-items-center">
              <h3 className="category text-white ">
                Développement web, interfaces interactives et optimisation
              </h3>
            </div>

            <div className="container twoButtons">
              <div>
                <Link
                  className="balle"
                  to="/contact"
                  style={{ textDecoration: "none", fontSize: "1rem" }}
                >
                  HIRE <br /> ME{" "}
                </Link>
                <img src="/images/bubbleBtn.png" alt="contact" />
              </div>
              <div>
                <Link
                  className="balle"
                  to="/cv"
                  style={{ textDecoration: "none", fontSize: "1rem" }}
                >
                  MY <br /> CV
                </Link>
                <img src="/images/bubbleBtn.png" alt="cv" />
              </div>
            </div>
          </div>
          <div className="bubble-ocean">
            <div className="bubble bubble--1"></div>
            <div className="bubble bubble--2"></div>
            <div className="bubble bubble--3"></div>
            <div className="bubble bubble--4"></div>
            <div className="bubble bubble--5"></div>
            <div className="bubble bubble--6"></div>
            <div className="bubble bubble--7"></div>
            <div className="bubble bubble--8"></div>
            <div className="bubble bubble--9"></div>
            <div className="bubble bubble--10"></div>
            <div className="bubble bubble--11"></div>
            <div className="bubble bubble--12"></div>
            <div className="bubble bubble--13"></div>
            <div className="bubble bubble--14"></div>
            <div className="bubble bubble--15"></div>
            <div className="bubble bubble--16"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accueil;
