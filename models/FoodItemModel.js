class FoodItemModel {
  constructor(id, name, category, calories, date) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.calories = calories;
    this.date = date;
  }
}

module.exports = FoodItemModel;