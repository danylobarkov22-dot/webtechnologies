var car1 = new Object();
car1.color = "green";
car1.maxSpeed = 110;
car1.driver = {
    name: "Барков Данило",
    category: "C",
    personalLimitations: "No driving at night"
};
car1.tuning = true;
car1.numberOfAccidents = 0;

var car2 = {
    color: "black",
    maxSpeed: 220,
    driver: {
        name: "Барков Данило",
        category: "B",
        personalLimitations: null
    },
    tuning: false,
    numberOfAccidents: 2
};

car1.drive = function() {
    console.log("I am not driving at night");
};
console.log(" car1.drive: ");
car1.drive();

car2.drive = function() {
    console.log("I can drive anytime");
};
console.log(" car2.drive: ");
car2.drive();

function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;
    this.driver = null;

    this.trip = function() {
        if (!this.driver) {
            console.log("No driver assigned");
        } else {
            var nightMsg = this.driver.nightDriving ? "drives at night" : "does not drive at night";
            console.log("Driver " + this.driver.name + " " + nightMsg + " and has " + this.driver.experience + " years of experience");
        }
    };
}

Truck.prototype.AssignDriver = function(name, nightDriving, experience) {
    this.driver = {
        name: name,
        nightDriving: nightDriving,
        experience: experience
    };
};

console.log(" Truck: ");
var truck1 = new Truck("red", 5000, 85.5, "MAN", "TGX");
var truck2 = new Truck("white", 4500, 90.0, "Scania", "R500");

truck1.AssignDriver("Барков Данило", true, 10);
truck2.AssignDriver("Барков Данило", false, 2);

truck1.trip();
truck2.trip();

class Square {
    constructor(a) {
        this.a = a;
    }

    static help() {
        console.log("Квадрат: Чотирикутник, у якого всі сторони рівні, а кути прямі (90°).");
    }

    length() {
        console.log(`Периметр квадрата: ${4 * this.a}`);
    }

    square() {
        console.log(`Площа квадрата: ${this.a * this.a}`);
    }

    info() {
        console.log(`Характеристика Квадрата:
Сторони: ${this.a}, ${this.a}, ${this.a}, ${this.a}
Кути: 90°, 90°, 90°, 90°
Периметр: ${4 * this.a}
Площа: ${this.a * this.a}`);
    }
}

class Rectangle extends Square {
    constructor(a, b) {
        super(a);
        this.b = b;
    }

    static help() {
        console.log("Прямокутник: Чотирикутник, у якого протилежні сторони рівні, а кути прямі.");
    }

    length() {
        console.log(`Периметр прямокутника: ${2 * (this.a + this.b)}`);
    }

    square() {
        console.log(`Площа прямокутника: ${this.a * this.b}`);
    }

    info() {
        console.log(`Характеристика Прямокутника:
Сторони: ${this.a}, ${this.b}, ${this.a}, ${this.b}
Кути: 90°, 90°, 90°, 90°
Периметр: ${2 * (this.a + this.b)}
Площа: ${this.a * this.b}`);
    }
}

class Rhombus extends Square {
    constructor(a, alpha, beta) {
        super(a);
        this._alpha = alpha;
        this._beta = beta;
    }

    get alpha() { return this._alpha; }
    set alpha(val) { this._alpha = val; }
    get beta() { return this._beta; }
    set beta(val) { this._beta = val; }

    static help() {
        console.log("Ромб: Паралелограм, у якого всі сторони рівні.");
    }

    length() {
        console.log(`Периметр ромба: ${4 * this.a}`);
    }

    square() {
        let area = Math.pow(this.a, 2) * Math.sin(this.alpha * Math.PI / 180);
        console.log(`Площа ромба: ${area.toFixed(2)}`);
    }

    info() {
        let area = Math.pow(this.a, 2) * Math.sin(this.alpha * Math.PI / 180);
        console.log(`Характеристика Ромба:
Сторони: ${this.a}, ${this.a}, ${this.a}, ${this.a}
Кути: ${this.alpha}°, ${this.beta}°, ${this.alpha}°, ${this.beta}°
Периметр: ${4 * this.a}
Площа: ${area.toFixed(2)}`);
    }
}

class Parallelogram extends Rectangle {
    constructor(a, b, alpha, beta) {
        super(a, b);
        this.alpha = alpha;
        this.beta = beta;
    }

    static help() {
        console.log("Паралелограм: Чотирикутник, у якого протилежні сторони попарно паралельні.");
    }

    length() {
        console.log(`Периметр паралелограма: ${2 * (this.a + this.b)}`);
    }

    square() {
        let area = this.a * this.b * Math.sin(this.alpha * Math.PI / 180);
        console.log(`Площа паралелограма: ${area.toFixed(2)}`);
    }

    info() {
        let area = this.a * this.b * Math.sin(this.alpha * Math.PI / 180);
        console.log(`Характеристика Паралелограма:
Сторони: ${this.a}, ${this.b}, ${this.a}, ${this.b}
Кути: ${this.alpha}°, ${this.beta}°, ${this.alpha}°, ${this.beta}°
Периметр: ${2 * (this.a + this.b)}
Площа: ${area.toFixed(2)}`);
    }
}

console.log(" довідки ");
Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

console.log("Інформація про фігури");
const mySquare = new Square(10);
const myRect = new Rectangle(10, 5);
const myRhombus = new Rhombus(10, 120, 60);
const myParall = new Parallelogram(10, 6, 150, 30);

mySquare.info();
myRect.info();
myRhombus.info();
myParall.info();

function Triangular({ a = 3, b = 4, c = 5 } = {}) {
    return { a, b, c };
}

console.log("Об'єкти Triangular");
console.log(Triangular()); 
console.log(Triangular({ a: 7, b: 24, c: 25 }));
console.log(Triangular({ a: 10, b: 10, c: 12 }));

function PiMultiplier(k) {
    return function() {
        return Math.PI * k;
    };
}

const piMul2 = PiMultiplier(2);
const piMul1_5 = PiMultiplier(1.5); 
const piDiv2 = PiMultiplier(0.5);   

console.log("Результати PiMultiplier");
console.log(`PI * 2: ${piMul2()}`);
console.log(`PI * 1.5: ${piMul1_5()}`);
console.log(`PI / 2: ${piDiv2()}`);

function Painter(color) {
    return function(obj) {
        if (obj && obj.type) {
            console.log(`Колір: ${color}, Тип: ${obj.type}`);
        } else {
            console.log("No 'type' property occurred!");
        }
    };
}

const PaintBlue = Painter("blue");
const PaintRed = Painter("red");
const PaintYellow = Painter("yellow");

const testObj1 = { maxSpeed: 280, type: "Truck", color: "purple" };
const testObj2 = { type: "Sportcar", maxSpeed: 180, color: "magenta" };
const testObj3 = { avgSpeed: 90, loadCapacity: 2400, isCar: true }; 

console.log("Робота Painter");
PaintBlue(testObj1);
PaintRed(testObj2);
PaintYellow(testObj3);
