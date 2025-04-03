const mongoose = require('mongoose'); // Kopplar biblotek till Node,js till MongoDB
require('dotenv').config();           // Kopplar till .env filen
const Dish = require('.models/dish'); // Kopplar till modellen Dish min MongoDB kollektion

const dishes = [
    {
        name: 'Spaghetti Köttfärsås',
        ingredients: ['Spaghetti', 'Köttfärs', 'Tomatsås', 'Lök', ],
        preperationSteps: ['Salta vatten','Koka upp vatten', 'Hacka lök','Stek färsen', 'Tillsätt tomatsås', 'Koka spaghettin', 'Låt det puttra medans vi väntar på spaghettin'],
        cookingTime: 30,
        origin: 'Italien',
        difficulty: 'Medium',

    },
]
