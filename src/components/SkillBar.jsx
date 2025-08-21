// src/components/SkillBar.jsx
export default function SkillBar({ name, percent, colorStart, colorEnd }) {
  return (
    <div className="mb-3">
      {/* Texte + pourcentage */}
      <div className="d-flex justify-content-between mb-1">
        <span>{name}</span>
        <span className="text-muted">{percent}%</span>
      </div>

      {/* Barre avec dégradé */}
      <div className="progress" style={{ height: "8px", backgroundColor: "#e5e7eb" }}>
        <div
          className="progress-bar"
          role="progressbar"
          style={{
            width: `${percent}%`,
            background: `linear-gradient(to right, ${colorStart}, ${colorEnd})`,
            transition: "width 0.7s ease-in-out"
          }}
          aria-valuenow={percent}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  )
}
