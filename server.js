const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const Dish = require("./models/dishModel");

const app = express();
const port = process.env.PORT || 5000;
const connectionString = process.env.CONNECTION_URL;

// Middleware för att kunna ta emot JSON
app.use(express.json());
// Middleware för att servera statiska filer
app.use(express.static("public"));


// Test-route
app.get("/api/dishes", async (req, res) => {
  try {
    const dishes = await Dish.find(); // Hämta alla rätter från databasen
    res.json(dishes); // Skicka som JSON
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route för att hämta en specifik rätt
app.post("/api/dishes/", async (req, res) => {
  try {
    const newDish = new Dish(req.body);
    const saveDish = await newDish.save();
    res.status(201).json(saveDish);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
// Route för att hämta en specifik rätt

app.put("/api/dishes/:id", async (req, res) => {
  try {
    const updatedDish = await Dish.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedDish) {
      return res.status(404).json({ message: "Rätt hittades inte" });
    }

    res.json(updatedDish);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Route för att ta bort en rätt

app.delete("/api/dishes/:id", async (req, res) => {
  try {
    const deletedDish = await Dish.findByIdAndDelete(req.params.id);

    if (!deletedDish) {
      return res.status(404).json({ message: "Rätt hittades inte" });
    }

    res.json({ message: "Rätten har tagits bort" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Anslut till MongoDB och starta servern
mongoose.connect(connectionString)
  .then(() => {
    console.log(" Ansluten till MongoDB");
    app.listen(port, () => {
      console.log(` Servern körs på http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error(" Fel vid anslutning:", err.message);
  });