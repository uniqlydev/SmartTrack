const express = require('express');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const foodController = require('./controllers/FoodItemController');

// Add routes
const foodRoutes = require('./routes/FoodRoutes');

const app = express();

// Load dotenv
require('dotenv').config();

const port = process.env.PORT || 8080;

// Setup static files
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Setup view engine
app.set('view engine', 'ejs');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: process.env.SESSION,
    resave: false,
    saveUninitialized: true
}));


// Routes
app.use('/api', foodRoutes);


app.get('/', async (req, res) => {
    try {
        const foods = await foodController.retrieveFoodsByUser(req, res);

        res.render('main/index', {
            'Title': "Track your Progress!",
            caloriesintake: 0,
            foodintake: 0,
            foods: foods
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

