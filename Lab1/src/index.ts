import { Library } from './bai15';
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
import { Developer, Manager } from './bai14';
import { Box } from './bai16';
import { Logger } from './bai17';
import { MathUtil } from './bai18';
import { Animal as Animal2, Dog as Dog3, Cat as Cat3 } from "./bai19"
import { Car as Car2, Bike } from "./bai20"
import { Reposity } from './bai21';
import { Stack } from './bai22';
import { CardPayment, CashPayment } from './bai23';
import { AirConditioner, Fan } from './bai24';
import { Shape as Shape2 } from "./bai25"
import { Teacher } from './bai27';
import { Order } from './bai26';
import { Dog as Dog4, Cat as Cat4 } from "./bai28"
import { Car as Car3, Robot } from "./bai29"
import { School } from './bai30';
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
const manager = new Manager("Alice", 101, 5);
manager.displayInfo()
manager.conductMeeting()
const developer = new Developer("Bob", 102, "Typescript")
developer.displayInfo()
developer.writeCode()
// bai15
console.log("--------Bài 15--------")
const library = new Library([], []);
library.addBooks([
    new Book("Chơi vơi", "Tèo", 1990),
    new Book("Lạc lõng", "Tí", 1999)])
console.log(library)
// bai16
console.log("--------Bài 16--------")
const box = new Box<Library>(library)
console.log(box)
// bai17
console.log("--------Bài 17--------")
const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

logger1.log("App started");
logger2.warn("Low disk space");

console.log(`Nếu kết quả là true thì Logger là singleton class: ${logger1 === logger2}`)
// bai18
console.log("--------Bài 18--------")
const a: number = 10, b: number = 5
console.log("a = 10, b = 5")
console.log("a + b = " + MathUtil.add(a, b))
console.log("a + b = " + MathUtil.subtract(a, b))
console.log("a + b = " + MathUtil.multiply(a, b))
console.log("a + b = " + MathUtil.divide(a, b))
// bai19
console.log("--------Bài 19--------")
const animals: Animal2[] = [
    new Dog3("Annie"),
    new Cat3("Bob"),
    new Dog3("Alice"),
    new Dog3("Nick"),
];
console.log(animals)
// bai20
console.log("--------Bài 20--------")
const car2 = new Car2();
const bike = new Bike();
console.log(car2.runBy)
console.log(bike.runBy)
// bai21
console.log("--------Bài 21--------")
const reposity = new Reposity<Animal2>([]);
reposity.add(new Dog3("Annie"));
reposity.add(new Cat3("Bob"));
reposity.getAll();
// bai22
console.log("--------Bài 22--------")
const stack = new Stack<Book>();
stack.push(new Book("Chơi vơi", "Tèo", 1990))
stack.push(new Book("Lạc lõng", "Tí", 1999))
stack.print()
stack.pop()
stack.print()
// bai23
console.log("--------Bài 23--------")
const cardPayment = new CardPayment();
const cashPayment = new CashPayment();
cardPayment.pay(1000);
cashPayment.pay(1000);
// bai24
console.log("--------Bài 24--------")
const fan = new Fan();
const airConditioner = new AirConditioner();
fan.turnOn()
airConditioner.turnOn()
// bai25
console.log("--------Bài 25--------")
Shape2.describe()
// bai26
console.log("--------Bài 26--------")
const order = new Order([
    new Product("Laptop", 40),
    new Product("Mobile", 60),
    new Product("Mouse", 70),
    new Product("Keyboard", 80),
    new Product("Charge", 90),
    new Product("Airburb", 100),
    new Product("Laptop", 120)
])
console.log(`Total price of this order is ${order.calcTotalPrice()}`)
// bai27
console.log("--------Bài 27--------")
const teacher = new Teacher("Tủn", 21, "Information Technology")
teacher.introduce()
// bai28
console.log("--------Bài 28--------")
const dog4 = new Dog4()
dog4.makeSound();
const cat4 = new Cat4()
cat4.makeSound();
// bai29
console.log("--------Bài 29--------")
const car3 = new Car3()
const robot = new Robot()
car3.move()
robot.move()
// bai30
console.log("--------Bài 30--------")
const school = new School([new Student("Nhân", 21, 9.5), new Student("Nhân2", 21, 9.5)], [new Teacher("Tủn", 21, "Information Technology"), new Teacher("Tủn2", 21, "Information Technology")])
school.display()
