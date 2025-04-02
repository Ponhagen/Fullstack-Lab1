const mongoose = require("mongoose");

const dishSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  ingredients: {
    type: [String],
    required: true,
  },
  preparationSteps: {
    type: [String],
    required: true,
  },
  cookingTime: {
    type: Number, // minuter
    required: true,
  },
  origin: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String, // t.ex. "Easy", "Medium", "Hard"
    default: "Medium",
  },
});

const Dish = mongoose.model("Dish", dishSchema);

module.exports = Dish;
