// src/pages/Projects.jsx
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import projetsList from "../data/projetsList";  
export default function Projects() {
 

  // Pagination
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(projetsList.length / itemsPerPage);
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentProjects = projetsList.slice(indexOfFirst, indexOfLast);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section className="container my-3">
      {/* Titre */}
      <div className="text-center mb-5">
        <h2 className="fw-bold display-5">
          Projets & Réalisations ({projetsList.length})
        </h2>
        <p className="text-muted fs-6">Découvrez quelques-uns de mes projets réalisés</p>
      </div>

      {/* Liste paginée */}
      <div className="row g-4 d-flex justify-content-center">
        {currentProjects.map((project, i) => (
          <div key={i} className="col-md-6 col-lg-4">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-center mt-4">
        <nav>
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage - 1)}
              >
                ← Précédent
              </button>
            </li>

            {[...Array(totalPages)].map((_, i) => (
              <li key={i} className={`page-item ${currentPage === i + 1 ? "active" : ""}`}>
                <button className="page-link" onClick={() => handlePageChange(i + 1)}>
                  {i + 1}
                </button>
              </li>
            ))}

            <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Suivant →
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
