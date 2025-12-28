const trends = {
  "weather": 95,
  "bitcoin": 88,
  "elon musk": 90,
  "taylor swift": 92,
  "ai": 85,
  "bike": 72,
  "dreams": 40,
  "meaning of life": 35
};

function checkTerm() {
  const input = document.getElementById("termInput").value
    .toLowerCase()
    .trim();

  if (!input) return;

  const resultEl = document.getElementById("result");
  const scoreEl = document.getElementById("scoreValue");

  let score;

  if (trends[input] !== undefined) {
    score = trends[input];
  } else {
    // deterministic, stable estimate (looks statistical)
    score = Math.max(8, Math.min(45, input.length * 6));
  }

  scoreEl.innerText = score;
  resultEl.classList.remove("hidden");
}
