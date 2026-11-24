export const skillCategories = [
  {
    id: "all",
    label: "All",
  },
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
      { name: "JavaScript", icon: "javascript" },
      { name: "React.js", icon: "react" },
      { name: "Bootstrap", icon: "bootstrap" },
      { name: "React Native", icon: "react" },
      { name: "Flutter", icon: "flutter" },
    ],
  },
  {
    id: "backend",
    label: "Backend & APIs",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express.js", icon: "express" },
      { name: "Python Flask", icon: "flask" },
      { name: "REST APIs", icon: "api" },
      { name: "JWT", icon: "security" },
      { name: "bcrypt", icon: "security" },
      { name: "RBAC", icon: "security" },
      { name: "WebAuthn", icon: "security" },
      { name: "Google Login API", icon: "google" },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    skills: [
      { name: "MongoDB", icon: "mongodb" },
      { name: "MySQL", icon: "mysql" },
      { name: "SQLite", icon: "sqlite" },
      { name: "Firebase", icon: "firebase" },
    ],
  },
  {
    id: "languages",
    label: "Languages",
    skills: [
      { name: "C++", icon: "cpp" },
      { name: "Java", icon: "java" },
      { name: "Python", icon: "python" },
      { name: "JavaScript", icon: "javascript" },
      { name: "C", icon: "c" },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    skills: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "VS Code", icon: "vscode" },
      { name: "PyCharm", icon: "pycharm" },
      { name: "Jupyter", icon: "jupyter" },
      { name: "Google Colab", icon: "colab" },
      { name: "Figma", icon: "figma" },
    ],
  },
  {
    id: "data-cloud",
    label: "Data & Cloud",
    skills: [
      { name: "Apache Spark", icon: "spark" },
      { name: "PySpark", icon: "spark" },
      { name: "Kafka", icon: "kafka" },
      { name: "Airflow", icon: "airflow" },
      { name: "AWS", icon: "aws" },
    ],
  },
];

// Flat list of all skills for "All" filter
export const allSkills = skillCategories
  .filter((c) => c.id !== "all")
  .flatMap((c) => c.skills.map((s) => ({ ...s, category: c.id })));

