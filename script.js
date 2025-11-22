const words = ["Frontend Developer", "AI Researcher", "UI Designer"];
let i = 0;
let j = 0;

function type() {
  const text = words[i];
  document.getElementById("typing").textContent = text.substring(0, j++);

  if (j > text.length) {
    setTimeout(() => { j = 0; i = (i + 1) % words.length; }, 1500);
  }
  setTimeout(type, 120);
}
type();
