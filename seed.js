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
    {
        name: 'Köttbullar Med Potatismos',
        ingredients: ['Mjölig potatis', 'Köttfärs', 'Ägg', 'Lök', 'Peppar', 'Salt', 'Smör' ,'Mjölk'],
        preperationSteps: ['Blanda färs ägg salt lök och peppar i en skål och blanda','Koka upp vatten', 'Rulla dina köttbullar','', 'Stek dina köttbullar', 'Koka potatisen', 'Mosa potatisen' ,'Lägg i smör och mjölk och blanda runt tills det är en jämn smet'],
        cookingTime: 60,
        origin: 'Sverige',
        difficulty: 'Hard',

    },
]
