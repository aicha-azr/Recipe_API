const express = require('express');
const mongoose = require('mongoose');
const app = express();
const router = require('./Router/router.js');
require('dotenv').config()
const uri = process.env.DB_CONNECTION_STRING;
const port = 5000;
app.use(express.json());
mongoose.connect(uri)
.then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((e) => {
    console.error('Failed to connect to MongoDB:', e.message);
  });
  app.use('/recipes', router);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/home`);
});
 /*
 const Recipes = require('./internationale.js');
  async function create (){
    try{
       const recip  = await Recipes.create({
        dishType: "dessert",
        name: "Lemon Bars",
        ingredients: [
          "1 cup all-purpose flour",
          "1/2 cup powdered sugar",
          "1/2 cup unsalted butter, softened",
          "2 large eggs",
          "1 cup granulated sugar",
          "2 tablespoons all-purpose flour",
          "1/2 teaspoon baking powder",
          "1/4 teaspoon salt",
          "2 tablespoons lemon juice",
          "1 teaspoon lemon zest",
          "Powdered sugar for dusting"
        ],
        instructions: [
          "Preheat oven to 350°F (175°C). Grease a 9x9-inch baking pan.",
          "In a medium bowl, combine flour, powdered sugar, and softened butter. Press into the bottom of the prepared pan.",
          "Bake the crust for 15-20 minutes or until lightly golden.",
          "In another bowl, whisk together eggs, granulated sugar, flour, baking powder, salt, lemon juice, and lemon zest.",
          "Pour the lemon mixture over the baked crust and return to the oven for an additional 20-25 minutes, or until set.",
          "Allow to cool completely before dusting with powdered sugar and cutting into bars."
        ]
    })
    console.log(recip);
    }catch(e){
      console.log(e.message)
    }
   }
   create();*/