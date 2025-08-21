// src/components/SkillGroup.jsx
import SkillBar from "./SkillBar";

export default function SkillGroup({ icon, title, skills, colorStart, colorEnd }) {
  return (
    <div className="bg-[#21262D] rounded-lg p-6 transform hover:scale-[1.02] transition-all">
      {/* Titre */}
      <div className="d-flex align-items-center gap-3 mb-4">
        <span className="fs-2">{icon}</span>
        <h5 className="h6 fw-bold mb-0">{title}</h5>
      </div>

      {/* Liste des skills */}
      <div className="space-y-4">
        {skills.map((skill, i) => (
          <SkillBar
            key={i}
            name={skill.name}
            percent={skill.percent}
            colorStart={colorStart}
            colorEnd={colorEnd}
          />
        ))}
      </div>
    </div>
  );
}
