/*eslint-env browser*/
var favRecipe = {
    title: "Guacamole",
    servings: 4,
    ingredients: ["3 Avocados", "1 Lime", "1 Teaspoon Salt", "1/2 Cup Onion", "3 Tablespoons Cilantro", "2 Diced Tomatoes", "1 Teaspoon Garlic", "1 Pinch Ground Pepper"]
};

window.console.log(favRecipe.title);
window.console.log('Servings: ' + favRecipe.servings);
window.console.log('Ingredients:');
var i;
for (i = 0; i < favRecipe.ingredients.length; i += 1) {
    window.console.log(favRecipe.ingredients[i]);
}