const { db, addDoc, collection, getDocs } = require("../models/firebase");
const FoodItemModel = require("../models/FoodItemModel");
const { v4: uuidv4 } = require('uuid');


exports.addFood = async (req, res) => {
    try {
        const { name, category, calories, date} = req.body;

        // Generate a random UID for the food item
        const username = req.session.username || "testuser" // testing only 



    
        // Create a new FoodItemModel object
        const foodItem = new FoodItemModel(username, name, category, calories, date);

        // Extract properties from the FoodItemModel instance
        const foodData = {
            id: foodItem.id,
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


exports.retrieveFoodsByUser = async (req, res) => {
    try {
        // Get the username from the session
        const username = req.session.username || "testuser"; // testing only

        // Query Firestore for all documents with the username
        const foodCollection = collection(db, 'foods');
        const querySnapshot = await getDocs(foodCollection);

        // Create an array to store the results
        const foods = [];

        // Loop through the documents and add them to the array
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            if (data.id === username) {
                // Create food item object
                const foodItem = new FoodItemModel(data.id, data.name, data.category, data.calories, data.date);
                foods.push(foodItem);
            }
        });

        // Send the array in the response
        return foods;
    } catch (error) {
        // Handle errors
        res.status(500).send(error.message);
    }
};
