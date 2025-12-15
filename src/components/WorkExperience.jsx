import { Briefcase } from "lucide-react";

export default function WorkExperience() {
  return (
    <div className="work">
      <h2>Work Experience</h2>
      <p className="work-subtext">
        All my professional experiences as a software engineer
      </p>

      <div className="work-card">
        <Briefcase size={18} className="work-icon" />

        <div>
          <h3>Renault Group</h3>
          <p className="role">Product Software Developer(DevOps)</p>
          <p className="duration">October 2025 – Present</p>
        </div>
      </div>
    </div>
  );
}
