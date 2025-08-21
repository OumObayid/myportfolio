// src/components/ProjectCard.jsx
export default function ProjectCard({
  title,
  description,
  image,
  techStack,
  linkSite,
  linkGit,
}) {
  return (
    <div
      className="card h-100 shadow-sm border-0 project-card"
      style={{
        transition: "transform 0.3s",
        cursor: linkSite && linkGit ? "pointer" : "default",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      {image && (
        <img
          src={image}
          className="card-img-top "
          alt={title}
          style={{
            border: "3px solid #000000ff",
            objectFit: "cover",
            height: "200px",
            borderTopLeftRadius: "0.5rem",
            borderTopRightRadius: "0.5rem",
          }}
        />
      )}

      <div className="card-body d-flex flex-column">
        <h5 style={{color:"orange"}} className="card-title fw-bold">{title}</h5>
        <p className="card-text text-muted flex-grow-1">{description}</p>

        {techStack && (
          <div className="mb-3">
            {techStack && (
              <div className="mb-3">
                {techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="badge me-1 mb-1"
                    style={{
                      color: "white",
                      background:
                        i === 0
                          ? "linear-gradient(90deg, #2ca74c, #198754)" // gradient success
                          : "linear-gradient(90deg, #6c6969ff, #000000)", // gradient noir accentué
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}

        {linkSite && linkGit && (
          <a
            href={linkSite}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-outline-dark mt-auto w-100 mb-3"
          >
            Voir le site en ligne
          </a>
        )}

        {linkGit && (
          <a
            href={linkGit}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-outline-dark mt-auto w-100"
          >
            Voir le projet sur github
          </a>
        )}
      </div>
    </div>
  );
}
