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

  const resultEl = document.getElementById("result");
  const scoreEl = document.getElementById("score");

  if (!input) return;

  resultEl.classList.remove("hidden");

  let score;

  if (trends[input] !== undefined) {
    score = trends[input];
  } else {
    // deterministic but looks organic
    score = Math.floor(10 + (input.length * 7) % 35);
  }

  scoreEl.innerText = score;
}
