// src/pages/Projects.jsx
import ProjectCard from "../components/ProjectCard";

export default function Projets() {
  const projects = [
     {
      title: "Application LearnWeb (créée en 2025)",
      description: `LearnWeb est un site de démonstration de compétences en développement web.
      Il présente des cours et tutoriels sur Angular, React, Laravel, Node.js et WordPress.
      Le site inclut des exemples d’utilisation des API et de manipulation de données JSON.
      Il montre également des méthodes de déploiement de projets web.
      Chaque section illustre les bonnes pratiques et l’organisation du code.`,
      image: "/images/learnweb.png",
      techStack: [
        "Angular",
        "firebase",
        "Node.js",
        "Json",
        "php",
        "css3",
        "Bootstrap",
      ],
      linkSite: "https://oumportfolio.com",
      linkGit: "https://github.com/OumObayid/learnweb",
    },
    {
      title: "Application LearnWeb (créée en 2025)",
      description: `LearnWeb est un site de démonstration de compétences en développement web.
      Il présente des cours et tutoriels sur Angular, React, Laravel, Node.js et WordPress.
      Le site inclut des exemples d’utilisation des API et de manipulation de données JSON.
      Il montre également des méthodes de déploiement de projets web.
      Chaque section illustre les bonnes pratiques et l’organisation du code.`,
      image: "/images/learnweb.png",
      techStack: [
        "Angular",
        "firebase",
        "Node.js",
        "Json",
        "php",
        "css3",
        "Bootstrap",
      ],
      linkSite: "https://learnweb.oumportfolio.com",
      linkGit: "https://github.com/OumObayid/learnweb",
    },
    {
      title: "Application eSHop (créée en 2022)",
      description: `eShop est une plateforme e-commerce moderne permettant aux utilisateurs de parcourir et d’acheter des produits en ligne facilement. Développée avec React pour des performances optimales et un rendu rapide, elle propose des filtres avancés et une recherche efficace. Grâce à l’intégration de Firebase, la plateforme bénéficie de mises à jour en temps réel, d’une authentification sécurisée et de services backend évolutifs.`,
      image: "/images/eshop.png",
      techStack: ["React", "firebase", "Node.js", "php", "css3", "Bootstrap"],
      linkSite: "https://eshop.oumportfolio.com",
      linkGit: "https://github.com/OumObayid/eshop",
    },
    {
      title: "Learning (créée en 2022)",
      description:
        "Un site web de formation en ligne développé avec Laravel, offrant aux utilisateurs la possibilité de découvrir et d’acheter des cours dispensés par des formateurs qualifiés. La plateforme propose une interface intuitive et responsive, un accès facile aux informations sur les cours et les formateurs, ainsi qu’un processus d’achat sécurisé.",
      image: "/images/learning.png",
      techStack: [
        "laravel",
        "Html5",
        "css3",
        "Bootstrap",
        "Javascript",
        "php",
        "mysql",        
      ],
      linkSite: "https://learning.oumportfolio.com",
      linkGit: "https://github.com/OumObayid/learning-academy",
    },
    {
      title: "Spaceteck (créée en 2021)",
      description:
        "Un site web interactif développé avec HTML5, CSS3, JavaScript, jQuery et Bootstrap, conçu pour présenter clairement les services et l’expertise d’une agence de communication digitale. Il offre une navigation fluide entre les sections, un design responsive optimisé pour les ordinateurs, tablettes et mobiles, et met l’accent sur des informations organisées, accessibles et faciles à utiliser.",
      image: "/images/spaceteck.png",
      techStack: ["Html5", "css3", "Bootstrap", "Javascript", "Jquery"],
      linkSite: "https://spaceteck.oumportfolio.com",
      linkGit: "https://github.com/OumObayid/spaceteck",
    },
    {
      title: "MemoryGame (créée en 2021)",
      description:
        "Un site web interactif développé en HTML, CSS3 et Jquery, un jeu simple et addictif conçu pour stimuler la mémoire et la concentration. L’objectif est de retrouver toutes les paires de cartes identiques le plus rapidement possible.. Il propose une interface conviviale, un design responsive adapté aux mobiles et tablettes, et met l’accent sur une expérience utilisateur fluide et engageante.",
      image: "/images/memorygame.png",
      techStack: ["Html5", "Javascript", "css3"],
      linkSite: "https://memorygame.oumportfolio.com",
      linkGit: "https://github.com/OumObayid/memorygame",
    },
    {
      title: "Portfolio Personnel (créée en 2021)",
      description:
        "Un site web interactif développé en HTML, CSS3 et JavaScript, conçu pour présenter de manière claire et structurée les projets et réalisations. Il offre une navigation fluide entre les sections, un design responsive adapté aux mobiles et tablettes, et met l’accent sur l’organisation et l’accessibilité des informations pour les visiteurs.",
      image: "/images/portfolio.png",
      techStack: ["Html5", "Javascript", "css3"],
      linkSite: "https://oumobayid.github.io",
      linkGit: "https://github.com/OumObayid/OumObayid.github.io",
    },
  ];

  return (
    <section className="container my-3">
      {/* Titre de la page */}
      <div className="text-center mb-5">
        <h2 className="fw-bold display-5">
          Projets & Réalisations {`(${projects.length})`}
        </h2>
        <p className="text-muted fs-6">
          Découvrez quelques-uns de mes projets réalisés
        </p>
      </div>

      <div className="row g-4 d-flex justify-content-center">
        {projects.map((project, i) => (
          <div key={i} className="col-md-6 col-lg-4">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}
