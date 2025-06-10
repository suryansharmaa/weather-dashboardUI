// Dynamic weather state changes
const weatherStates = ["sunny", "cloudy", "rainy", "stormy"];
let currentState = 0;

function updateWeatherTheme() {
  document.body.className = weatherStates[currentState];
  currentState = (currentState + 1) % weatherStates.length;
}

// Change weather theme every 10 seconds
setInterval(updateWeatherTheme, 10000);

// Enhanced particle system
function createParticle() {
  const particle = document.createElement("div");
  particle.className = "particle";
  particle.style.left = Math.random() * 100 + "%";
  particle.style.animationDelay = Math.random() * 6 + "s";
  particle.style.animationDuration = Math.random() * 3 + 3 + "s";
  document.querySelector(".bg-particles").appendChild(particle);

  // Remove particle after animation
  setTimeout(() => {
    particle.remove();
  }, 6000);
}

// Create new particles periodically
setInterval(createParticle, 1000);

// Interactive hover effects
const cards = document.querySelectorAll(".weather-card, .main-weather");

cards.forEach((card) => {
  card.addEventListener("mouseenter", (e) => {
    e.target.style.filter = "brightness(1.1) saturate(1.2)";
  });

  card.addEventListener("mouseleave", (e) => {
    e.target.style.filter = "brightness(1) saturate(1)";
  });
});

// Real-time clock update
function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.querySelector(
    ".header p"
  ).textContent = `Advanced Atmospheric Intelligence Dashboard - ${timeString}`;
}

setInterval(updateTime, 1000);

// Simulated data updates
function updateWeatherData() {
  const temps = [68, 70, 72, 74, 76, 78];
  const conditions = ["☀️", "⛅", "🌤️", "🌧️", "⛈️"];

  const temp = temps[Math.floor(Math.random() * temps.length)];
  const condition = conditions[Math.floor(Math.random() * conditions.length)];

  document.querySelector(".temperature").textContent = `${temp}°`;
  document.querySelector(".weather-icon").textContent = condition;
}

// Update weather data every 30 seconds
setInterval(updateWeatherData, 30000);

// Initialize
updateTime();






