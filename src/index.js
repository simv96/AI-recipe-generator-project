function displayRecipe(response) {
  new Typewriter("#recipe-text", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();
  console.log("loading answer");
  let recipeTextElement = document.querySelector("#recipe-text");
  new Typewriter(recipeTextElement, {
    strings: ` <h2> Generating Answer...⏳ </h2>`,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
  let instructions = document.querySelector("#user-instructions");
  let apiKey = "fd458173tb03d1086f43379o8aab03af";
  let prompt = `Generate a ${instructions.value} cuisine recipe`;
  let context = `Your are a assistant ai, who can produce recipes for cooking from a range of cuisines. Please be precise and provide a the name of the recips and use bullet points and paragraphs to separate the ingredients from the method. For example 
   <h2>Spaghetti Carbonara</h2><div><br /><strong>Ingredients</strong> <br /><br />½ tbsp olive oil
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
              chewy (al dente). <br />";`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  console.log(apiUrl);
  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-form");
recipeFormElement.addEventListener("submit", generateRecipe);
