const menu = {
    _courses: {
        _appetizers: [],
        _mains: [],
        _desserts: [],

        get appetizers() {
            return this._appetizers;
        },
        set appetizers(appetizer) {
            this._appetizers = appetizer;
        },
        get mains() {
            return this._mains;
        },
        set mains(main) {
            this._mains = main;
        },
        get desserts() {
            return this._desserts;
        },
        set desserts(desserts) {
            this._desserts = dessert;
        },
    },

    get courses() {
        return {
            appetizers: this._courses.appetizers,
            mains: this._courses.mains,
            desserts: this._courses.desserts,
        };
    },
    addDishToCourse (courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice,
        };

        this.courses[courseName].push(dish);
    },

    getRandomDishFromCourse (courseName) {
        const dishes = this.courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },

    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;

        return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. The price is $${totalPrice.toFixed(2)}.`;
    },
};

menu.addDishToCourse('appetizers', 'Ceasar Salad', 4.25);
menu.addDishToCourse('appetizers', 'Salad', 4.25);
menu.addDishToCourse('appetizers', 'Bread', 3.50);

menu.addDishToCourse('mains', 'Lasagna', 9.75);
menu.addDishToCourse('mains', 'Pizza', 14.95);
menu.addDishToCourse('mains', 'Hamburger', 12.95);

menu.addDishToCourse('desserts', 'Ice Cream', 4.50);
menu.addDishToCourse('desserts', 'Coffee', 4.25);
menu.addDishToCourse('desserts', 'Yoghurt', 3.25);

const meal = menu.generateRandomMeal();
console.log(meal);