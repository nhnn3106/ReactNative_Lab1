"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
// bai15
console.log("--------Bài 15--------");
// bai16
console.log("--------Bài 16--------");
// bai17
console.log("--------Bài 17--------");
// bai18
console.log("--------Bài 18--------");
// bai19
console.log("--------Bài 19--------");
// bai20
console.log("--------Bài 20--------");
// bai21
console.log("--------Bài 21--------");
// bai22
console.log("--------Bài 22--------");
// bai23
console.log("--------Bài 23--------");
// bai24
console.log("--------Bài 24--------");
// bai25
console.log("--------Bài 25--------");
// bai26
console.log("--------Bài 26--------");
// bai27
console.log("--------Bài 27--------");
// bai28
console.log("--------Bài 28--------");
// bai29
console.log("--------Bài 29--------");
// bai30
console.log("--------Bài 30--------");
