import { Animal, Dog } from './bai09';
import { Person } from "./bai01";
import { Student } from "./bai02";
import { Car } from "./bai03";
import { Rectangle } from "./bai04";
import { BankAccount } from "./bai05";
import { Book } from "./bai06";
import { User } from "./bai07";
import { Product } from "./bai08";
import { Account } from './bai10';
import { Dog as Dog2, Cat } from "./bai11"
import { Bird, Fish } from './bai12';
import { Circle, Square } from './bai13';
// bai 01
console.log("--------Bài 01--------")
const person = new Person("Nhân", 21)
person.dislayInfo()
// bai02
console.log("--------Bài 02--------")
const student = new Student("Nhân", 21, 9.5)
student.displayAllInfo()
// bai03
console.log("--------Bài 03--------")
const car = new Car("Toyota", "v6", 1999)
car.dislayInfo()
// bai04
console.log("--------Bài 04--------")
const rectangle = new Rectangle(20, 10);
console.log("Area: " + rectangle.calcArea())
console.log("Perimeter: " + rectangle.calcPerimeter())
// bai05
console.log("--------Bài 05--------")
const bankAccount = new BankAccount(1000);
bankAccount.deposit(100)
bankAccount.withdraw(200)
// bai06
console.log("--------Bài 06--------")
const book = new Book("300 bài code thiếu nhi", "Phạm Huy Hoàng", 2020)
console.log(book)
// bai07
console.log("--------Bài 07--------")
const user = new User()
user.setName("Tèo")
console.log("Name of user: " + user.getName())
// bai08
console.log("--------Bài 08--------")
const productArr: Product[] = [
    new Product("Laptop", 40),
    new Product("Mobile", 60),
    new Product("Mouse", 70),
    new Product("Keyboard", 80),
    new Product("Charge", 90),
    new Product("Airburb", 100),
    new Product("Laptop", 120)
]
console.log(productArr.filter((el) => el.price > 100))
// bai09
console.log("--------Bài 09--------")
const animal: Animal = new Dog("dog")
animal.sound()
// bai10
console.log("--------Bài 10--------")
const account = new Account("HFD032")
account.setBalance(1000)
account.accountHolder = "Nhân"
console.log(account)
// bai11
console.log("--------Bài 11--------")
const dog = new Dog2();
dog.bark()
const cat = new Cat();
cat.meow()
// bai12
console.log("--------Bài 12--------")
const bird = new Bird();
bird.fly()
const fish = new Fish();
fish.swim()
// bai13
console.log("--------Bài 13--------")
const square = new Square(10)
square.describe()
const circle = new Circle(10)
circle.describe()
// bai14
console.log("--------Bài 14--------")

// bai15
console.log("--------Bài 15--------")
// bai16
console.log("--------Bài 16--------")
// bai17
console.log("--------Bài 17--------")
// bai18
console.log("--------Bài 18--------")
// bai19
console.log("--------Bài 19--------")
// bai20
console.log("--------Bài 20--------")
// bai21
console.log("--------Bài 21--------")
// bai22
console.log("--------Bài 22--------")
// bai23
console.log("--------Bài 23--------")
// bai24
console.log("--------Bài 24--------")
// bai25
console.log("--------Bài 25--------")
// bai26
console.log("--------Bài 26--------")
// bai27
console.log("--------Bài 27--------")
// bai28
console.log("--------Bài 28--------")
// bai29
console.log("--------Bài 29--------")
// bai30
console.log("--------Bài 30--------")