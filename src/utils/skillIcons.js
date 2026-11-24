export function getSkillIcon(icon) {
  const map = {
    html5:      { bg: '#FF5722/15', text: '#FF5722', emoji: '🌐' },
    css3:       { bg: '#1572B6/15', text: '#1572B6', emoji: '🎨' },
    javascript: { bg: '#F7DF1E/15', text: '#F7DF1E', emoji: '𝐉𝐒' },
    react:      { bg: '#61DAFB/15', text: '#61DAFB', emoji: '⚛️' },
    bootstrap:  { bg: '#7952B3/15', text: '#7952B3', emoji: '🅱️' },
    flutter:    { bg: '#02569B/15', text: '#02569B', emoji: '🦋' },
    nodejs:     { bg: '#339933/15', text: '#339933', emoji: '🟢' },
    express:    { bg: '#000000/10', text: '#000000',  emoji: '🚂' },
    flask:      { bg: '#000000/10', text: '#000000',  emoji: '🌶️' },
    api:        { bg: '#FF6B6B/15', text: '#FF6B6B', emoji: '🔗' },
    security:   { bg: '#6425E8/15', text: '#6425E8', emoji: '🔐' },
    google:     { bg: '#4285F4/15', text: '#4285F4', emoji: '🔵' },
    mongodb:    { bg: '#47A248/15', text: '#47A248', emoji: '🍃' },
    mysql:      { bg: '#4479A1/15', text: '#4479A1', emoji: '🐬' },
    sqlite:     { bg: '#003B57/15', text: '#003B57', emoji: '📦' },
    firebase:   { bg: '#FFCA28/15', text: '#FFCA28', emoji: '🔥' },
    cpp:        { bg: '#00599C/15', text: '#00599C', emoji: '⚙️' },
    java:       { bg: '#ED8B00/15', text: '#ED8B00', emoji: '☕' },
    python:     { bg: '#3776AB/15', text: '#3776AB', emoji: '🐍' },
    c:          { bg: '#A8B9CC/15', text: '#A8B9CC', emoji: '📘' },
    git:        { bg: '#F05032/15', text: '#F05032', emoji: '📝' },
    github:     { bg: '#181717/15', text: '#181717', emoji: '🐙' },
    vscode:     { bg: '#007ACC/15', text: '#007ACC', emoji: '💙' },
    pycharm:    { bg: '#21D789/15', text: '#21D789', emoji: '🧡' },
    jupyter:    { bg: '#F37626/15', text: '#F37626', emoji: '📓' },
    colab:      { bg: '#F9AB00/15', text: '#F9AB00', emoji: '🔬' },
    figma:      { bg: '#F24E1E/15', text: '#F24E1E', emoji: '🎭' },
    spark:      { bg: '#E25A1C/15', text: '#E25A1C', emoji: '⚡' },
    kafka:      { bg: '#231F20/15', text: '#231F20', emoji: '📨' },
    airflow:    { bg: '#017CEE/15', text: '#017CEE', emoji: '🌀' },
    aws:        { bg: '#FF9900/15', text: '#FF9900', emoji: '☁️' },
  };
  const defaults = { bg: '#6425E8/10', text: '#6425E8', emoji: '🛠️' };
  const entry = map[icon] || defaults;
  // Parse hex/opacity string into rgba
  const rawBg = entry.bg;
  const [hex, opacity] = rawBg.split('/');
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const a = opacity ? parseInt(opacity) / 100 : 0.1;
  return { bg: `rgba(${r},${g},${b},${a})`, text: entry.text, emoji: entry.emoji };
}

