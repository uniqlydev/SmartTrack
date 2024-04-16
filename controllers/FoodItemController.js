const { db, addDoc, collection } = require("../models/firebase");
const FoodItemModel = require("../models/FoodItemModel");


exports.addFood = async (req, res) => {
    try {
        const { name, category, calories, date } = req.body;
    
        // Create a new FoodItemModel object
        const foodItem = new FoodItemModel(null, name, category, calories, date);

        // Extract properties from the FoodItemModel instance
        const foodData = {
            name: foodItem.name,
            category: foodItem.category,
            calories: foodItem.calories,
            date: foodItem.date
        };

        // Add the plain JavaScript object to Firestore
        const foodCollection = collection(db, 'foods');
        const docRef = await addDoc(foodCollection, foodData);

        

        // Send the ID of the newly created document in the response
        res.status(200).send(docRef.id);
    } catch (error) {
        // Handle errors
        res.status(500).send(error.message);
    }
};

