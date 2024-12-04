// Visitor Implementations
var CarVisitor = function () {
    this.visit = function (car) {
        if (car.seats > 2) {
            console.log('This is clearly a car for old people');
        } else {
            console.log('My bet is this car has at least 2 cylinders');
        }
    };
};

var TruckVisitor = function () {
    this.visit = function (truck) {
        if (truck.towPackage) {
            console.log('We need to buy a boat');
        }
    };
};

var MonsterTruckVisitor = function () {
    this.visit = function (monsterTruck) {
        if (monsterTruck.looksLikeADragon) {
            console.log('That is a badass monster truck');
        } else {
            console.log('Loser');
        }
    };
};

// Objects
var carVariable = function () {
    this.seats = 5;
    this.accept = function (visitorObject) {
        visitorObject.visit(this);
    };
};

var truckVariable = function () {
    this.towPackage = true;
    this.accept = function (visitorObject) {
        visitorObject.visit(this);
    };
};

var monsterTruckVariable = function () {
    this.looksLikeADragon = true;
    this.accept = function (visitorObject) {
        visitorObject.visit(this);
    };
};

// Testing the Visitors
var myCar = new carVariable();
myCar.seats = 2;
myCar.accept(new CarVisitor());

var myTruck = new truckVariable();
myTruck.accept(new TruckVisitor());

var myMonsterTruck = new monsterTruckVariable();
myMonsterTruck.looksLikeADragon = false;
myMonsterTruck.accept(new MonsterTruckVisitor());

