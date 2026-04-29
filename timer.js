const weddingDate = new Date("2026-05-29T00:15:30");

function updateTimer() {
  const now = new Date();
  let diff = Math.floor((weddingDate - now) / 1000); // в секундах

  if (diff <= 0) {
    document.querySelector(".timer").textContent = "🎉 Уже началось!";
    return;
  }

  const weeks = Math.floor(diff / (7 * 24 * 60 * 60));
  diff %= 7 * 24 * 60 * 60;

  const days = Math.floor(diff / (24 * 60 * 60));
  diff %= 24 * 60 * 60;

  const hours = Math.floor(diff / (60 * 60));
  diff %= 60 * 60;

  const minutes = Math.floor(diff / 60);
  const seconds = diff % 60;

  // вывод с ведущими нулями
  document.getElementById("weeks").textContent = String(weeks).padStart(2, "0");
  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(
    2,
    "0",
  );
  document.getElementById("seconds").textContent = String(seconds).padStart(
    2,
    "0",
  );
}

updateTimer();
setInterval(updateTimer, 1000);
