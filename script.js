const recipes = [
  { title: "Thang noodle", time: "20 mins", servings: "4 servings", tag: "Quick & easy", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=85", position: "center" },
  { title: "Mango sticky rice", time: "25 mins", servings: "4 servings", tag: "Sweet", image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=600&q=85", position: "center" },
  { title: "Corn spicy salad", time: "15 mins", servings: "2 servings", tag: "Fresh", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=85", position: "center" },
  { title: "Herb noodle bowl", time: "20 mins", servings: "2 servings", tag: "Weeknight", image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=600&q=85", position: "center" },
  { title: "Golden mango rice", time: "25 mins", servings: "4 servings", tag: "Popular", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=85", position: "center" },
  { title: "Garden crunch salad", time: "10 mins", servings: "2 servings", tag: "Fresh", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=85", position: "center" },
  { title: "Noodle soup", time: "30 mins", servings: "3 servings", tag: "Comfort food", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=85", position: "center" }
];

const track = document.querySelector("#recipe-track");

recipes.forEach((recipe) => {
  const card = document.createElement("article");
  card.className = "recipe-card";
  card.innerHTML = `
    <img src="${recipe.image}" alt="${recipe.title}" loading="lazy" style="object-position:${recipe.position}" />
    <span class="card-tag">${recipe.tag}</span>
    <div class="card-copy"><h2>${recipe.title}</h2><p>${recipe.time} | ${recipe.servings}</p></div>
  `;
  track.append(card);
});

document.querySelectorAll(".carousel-button").forEach((button) => {
  button.addEventListener("click", () => {
    const direction = button.dataset.direction === "next" ? 1 : -1;
    const card = track.querySelector(".recipe-card");
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 12;
    track.scrollBy({ left: direction * ((card?.getBoundingClientRect().width || 116) + gap) * 3, behavior: "smooth" });
  });
});
