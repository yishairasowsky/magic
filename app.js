const trends = {
  "weather": 95,
  "bitcoin": 88,
  "elon musk": 90,
  "taylor swift": 92,
  "ai": 85,
  "dreams": 40,
  "meaning of life": 35
};

function handleKey(e) {
  if (e.key === "Enter") {
    checkTerm();
  }
}

function checkTerm() {
  const inputEl = document.getElementById("termInput");
  const input = inputEl.value.toLowerCase().trim();

  const resultEl = document.getElementById("result");
  resultEl.classList.remove("hidden");

  if (!input) {
    resultEl.innerText = "Please enter a search term.";
    return;
  }

  const score = trends[input];

  if (score !== undefined) {
    resultEl.innerText = `"${input}" — estimated search frequency index: ${score}/100`;
  } else {
    resultEl.innerText = `"${input}" — estimated search frequency index: <10/100`;
  }
}
