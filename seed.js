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
    {
        name: 'Hemmagjord Pizza',
        ingredients: ['Pizzadeg', 'Tomatsås', 'Ost', 'Skinka', 'Paprika', 'Lök'],
        preperationSteps: ['Blanda mjöl och vatten i en bunke', 'Kavla ut degen', 'Lägg på tomatsås', 'Lägg på ost och skinka', 'Grädda i ugnen på 220 grader i 10-15 minuter'],
        cookingTime: 30,
        origin: 'Italien',
        difficulty: 'Easy',

    },
    {
        name: 'Spaghetti Carbonara',
        ingredients: ['Spaghetti', 'Bacon', 'Ägg', 'Parmesanost', 'Svartpeppar'],
        preperationSteps: ['Koka spaghettin', 'Stek bacon', 'Vispa ihop ägg och parmesanost', 'Blanda allt i en skål'],
        cookingTime: 20,
        origin: 'Italien',
        difficulty: 'Medium',
    },
    {
        name: 'Ugnspannkaka',
        ingredients: ['Mjöl', 'Mjölk', 'Ägg', 'Salt'],
        preperationSteps: ['Vispa ihop mjöl, mjölk och ägg', 'Häll i en ugnsform', 'Grädda i ugnen på 200 grader i 30 minuter'],
        cookingTime: 30,
        origin: 'Sverige',
        difficulty: 'Easy',
    },
]
mongoose.connect(process.env.CONNECTION_URL)
  .then(async () => {
    console.log('Ansluten till MongoDB!');
    await Dish.deleteMeny(); // rensar tidigare rätter
    await Dish.insertMeny(dishes); // lägger in dina recept
    console.log("Rätter har lagts till!");
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error("Fel vid anslutning:", err.message);
  });

