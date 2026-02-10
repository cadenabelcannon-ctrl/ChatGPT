const countries = Array.from(document.querySelectorAll(".country"));
const resetButton = document.querySelector(".reset");
const palette = [
  "#4aa3ff",
  "#7b66ff",
  "#ff7ad9",
  "#ff9d4d",
  "#54e1b1",
  "#ffd166",
  "#6ee7ff",
  "#c9ff4d",
];

const colorAssignments = new Map();
let nextColorIndex = 0;

const assignColor = (country) => {
  const name = country.dataset.name;
  if (!colorAssignments.has(name)) {
    colorAssignments.set(name, palette[nextColorIndex % palette.length]);
    nextColorIndex += 1;
  }
  return colorAssignments.get(name);
};

const clearSelection = () => {
  countries.forEach((country) => {
    country.classList.remove("active");
    country.style.removeProperty("--country-color");
  });
};

countries.forEach((country) => {
  country.addEventListener("click", () => {
    const isActive = country.classList.contains("active");
    if (isActive) {
      country.classList.remove("active");
      country.style.removeProperty("--country-color");
    } else {
      country.classList.add("active");
      country.style.setProperty("--country-color", assignColor(country));
    }
  });
});

resetButton?.addEventListener("click", clearSelection);
