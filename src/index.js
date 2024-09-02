function generateRecipe(event) {
  event.preventDefault();
  let recipeTextElement = document.querySelector("#recipe-text");
  new Typewriter(recipeTextElement, {
    strings: `<h2>Spaghetti Carbonara</h2><div><br /><strong>Ingredients</strong> <br /><br />½ tbsp olive oil
              <br />75g/2½ oz pancetta chopped <br />200g/7oz dried spaghetti
              <br />
              2 large free-range eggs <br />
              100g/3½oz Parmesan, grated, plus extra for serving <br />
              1 tbsp full-fat milk (optional) <br />
              salt and freshly ground pepper <br /><br />
             `,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let recipeFormElement = document.querySelector("#recipe-form");
recipeFormElement.addEventListener("submit", generateRecipe);
