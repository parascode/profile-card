import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00"
  }
];
function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}
function Avatar() {
  return (
    <div>
      <img src="avatar.jpg" alt="Avatar" className="avatar" />
    </div>
  );
}
function Intro() {
  return (
    <div>
      <h1>Paras Jain</h1>
      <div>
        I am a 3rd year Information Technology student with experience in MERN
        stack and Data analytics, gained through coursework and personal
        projects. Through my studies, I have developed a strong work ethic,
        attention to detail, and a commitment to continuous learning. I excel in
        problem-solving and working collaboratively with others.
      </div>
    </div>
  );
}
function SkillList() {
  return (
    <ul className="skill-list ">
      {/* <div> */}
      {skills.map((skill) => (
        <Skill skill={skill.skill} level={skill.level} color={skill.color} />
      ))}
      {/* </div> */}
      {/* <Skill text = "HTML+CSS 💪" color = "blue"/>
  <Skill text = "JavaScript 💪" color = "yellow"/>
  <Skill text = "Web Design 💪" color = "green"/>
  <Skill text = "Git and Github 👍" color = "red"/>
  <Skill text = "React 👍" color = "skyblue"/>
  <Skill text = "Svelte 👶" color = "orange"/> */}
    </ul>
  );
}
function Skill({ skill, level, color }) {
  let emoji = "";
  if (level === "advanced") emoji = "💪";
  else if (level === "intermediate") emoji = "👍";
  else emoji = "👶";

  const style = { backgroundColor: color };
  return (
    <div className="skill " style={style}>
      {skill + emoji}
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
