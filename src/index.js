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
              <strong>Method</strong> <br /><br />
              1. Heat the oil in a frying pan over a medium heat. Add the
              pancetta and cook until crisp and slightly browned. Remove the pan
              from the heat and set aside. <br />
              2. Bring a large saucepan of salted water to the boil. Add the
              spaghetti and cook for 8 to 10 minutes, until firm but slightly
              chewy (al dente). <br />
              3. While the spaghetti is cooking, beat together the eggs and
              Parmesan with a fork. If it's a little thick, add some milk.
              Season well with salt and pepper. <br />
              4. Once the spaghetti is cooked, drain over a bowl, reserving some
              of the cooking water. Place the frying pan with the pancetta in
              back over a medium to low heat. Add the drained spaghetti and egg
              mixture and stir thoroughly so all the spaghetti is coated in the
              sauce. Add 1 to 2 tablespoons of the reserved pasta water to
              loosen, if necessary. Serve immediately on hot plates with grated
              Parmesan on top.
             `,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let recipeFormElement = document.querySelector("#recipe-form");
recipeFormElement.addEventListener("submit", generateRecipe);
