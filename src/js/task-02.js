const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulEl = document.querySelector(`ul#ingredients`);
const elements = ingredients.map(option => {
  const liEl = document.createElement(`li`);
  liEl.classList.add(`item`);
  liEl.textContent = option;
  console.log(liEl);
  return liEl;
});

ulEl.append(...elements);