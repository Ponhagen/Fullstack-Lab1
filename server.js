const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const Dish = require("./models/dishModel");

const app = express();
const port = process.env.PORT || 5000;
const connectionString = process.env.CONNECTION_URL;

// Middleware för att kunna ta emot JSON
app.use(express.json());

// Test-route
app.get("/api/dishes", async (req, res) => {
  try {
    const dishes = await Dish.find(); // Hämta alla rätter från databasen
    res.json(dishes); // Skicka som JSON
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// Route för att lägga till ny rätt

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