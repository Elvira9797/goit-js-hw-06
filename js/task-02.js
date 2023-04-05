const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsUl = document.querySelector("#ingredients");

const createListItem = (ingredients) => {
  return ingredients.map((el) => {
    const li = document.createElement("li");
    li.classList.add("item");
    li.textContent = el;
    return li;
  });
};

const listItem = createListItem(ingredients);
ingredientsUl.append(...listItem);
