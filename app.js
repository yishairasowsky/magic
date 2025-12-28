const trends = {
  "weather": 95,
  "bitcoin": 88,
  "elon musk": 90,
  "taylor swift": 92,
  "ai": 85,
  "dreams": 40,
  "meaning of life": 35
};

function checkTerm() {
  const input = document.getElementById("termInput").value
    .toLowerCase()
    .trim();

  const resultEl = document.getElementById("result");
  resultEl.classList.remove("hidden");

  if (!input) {
    resultEl.innerText = "You need to think of something first.";
    return;
  }

  const score = trends[input];

  if (score !== undefined) {
    resultEl.innerText =
      `"${input}" is a commonly searched thought right now.`;
  } else {
    resultEl.innerText =
      `"${input}" isn’t searched very often — which usually means it’s more personal than public.`;
  }
}