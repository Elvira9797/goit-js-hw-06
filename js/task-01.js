const categories = document.querySelector("#categories");
const categoriesArr = categories.children;

console.log(`Number of categories: ${categories.children.length}`);

[...categoriesArr].forEach((el) => {
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.lastElementChild.children.length}`);
});
