"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai15_1 = require("./bai15");
const bai09_1 = require("./bai09");
const bai01_1 = require("./bai01");
const bai02_1 = require("./bai02");
const bai03_1 = require("./bai03");
const bai04_1 = require("./bai04");
const bai05_1 = require("./bai05");
const bai06_1 = require("./bai06");
const bai07_1 = require("./bai07");
const bai08_1 = require("./bai08");
const bai10_1 = require("./bai10");
const bai11_1 = require("./bai11");
const bai12_1 = require("./bai12");
const bai13_1 = require("./bai13");
const bai14_1 = require("./bai14");
const bai16_1 = require("./bai16");
const bai17_1 = require("./bai17");
const bai18_1 = require("./bai18");
const bai19_1 = require("./bai19");
const bai20_1 = require("./bai20");
const bai21_1 = require("./bai21");
const bai22_1 = require("./bai22");
const bai23_1 = require("./bai23");
const bai24_1 = require("./bai24");
const bai25_1 = require("./bai25");
const bai27_1 = require("./bai27");
const bai26_1 = require("./bai26");
const bai28_1 = require("./bai28");
const bai29_1 = require("./bai29");
const bai30_1 = require("./bai30");
// bai 01
console.log("--------Bài 01--------");
const person = new bai01_1.Person("Nhân", 21);
person.dislayInfo();
// bai02
console.log("--------Bài 02--------");
const student = new bai02_1.Student("Nhân", 21, 9.5);
student.displayAllInfo();
// bai03
console.log("--------Bài 03--------");
const car = new bai03_1.Car("Toyota", "v6", 1999);
car.dislayInfo();
// bai04
console.log("--------Bài 04--------");
const rectangle = new bai04_1.Rectangle(20, 10);
console.log("Area: " + rectangle.calcArea());
console.log("Perimeter: " + rectangle.calcPerimeter());
// bai05
console.log("--------Bài 05--------");
const bankAccount = new bai05_1.BankAccount(1000);
bankAccount.deposit(100);
bankAccount.withdraw(200);
// bai06
console.log("--------Bài 06--------");
const book = new bai06_1.Book("300 bài code thiếu nhi", "Phạm Huy Hoàng", 2020);
console.log(book);
// bai07
console.log("--------Bài 07--------");
const user = new bai07_1.User();
user.setName("Tèo");
console.log("Name of user: " + user.getName());
// bai08
console.log("--------Bài 08--------");
const productArr = [
    new bai08_1.Product("Laptop", 40),
    new bai08_1.Product("Mobile", 60),
    new bai08_1.Product("Mouse", 70),
    new bai08_1.Product("Keyboard", 80),
    new bai08_1.Product("Charge", 90),
    new bai08_1.Product("Airburb", 100),
    new bai08_1.Product("Laptop", 120)
];
console.log(productArr.filter((el) => el.price > 100));
// bai09
console.log("--------Bài 09--------");
const animal = new bai09_1.Dog("dog");
animal.sound();
// bai10
console.log("--------Bài 10--------");
const account = new bai10_1.Account("HFD032");
account.setBalance(1000);
account.accountHolder = "Nhân";
console.log(account);
// bai11
console.log("--------Bài 11--------");
const dog = new bai11_1.Dog();
dog.bark();
const cat = new bai11_1.Cat();
cat.meow();
// bai12
console.log("--------Bài 12--------");
const bird = new bai12_1.Bird();
bird.fly();
const fish = new bai12_1.Fish();
fish.swim();
// bai13
console.log("--------Bài 13--------");
const square = new bai13_1.Square(10);
square.describe();
const circle = new bai13_1.Circle(10);
circle.describe();
// bai14
console.log("--------Bài 14--------");
const manager = new bai14_1.Manager("Alice", 101, 5);
manager.displayInfo();
manager.conductMeeting();
const developer = new bai14_1.Developer("Bob", 102, "Typescript");
developer.displayInfo();
developer.writeCode();
// bai15
console.log("--------Bài 15--------");
const library = new bai15_1.Library([], []);
library.addBooks([
    new bai06_1.Book("Chơi vơi", "Tèo", 1990),
    new bai06_1.Book("Lạc lõng", "Tí", 1999)
]);
console.log(library);
// bai16
console.log("--------Bài 16--------");
const box = new bai16_1.Box(library);
console.log(box);
// bai17
console.log("--------Bài 17--------");
const logger1 = bai17_1.Logger.getInstance();
const logger2 = bai17_1.Logger.getInstance();
logger1.log("App started");
logger2.warn("Low disk space");
console.log(`Nếu kết quả là true thì Logger là singleton class: ${logger1 === logger2}`);
// bai18
console.log("--------Bài 18--------");
const a = 10, b = 5;
console.log("a = 10, b = 5");
console.log("a + b = " + bai18_1.MathUtil.add(a, b));
console.log("a + b = " + bai18_1.MathUtil.subtract(a, b));
console.log("a + b = " + bai18_1.MathUtil.multiply(a, b));
console.log("a + b = " + bai18_1.MathUtil.divide(a, b));
// bai19
console.log("--------Bài 19--------");
const animals = [
    new bai19_1.Dog("Annie"),
    new bai19_1.Cat("Bob"),
    new bai19_1.Dog("Alice"),
    new bai19_1.Dog("Nick"),
];
console.log(animals);
// bai20
console.log("--------Bài 20--------");
const car2 = new bai20_1.Car();
const bike = new bai20_1.Bike();
console.log(car2.runBy);
console.log(bike.runBy);
// bai21
console.log("--------Bài 21--------");
const reposity = new bai21_1.Reposity([]);
reposity.add(new bai19_1.Dog("Annie"));
reposity.add(new bai19_1.Cat("Bob"));
reposity.getAll();
// bai22
console.log("--------Bài 22--------");
const stack = new bai22_1.Stack();
stack.push(new bai06_1.Book("Chơi vơi", "Tèo", 1990));
stack.push(new bai06_1.Book("Lạc lõng", "Tí", 1999));
stack.print();
stack.pop();
stack.print();
// bai23
console.log("--------Bài 23--------");
const cardPayment = new bai23_1.CardPayment();
const cashPayment = new bai23_1.CashPayment();
cardPayment.pay(1000);
cashPayment.pay(1000);
// bai24
console.log("--------Bài 24--------");
const fan = new bai24_1.Fan();
const airConditioner = new bai24_1.AirConditioner();
fan.turnOn();
airConditioner.turnOn();
// bai25
console.log("--------Bài 25--------");
bai25_1.Shape.describe();
// bai26
console.log("--------Bài 26--------");
const order = new bai26_1.Order([
    new bai08_1.Product("Laptop", 40),
    new bai08_1.Product("Mobile", 60),
    new bai08_1.Product("Mouse", 70),
    new bai08_1.Product("Keyboard", 80),
    new bai08_1.Product("Charge", 90),
    new bai08_1.Product("Airburb", 100),
    new bai08_1.Product("Laptop", 120)
]);
console.log(`Total price of this order is ${order.calcTotalPrice()}`);
// bai27
console.log("--------Bài 27--------");
const teacher = new bai27_1.Teacher("Tủn", 21, "Information Technology");
teacher.introduce();
// bai28
console.log("--------Bài 28--------");
const dog4 = new bai28_1.Dog();
dog4.makeSound();
const cat4 = new bai28_1.Cat();
cat4.makeSound();
// bai29
console.log("--------Bài 29--------");
const car3 = new bai29_1.Car();
const robot = new bai29_1.Robot();
car3.move();
robot.move();
// bai30
console.log("--------Bài 30--------");
const school = new bai30_1.School([new bai02_1.Student("Nhân", 21, 9.5), new bai02_1.Student("Nhân2", 21, 9.5)], [new bai27_1.Teacher("Tủn", 21, "Information Technology"), new bai27_1.Teacher("Tủn2", 21, "Information Technology")]);
school.display();
